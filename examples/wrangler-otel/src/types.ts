export interface Env {
    OTEL_SERVICE_NAME: string;
    OTEL_COLLECTOR_URL: string;
    OTEL_COLLECTOR_API_KEY?: string;
    
    // add additional bindings and env vars here
}