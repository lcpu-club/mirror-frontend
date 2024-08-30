export interface StatusDiskIo extends StatusResult<['time', 'read', 'read_cache']> {}

export default defineEventHandler<StatusDiskIo>((event) =>
  proxyRequest(event, `/monitor_device_status/disk_io.json`)
)
