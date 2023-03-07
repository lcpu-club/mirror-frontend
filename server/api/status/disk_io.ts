export interface StatusDiskIo extends StatusResult<['time', 'read', 'read_cache']> {}

export default defineEventHandler<StatusDiskIo>((event) =>
  proxyRequest(event, `${process.env.MIRROR_API_STATUS}/disk_io.json`)
)
