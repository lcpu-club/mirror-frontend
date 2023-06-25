export interface StatusDiskIo extends StatusResult<['time', 'read', 'read_cache']> {}

export default defineEventHandler<StatusDiskIo>((event) =>
  proxyRequest(event, `${useRuntimeConfig().upstreamStatusBase}/disk_io.json`)
)
