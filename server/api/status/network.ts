export interface StatusNetwork extends StatusResult<['time', 'inbound', 'outbound']> {}

export default defineEventHandler<StatusNetwork>((event) =>
  proxyRequest(event, `/monitor_device_status/network.json`)
)
