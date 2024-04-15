import { instrument, ResolveConfigFn } from '@microlabs/otel-cf-workers';
import { Env } from './types';
import { fetchHandler, queueHandler, scheduledHandler } from './handlers';

const handler = {
  fetch: fetchHandler,
  queue: queueHandler,
  scheduled: scheduledHandler,
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
