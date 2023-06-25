export interface StatusNetwork extends StatusResult<['time', 'inbound', 'outbound']> {}

export default defineEventHandler<StatusNetwork>((event) =>
  proxyRequest(event, `${useRuntimeConfig().upstreamStatusBase}/network.json`)
)
