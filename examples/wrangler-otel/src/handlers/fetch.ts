import { Env } from "../types";

export async function fetchHandler(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const proxiedRequest = new Request(request);

  // take action on request, modify headers, inject metadata, apply rate-limiting, etc. 

  const res = await fetch(proxiedRequest);

  return res;
}
