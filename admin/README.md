# Admin functionality

- [Admin functionality](#admin-functionality)
  - [Local setup](#local-setup)
  - [Sync API](#sync-api)
  - [Deploy](#deploy)
  - [Dependency updating](#dependency-updating)

## Local setup

1. Run `yarn install` to install the dependencies
2. Run `yarn build` to build the library
3. Run `cp -n .env.example .env` to copy the example environment file and then fill out all needed variables
4. Test CJS by running `yarn start:playground:cjs` and using `dart` in the REPL
5. Test ESM by running `yarn start:playground:esm`, which runs the scenario in `admin/playground.mts`

## Sync API

1. Run `yarn make-api`

## Deploy

1. Commit and push all local changes to GitHub
2. Run `npm login` if needed
3. Run `yarn release` and follow the prompts (usually they are all a yes), confirming each step by pressing enter

## Dependency updating

1. Run `yarn req-up-all` and select everything to update all FE dependencies
2. Manually set the versions in `dependencies`, but not `devDependencies`, to be `~` the lowest functional minor version
3. Run `yarn install`
