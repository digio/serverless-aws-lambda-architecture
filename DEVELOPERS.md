# Building and Testing this project

This document describes how to set up your development environment to build and test this project.
It also explains the basic mechanics of using `git` and `node`

- [Prerequisite Software](#prerequisite-software)
- [Project Organisation](#project-organisation)
- [Installing NPM Modules](#installing)
- [Running Tests](#running-tests)
- [Testing with a Serverless project](#testing-with-a-serverless-project)
- [Formatting your Source Code](#formatting-your-source-code)
- [Linting/verifying your Source Code](#lintingverifying-your-source-code)
- [Semantic Release setup](#semantic-release-setup)

See the [contribution guidelines][contributing] if you'd like to contribute to this project.

## Prerequisite Software

Before you can build and test this project, you must install and configure the
following products on your development machine:

- [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

- [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](package.json)) which is used to run tests.

## Project organisation

The project is organised into the following folder structure:

- `/` - Project-level configuration (linting rules, CI, docs, license)
- `fixtures/` - Files used during tests to simulate running the plugin inside Serverless Framework
- `src/` - The source code and test specifications

## Installing

```shell
# Install the dependencies & devDependencies
npm install
```

## Running Tests

```shell
# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run tests and see the coverage report
npm run test:reportlist
```

## Testing with a Serverless project

Use `npm link` to symlink this local package into your global NPM registry on your computer. It will
then be available for use within other NPM projects:

```shell script
# In this project root:
npm link
# > /.nvm/versions/node/v10.17.0/lib/node_modules/serverless-aws-lambda-architecture -> /mydev/serverless/serverless-aws-lambda-architecture

# Change to the Serverless project directory that wants to test this package
cd ../my-serverless-proj

# Create a local symlink to serverless-aws-lambda-architecture
npm link serverless-aws-lambda-architecture
# > Symlinking "/mydev/my-serverless-proj/node_modules"
# >     --> "/.nvm/versions/node/v10.17.0/lib/node_modules/serverless-aws-lambda-architecture"
```

Inside the Serverless project that will test this plugin, modify the serverless config file
to include the plugin and define the configuration object [see Usage][readme-usage].

## Formatting your source code

This project uses [eslint](https://eslint.org) and [prettier](https://prettier.io/) to format the source code.
If the source code is not properly formatted, the CI will fail and the PR cannot be merged.

You can automatically format your code by running:

- `npm run lint`: format _all_ source code

A better way is to set up your IDE to format the changed file on each file save.

### WebStorm / IntelliJ

1. Open `Preferences > Languages & Frameworks > JavaScript > Prettier`
1. Find the field named "Prettier Package"
1. Add `<PATH_TO_YOUR_WORKSPACE>/<project-root>/packages/web-app/node_modules/prettier`

## Linting/Verifying your Source Code

You can check that your code is properly formatted and adheres to coding style:

```shell
# Check that the code is formatted and following the coding style:
npm run verify

# Fix any auto-fixable errors
npm run lint
```

## Semantic Release Setup

This section is include for informational purposes only.

This repo uses [semantic-release][semantic-release] to manage software versions and packaging.
**There is a one-time setup-step required - WHICH HAS ALREADY BEEN DONE**, which creates a GitHub
personal access token, an NPM token, and connects them to Travis CI.

One time setup:
```shell script
cd <to repo folder>
npx semantic-release-cli setup

? What is your npm registry? https://registry.npmjs.org/
? What is your npm username? u_glow
? What is your npm password? [hidden]
? What is your NPM two-factor authentication code? 123456
? Provide a GitHub Personal Access Token (create a token at https://github.com/settings/tokens/new?scopes=repo)
? What is your GitHub username? uglow
? What is your GitHub password? [hidden]
? What is your GitHub two-factor authentication code? 
? What CI are you using? GitHub Actions (or choose "Other" and the tokens are displayed for you manually add): GitHub Actions
```

<hr>

[contributing]: CONTRIBUTING.md
[repo]: https://github.com/digio/serverless-aws-lambda-architecture
[readme-usage]: README.md#usage
