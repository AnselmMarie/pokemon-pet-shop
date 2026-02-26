# Zephyr Dashboard Setup Guide — Pokemon Pet Shop

This guide covers the manual Zephyr Cloud dashboard configuration needed for the dev environment.

---

## Step B: Zephyr Dashboard Remote Override Configuration

### What This Does

Dashboard overrides let you control which version of each remote is served in a given environment — without rebuilding. They take **absolute precedence** over `zephyr:dependencies` in `package.json`.

### Configure Overrides

Navigate to: **Zephyr Dashboard → Environments → `development` → Remote Overrides**

Set each remote to resolve via its `@dev` tag:

| Remote | Override | Meaning |
|---|---|---|
| `atomTheme` | `@dev` | Latest CI build from `mfe` branch |
| `webHeader` | `@dev` | Latest CI build from `mfe` branch |
| `webFooter` | `@dev` | Latest CI build from `mfe` branch |
| `webHomepage` | `@dev` | Latest CI build from `mfe` branch |
| `webModalSideCart` | `@dev` | Latest CI build from `mfe` branch |
| `webNotFound` | `@dev` | Latest CI build from `mfe` branch |

### When to Use Dashboard Overrides

- **Hotfix testing**: Override a single remote to a PR build version to test a fix in the full dev environment before merging
- **Rolling back a single remote**: A bad build of one remote broke dev — override it to the previous good version instantly without reverting or rebuilding
- **Canary testing**: Test a new remote build alongside existing stable remotes before merging
- **Cross-team coordination**: Pin one team's remote to a stable version while another team's flows through `@dev`

---

## Dev Environment Setup — Full Configuration

### 1. Create `dev` Tag for Each MFE App (7 total)

For each of the 7 apps, create a `dev` tag in the Zephyr dashboard with these conditions:
- **Branch**: `mfe`
- **Source**: CI/CD builds only (exclude local builds)

| App | Tag Name | Tag URL |
|---|---|---|
| `web` | `dev` | `https://t-dev-web-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webHeader` | `dev` | `https://t-dev-webHeader-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webFooter` | `dev` | `https://t-dev-webFooter-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webHomepage` | `dev` | `https://t-dev-webHomepage-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webNotFound` | `dev` | `https://t-dev-webNotFound-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webModalSideCart` | `dev` | `https://t-dev-webModalSideCart-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `atomTheme` | `dev` | `https://t-dev-atomTheme-pokemon-pet-shop-{hash}.zephyr-cloud.io` |

### 2. Create `development` Environment for Each MFE App (7 total)

For each of the 7 apps, create a `development` environment:
- **Type**: Tag-based
- **Points to**: That app's `dev` tag
- **Behavior**: Auto-updates when a new version matches the tag conditions
- **Audience**: Internal QA team uses these URLs for testing

| App | Environment URL |
|---|---|
| `web` (host) | `https://development-web-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webHeader` | `https://development-webHeader-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webFooter` | `https://development-webFooter-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webHomepage` | `https://development-webHomepage-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webNotFound` | `https://development-webNotFound-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `webModalSideCart` | `https://development-webModalSideCart-pokemon-pet-shop-{hash}.zephyr-cloud.io` |
| `atomTheme` | `https://development-atomTheme-pokemon-pet-shop-{hash}.zephyr-cloud.io` |

### 3. Configure Remote Overrides (Step B)

See the override table above. Configure these in the `development` environment for each app that serves as a host/consumer.

---

## Remote Dependency Graph (Reference)

```
web (host)
├── webHomepage      → atomTheme
├── webHeader        → atomTheme, webModalSideCart
├── webModalSideCart → atomTheme
├── webFooter        (leaf — no remotes)
└── webNotFound      (leaf — no remotes)
```

Apps that consume remotes and need override consideration: `web`, `webHeader`, `webHomepage`, `webModalSideCart`.

---

## Versioning Notes

- Every build creates an immutable version with SHA-256 content hash
- Auto-incrementing build IDs per user
- Version statuses: `Live`, `Available`, `Rolled back`, `Failed`, `Deprecated`, `Unavailable`
- Rollback = repoint environment/tag to previous version (one-click in dashboard)
- No manual versioning needed in CI/CD

## Tags Explained

Tags are **routing rules** — they define conditions for which builds serve which environments:

```
dev tag:     branch = mfe       + CI only  → latest mfe build
staging tag: branch = release/* + CI only  → latest release branch build (future)
prod:        manually pinned to a specific version (future)
```

Without tags, builds only get preview URLs with no environment association.
