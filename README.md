# Serverless AWS Lambda Architecture Plugin

[![serverless][sls-image]][sls-url]
[![npm package][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][npm-url]

A Serverless 1.x-and-above plugin to add support for Lambda Architectures.

## Motivation

Serverless 1.x doesn't have built-in support for the AWS Lambda architectures property. This plugin adds support.

## Installation

```
npm install --save-dev serverless-aws-lambda-architecture
```

Add the plugin to serverless.yml:

```yaml
plugins:
  - serverless-aws-lambda-architecture
```

**Note**: Node 10.x or higher runtime required.

## Usage

Inside your Serverless config, include the `architectures: arm64` property against the Lambda function(s) you wish to
use this architecture with.

```yaml
plugins:
  - serverless-aws-lambda-architecture
  ...

functions:
  x86ArchFunction:
    handler: handler
    description: "Uses the default Lambda architecture"

  arm64Function:
    handler: handler
    description: "Uses the ARM64 architecture"
    architectures: arm64
    
```

[sls-image]: http://public.serverless.com/badges/v3.svg
[sls-url]: http://www.serverless.com
[npm-image]: https://img.shields.io/npm/v/serverless-aws-lambda-architecture.svg
[npm-url]: http://npmjs.org/package/serverless-aws-lambda-architecture
[travis-image]: https://travis-ci.org/digio/serverless-aws-lambda-architecture.svg?branch=master
[travis-url]: https://travis-ci.org/digio/serverless-aws-lambda-architecture
[coveralls-image]: https://coveralls.io/repos/github/digio/serverless-aws-lambda-architecture/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/digio/serverless-aws-lambda-architecture?branch=master
[downloads-image]: https://img.shields.io/npm/dm/serverless-aws-lambda-architecture.svg
