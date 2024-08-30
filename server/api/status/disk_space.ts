export interface StatusDiskSpace extends StatusResult<['time', 'used', 'avai']> {}

export default defineEventHandler<StatusDiskSpace>((event) =>
  proxyRequest(event, `/monitor_device_status/disk_space.json`)
)
