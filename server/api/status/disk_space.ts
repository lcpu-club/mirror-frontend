export interface StatusDiskSpace extends StatusResult<['time', 'used', 'avai']> {}

export default defineEventHandler<StatusDiskSpace>((event) =>
  proxyRequest(event, `${useRuntimeConfig().upstreamStatusBase}/disk_space.json`)
)
