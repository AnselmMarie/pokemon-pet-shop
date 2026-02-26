# ============================================
# Stage 1: Build
# ============================================
FROM node:20-alpine AS build

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /workspace

# Copy workspace root config files
COPY package.json pnpm-lock.yaml nx.json tsconfig.base.json ./

# Copy the API project
COPY app-hosts/api/ app-hosts/api/

# Copy workspace libs the API depends on
COPY libs/types/ libs/types/
COPY libs/utils/pricing/ libs/utils/pricing/

# Install all dependencies (needed for Nx build toolchain)
RUN pnpm install --frozen-lockfile

# Build the API (outputs to app-hosts/api/dist/)
RUN npx nx build api


# ============================================
# Stage 2: Runtime
# ============================================
FROM node:20-alpine AS runtime

# Install PM2 globally
RUN npm install -g pm2

WORKDIR /app

# Copy the built output (includes generated package.json and pnpm-lock.yaml)
COPY --from=build /workspace/app-hosts/api/dist/ .

# Copy PM2 ecosystem config
COPY app-hosts/api/ecosystem.config.js .

# Install production dependencies only
RUN npm install --omit=dev

# Set environment
ENV NODE_ENV=production

# App Runner injects PORT at runtime; default to 3333 for local use
EXPOSE 3333

# Use pm2-runtime (foreground mode for containers)
CMD ["pm2-runtime", "ecosystem.config.js"]
