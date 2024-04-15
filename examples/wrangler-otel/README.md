# wrangler-basic starter

This is an OpenTelemetry starter that uses [wrangler](https://github.com/cloudflare/wrangler2) to manage workflows and bundle code.

## Prerequisites

- [yarn](https://yarnpkg.com/getting-started/install) installed globally.
  - Run `yarn` to install all packages in this project.
- [Cloudflare](https://dash.cloudflare.com/sign-up) account.
  - Run `yarn wrangler login` to associate `wrangler` with your Cloudflare account.
- [OpenTelemetry](https://opentelemetry.io/) account.
  - Create a new OpenTelemetry project. Choose `javascript` as the platform.

## Client setup

You will need to configure targets for an [OpenTelemetry collector] and service naming for the worker. Once you have that, update set the corresponding environment variables in `wrangler.toml` with your value.

```toml
[vars]
OTEL_SERVICE_NAME=service-a
OTEL_COLLECTOR_URL=https://otel.collector.test
OTEL_COLLECTOR_API_KEY=access-token
```

## Deployment

```
yarn deploy
```

## Development

```
yarn start
```

Runs the worker locally.
