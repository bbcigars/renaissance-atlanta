# BBCigars Sites Monorepo

A monorepo containing all BBCigars business websites and applications.

## Structure

- `renaissance-atlanta/` - Restaurant, bar, cigar bar with live entertainment
- `packages/` - Shared packages and utilities
- Future business sites will be added as additional root-level directories

## Getting Started

```bash
# Use the Node version pinned in .nvmrc (Node 20)
# run `nvm use` or load it via your favorite version manager before running pnpm
# Install dependencies for all workspaces
pnpm install

# Run development servers for all apps!
pnpm dev

# Build all apps
pnpm build
```

## Apps

### Renaissance Atlanta

Restaurant, bar, and cigar bar with live entertainment venue.

```bash
cd renaissance-atlanta
pnpm dev
```

## Development

Each app is a separate workspace that can be developed independently while sharing common dependencies and configurations at the monorepo level.
