import { instrument, ResolveConfigFn } from '@microlabs/otel-cf-workers';

export interface Env {
  OTEL_SERVICE_NAME: string;
  OTEL_COLLECTOR_URL: string;
  OTEL_COLLECTOR_API_KEY?: string;
}

const handler = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
	  // @ts-ignore
  ): Promise<Response> {
    // your cloudflare worker code
  },
};

const config: ResolveConfigFn = (env: Env, _trigger) => {
  const headers = typeof env.OTEL_COLLECTOR_API_KEY === 'string'
    ? { authorization: `Bearer ${env.OTEL_COLLECTOR_API_KEY}` }
    : undefined;

  return {
    exporter: {
      url: env.OTEL_COLLECTOR_URL,
      headers,
    },
    service: { name: env.OTEL_SERVICE_NAME },
  };
};

export default instrument(handler, config);
