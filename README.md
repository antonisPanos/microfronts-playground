# Micro-fronts monorepo

- [Stack](#stack)
- [Apps and libs](#apps-and-libs)
- [Environment setup](#environment-setup)
- [Commands](#commands)

## Stack

- Node
- pnpm
- Rush
- Typescript
- React
- Angular
- Webpack
- Babel
- Jest
- Prettier
- ESLint

## Apps and libs
- Maestro (`maestro`) - The container app that handles the top lvl routing and rendering of the micro-fronts. Written with React
- NG-App (`ng-app`) - An Angular application. Has internal routing, a component that displays routing info and a component that can listen/change the global observables.
- React-App (`react-app`) - A React application. Has internal routing, a component that displays routing info and a component that can listen/change the global observables.
- Libs (`libs`) - Contains shared models, services, types etc.

Once started, the container app sets up a property on the Window, in which we set up mount/unmount methods for the micro-fronts, as well as, behavior subjects of shared entities

## Environment setup
The project is mainly handled by Rush. Use the following Rush commands to set up the app dependencies
```shell
$ rush install
```
Create the `.env` under the container app
```shell
$ cp apps/maestro/.env.sample apps/maestro/.env
```

## Commands
```shell
# Starts all apps
# Default address is localhost:3000
$ rush start

# Runs unit tests for all projects
$ rush test

# Runs linting rules on all projects
$ rush lint

# Builds all projects
$ rush build

# Updates and links dependencies found in package.json from all projects
$ rush update
```
Use the `--only` option to run any of the commands against only one project:
```shell
$ rush test --only libs
```
Check [Rush documentation](https://rushjs.io/pages/advanced/api/) for all the available CLI options
