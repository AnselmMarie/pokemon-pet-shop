# Pokemon Pet Shop — Production Deployment & Disaster Recovery Blueprint

## Context

This is the **future production strategy** for the Pokemon Pet Shop MFE. It assumes the dev environment deployment (documented in the main plan) is already working. This blueprint covers AWS S3/CloudFront integration via Zephyr BYOC, HA failover, rollback procedures, and the "double-deploy" CI/CD pipeline.

**Prerequisites:**
- Zephyr Cloud integrated and working (dev environment active)
- AWS account with appropriate IAM permissions
- Custom domain configured

---

## 1. Zephyr BYOC AWS Setup

Zephyr's **Bring Your Own Cloud** model provisions a full edge-serving stack inside your AWS account. The Zephyr control plane manages orchestration (version routing, tag resolution, rollback) while your AWS account owns the data plane (storage + serving).

### Resources Provisioned

| Resource | Name Pattern | Purpose |
|---|---|---|
| S3 Bucket | `ze-pokemonpetshop-bucket` | Asset storage |
| CloudFront Distribution | (auto-generated) | Edge CDN |
| Lambda@Edge | `ze-pokemonpetshop` | Asset upload/serving |
| CloudFront Function | `ze-pokemonpetshop-viewer-request` | Routing logic |
| DynamoDB Table | `ze-pokemonpetshop_envs` | Environment routing state |
| DynamoDB Table | `ze-pokemonpetshop_snapshots` | Immutable deployment manifests |
| Secrets Manager | `ze-pokemonpetshop-store` | Credential storage |
| IAM Role + Policies | `ze-pokemonpetshop_lambda_role_name` | Execution permissions |
| CloudWatch Log Groups | `/aws/lambda/us-east-1.ze-pokemonpetshop` | Observability |

### Setup Steps

1. Create IAM User Group with policies: `AmazonDynamoDBFullAccess`, `AmazonS3FullAccess`, `AWSLambda_FullAccess`, `CloudFrontFullAccess`, `CloudWatchLogsFullAccess`, `IAMFullAccess`, `SecretsManagerReadWrite`
2. Generate CLI access keys → provide to Zephyr dashboard under Deployment Integration → AWS
3. Request ACM certificate in `us-east-1` for `ze.yourdomain.com` + `*.ze.yourdomain.com`
4. Create CNAME DNS records pointing to the CloudFront distribution domain

---

## 2. Production Strategy — Two Scenarios

### Scenario A: AWS as Primary Front Door

```
User → Route 53 → CloudFront (AWS-owned, Zephyr-provisioned)
                       ↓
              Lambda@Edge (routing)
                       ↓
                 S3 (assets)
                       ↓
         Zephyr Control Plane (version resolution via DynamoDB)
```

**How it works:**
- Zephyr's BYOC provisions CloudFront + S3 + Lambda@Edge in YOUR AWS account
- Your custom domain (e.g., `shop.pokemon.com`) points to this CloudFront distribution
- Lambda@Edge queries DynamoDB for the current environment/tag resolution, then serves the correct version's assets from S3
- Zephyr control plane manages version promotion, tag resolution, and rollback — but all traffic flows through your AWS infrastructure
- You can attach AWS WAF, Shield, and custom security policies directly to the CloudFront distribution

**Version promotion flow:**
1. CI builds all apps → Zephyr creates immutable versions → assets stored in your S3 bucket
2. Dev tag auto-resolves to latest MFE branch CI build
3. Manual promotion: In Zephyr dashboard, update `prod` tag or pin production environment to a specific version
4. Lambda@Edge resolves the production environment → serves the pinned version from S3

**Failover mirror (Zephyr managed edge as backup):**
- Configure CloudFront Origin Group with:
  - **Primary**: Your Zephyr-provisioned S3 bucket
  - **Secondary**: Zephyr's managed edge URL
- Failover triggers on: 500, 502, 503, 504

---

### Scenario B: Zephyr Cloud as Primary, AWS as Backup

```
User → Route 53 (health-check failover)
          ├── Primary:   Zephyr managed edge (200+ global PoPs)
          └── Secondary: CloudFront → S3 (your AWS account)
```

**How it works:**
- Your domain points to Zephyr's managed edge via CNAME
- Zephyr serves assets from its own 200+ global edge locations
- AWS S3 + CloudFront acts as a cold standby mirror
- A separate CI step syncs build artifacts to S3 after each Zephyr deployment
- Route 53 health checks monitor the Zephyr endpoint; on failure, DNS failover routes to CloudFront

**S3 sync step (post-build):**
```bash
aws s3 sync ./app-hosts/web/dist/ s3://pokemon-pet-shop-backup/web/ --delete
aws s3 sync ./app-remotes/web-homepage/dist/ s3://pokemon-pet-shop-backup/webHomepage/ --delete
# ... repeat for each remote
aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
```

---

### Scenario Comparison

| Dimension | Scenario A (AWS Primary) | Scenario B (Zephyr Primary) |
|---|---|---|
| **Performance** | Single CDN hop (CloudFront). Latency depends on CF edge config. Origin Shield available. | Zephyr 200+ PoPs. Potentially lower global latency. CloudFront backup adds second CDN layer. |
| **Security (WAF)** | Full control: AWS WAF, Shield Advanced, custom rules, geo-blocking, rate limiting on your CloudFront. | WAF only on backup CloudFront. Zephyr edge security depends on their platform. Less direct control. |
| **Ease of Rollback** | One-click in Zephyr dashboard repins version in DynamoDB → Lambda@Edge serves previous version from S3 instantly. | One-click for primary. Backup S3 may lag — need to verify sync completed for rollback target. |
| **Data Sovereignty** | Full ownership: assets in your S3, logs in CloudWatch, routing state in DynamoDB. | Primary on Zephyr infrastructure. Backup in your S3. Dual residency. |
| **Cost** | Higher: you pay for CloudFront, S3, Lambda@Edge, DynamoDB as primary path. | Lower primary cost (Zephyr pricing). AWS costs minimal unless failover. |
| **Operational Complexity** | Lower: single deployment path through Zephyr BYOC. AWS infra auto-provisioned. | Higher: dual deployment path (Zephyr + S3 sync). Must keep backup in sync. |
| **Vendor Lock-in** | Low: assets in your AWS account. Could replace Zephyr control plane if needed. | Medium: primary depends on Zephyr availability. Backup reduces risk. |
| **Recommended For** | Regulated industries, enterprises requiring WAF/Shield, teams wanting full infra ownership. | Startups prioritizing global performance and DX over infrastructure control. |

---

## 3. High Availability & Failover

### CloudFront Origin Group Configuration (Scenario A)

```json
{
  "OriginGroup": {
    "Id": "pokemon-pet-shop-ha",
    "FailoverCriteria": {
      "StatusCodes": {
        "Items": [500, 502, 503, 504],
        "Quantity": 4
      }
    },
    "Members": {
      "Items": [
        { "OriginId": "zephyr-s3-primary" },
        { "OriginId": "zephyr-managed-secondary" }
      ],
      "Quantity": 2
    }
  }
}
```

**Timeout tuning for faster failover:**
- Connection timeout: 5s (default 10s)
- Connection attempts: 2 (default 3)
- Response timeout: 15s (default 30s)
- Worst-case failover: ~10s (vs 30s default)

**Caveats:**
- Origin Groups fail over per-request (not sticky)
- Only GET/HEAD/OPTIONS fail over; POST/PUT/DELETE do not
- Lambda@Edge fires twice during failover (once per origin attempt)

### Route 53 Health Check Failover (Scenario B)

```json
{
  "HealthCheck": {
    "Type": "HTTPS",
    "FullyQualifiedDomainName": "production-web-pokemon-pet-shop-{hash}.zephyr-cloud.io",
    "Port": 443,
    "ResourcePath": "/index.html",
    "RequestInterval": 10,
    "FailureThreshold": 2
  }
}
```

DNS TTL should be 60s for fast failover propagation.

### Zephyr Tags as Version Source of Truth

Create a `prod-active` tag in Zephyr with conditions:
- **Branch**: `main` (or promoted from MFE branch)
- **Source**: CI/CD only
- **Environment type**: Version-pinned (manually promoted)

Both Zephyr edge and S3 backup verify version consistency via the `zephyr-manifest.json` snapshot hash.

---

## 4. Rollback Checklists

### Scenario A (AWS Primary)

```
1. [ ] Open Zephyr dashboard → Environments → production
2. [ ] Identify target rollback version (by build ID, commit SHA, or timestamp)
3. [ ] Click "Deploy" on the target version
       → DynamoDB updates instantly
       → Lambda@Edge serves previous version from S3 on next request
4. [ ] Verify: curl production URL → check version in response headers
5. [ ] Verify: browser check → confirm correct app version loads
6. [ ] Monitor CloudWatch for error rate changes
7. [ ] Notify team, document in post-mortem
8. [ ] Mark bad version as "Rolled back" in Zephyr dashboard
```

**Time to rollback: < 30 seconds**

### Scenario B (Zephyr Primary)

```
1. [ ] Open Zephyr dashboard → Environments → production
2. [ ] Identify target rollback version
3. [ ] Click "Deploy" on the target version
       → Zephyr edge immediately serves previous version
4. [ ] Trigger S3 backup sync for rollback version:
       gh workflow run deploy.yml -f rollback_version=<snapshot_id>
5. [ ] Verify primary: curl Zephyr production URL → confirm rollback version
6. [ ] Verify backup: curl CloudFront URL → confirm same version after sync
7. [ ] Check Route 53 health check status
8. [ ] Monitor both CloudWatch and Zephyr dashboard
9. [ ] Notify team, document in post-mortem
```

**Time to rollback: < 30s (primary)**, 2-5 min (backup sync)

---

## 5. CI/CD Pipeline — "Double-Deploy"

### `.github/workflows/deploy-production.yml`

```yaml
name: Deploy to Production (Zephyr + AWS)

on:
  workflow_dispatch:
    inputs:
      rollback_version:
        description: 'Snapshot ID to rollback to (leave empty for normal deploy)'
        required: false

permissions:
  actions: read
  contents: read

env:
  ZE_SECRET_TOKEN: ${{ secrets.ZE_SECRET_TOKEN }}
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  AWS_REGION: us-east-1
  BACKUP_S3_BUCKET: pokemon-pet-shop-backup
  CF_DISTRIBUTION_ID: ${{ secrets.CF_DISTRIBUTION_ID }}

jobs:
  build-and-deploy-zephyr:
    name: Build & Deploy to Zephyr
    runs-on: ubuntu-latest
    if: ${{ !inputs.rollback_version }}
    steps:
      - uses: actions/checkout@v4
        with:
          filter: tree:0
          fetch-depth: 0

      - uses: pnpm/action-setup@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      - run: ZE_ENV=production npx nx run-many -t build

      - uses: actions/upload-artifact@v4
        with:
          name: build-artifacts
          path: |
            app-hosts/web/dist/
            app-remotes/*/dist/
          retention-days: 30

  sync-to-s3-backup:
    name: Sync to AWS S3 Backup
    runs-on: ubuntu-latest
    needs: build-and-deploy-zephyr
    steps:
      - uses: actions/download-artifact@v4
        with:
          name: build-artifacts

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ env.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ env.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}

      - name: Sync all apps to S3
        run: |
          # Host app
          aws s3 sync app-hosts/web/dist/ s3://$BACKUP_S3_BUCKET/web/ \
            --delete --cache-control "public, max-age=31536000, immutable" \
            --exclude "index.html" --exclude "remoteEntry.js"
          aws s3 cp app-hosts/web/dist/index.html s3://$BACKUP_S3_BUCKET/web/index.html \
            --cache-control "public, max-age=60"

          # Remote apps
          for remote in web-homepage web-header web-footer web-not-found web-modal-side-cart atom-theme; do
            if [ -d "app-remotes/$remote/dist/" ]; then
              aws s3 sync "app-remotes/$remote/dist/" "s3://$BACKUP_S3_BUCKET/$remote/" \
                --delete --cache-control "public, max-age=31536000, immutable" \
                --exclude "remoteEntry.js"
              [ -f "app-remotes/$remote/dist/remoteEntry.js" ] && \
                aws s3 cp "app-remotes/$remote/dist/remoteEntry.js" \
                  "s3://$BACKUP_S3_BUCKET/$remote/remoteEntry.js" \
                  --cache-control "public, max-age=60"
            fi
          done

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id $CF_DISTRIBUTION_ID \
            --paths "/web/index.html" "/*/remoteEntry.js"

  verify:
    name: Verify Both Endpoints
    runs-on: ubuntu-latest
    needs: [build-and-deploy-zephyr, sync-to-s3-backup]
    steps:
      - name: Health checks
        run: |
          echo "Checking Zephyr primary..."
          curl -sf "https://t-prod-active-web-pokemon-pet-shop.zephyr-cloud.io" > /dev/null
          echo "Checking CloudFront backup..."
          curl -sf "https://${{ env.CF_DISTRIBUTION_ID }}.cloudfront.net/web/index.html" > /dev/null
          echo "Both endpoints healthy."
```

### GitHub Secrets Required

| Secret | Purpose |
|---|---|
| `ZE_SECRET_TOKEN` | Zephyr Cloud API authentication |
| `AWS_ACCESS_KEY_ID` | AWS programmatic access for S3 sync |
| `AWS_SECRET_ACCESS_KEY` | AWS programmatic access for S3 sync |
| `CF_DISTRIBUTION_ID` | CloudFront distribution for cache invalidation |
