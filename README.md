# Flexport API v2 Sandbox [![npm version](https://img.shields.io/npm/v/@distributeaid/flexport-api-sandbox.svg)](https://www.npmjs.com/package/@distributeaid/flexport-api-sandbox)

![Build and Release](https://github.com/distributeaid/flexport-api-sandbox/workflows/Build%20and%20Release/badge.svg?branch=saga)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This projects provides a sandbox host using data scraped from a sandbox instance
of the Flexport API v2.

It can be used to run integration tests.

## Development

> ℹ️ These instructions apply to Unix-based development environments; Linux and
> Mac users should be fine. Windows users could look into setting up their
> development environment using
> [WSL2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-index).

### Usage

    npm ci
    npm start # Starts the sandbox server at port 3000

You can now query against `http://0.0.0.0:3000`, e.g.
`http http://0.0.0.0:3000/shipments`.

### Updating the files

    export SANDBOX_API_ENDPOINT=<...>
    export SANDBOX_API_KEY=<...>
    node sandbox-dumper.js
