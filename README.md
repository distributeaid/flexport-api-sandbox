# Flexport API v2 Sandbox

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This projects provides a sandbox host using data scraped from a sandbox instance
of the Flexport API v2.

It can be used to run integration tests.

## Usage

    npm ci
    npm start # Starts the sandbox server at port 3000

You can now query against `http://0.0.0.0:3000`, e.g.
`http http://0.0.0.0:3000/shipments`.

## Updating the files

    export SANDBOX_API_ENDPOINT=<...>
    export SANDBOX_API_KEY=<...>
    node sandbox-dumper.js
