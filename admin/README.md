# Admin functionality

- [Admin functionality](#admin-functionality)
  - [Local setup](#local-setup)
  - [Sync API](#sync-api)
  - [Deploy](#deploy)
  - [Dependency updating](#dependency-updating)

## Local setup

1. Run `bun install` to install the dependencies
2. Run `bun run build` to build the library
3. Run `cp -n .env.example .env` to copy the example environment file and then fill out all needed variables
4. Test CJS by running `bun run start:playground:cjs` and using `dart` in the REPL
5. Test ESM by running `bun run start:playground:esm`, which runs the scenario in `admin/playground.mts`

## Sync API

1. Run `bun run make-api`

## Deploy

1. Merge all PRs with the changes to release
2. Run `bun run release` and follow the prompts. This builds, bumps the version, commits, tags, pushes, and opens a GitHub release draft
3. Publish the GitHub release
4. GitHub Actions publishes to npm automatically on the tag push

## Dependency updating

1. Run `bun run req-up-all` and select everything to update all FE dependencies
2. Manually set the versions in `dependencies`, but not `devDependencies`, to be `~` the lowest functional minor version
3. Run `bun install`
