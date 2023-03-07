export interface StatusNetwork extends StatusResult<['time', 'inbound', 'outbound']> {}

export default defineEventHandler<StatusNetwork>((event) =>
  proxyRequest(event, `${process.env.MIRROR_API_STATUS}/network.json`)
)
