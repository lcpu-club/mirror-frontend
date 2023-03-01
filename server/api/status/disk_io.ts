export interface StatusDiskIo extends StatusTable<['time', 'read', 'read_cache']> {}

export default defineEventHandler<StatusDiskIo>((event) =>
  proxyRequest(event, `https://mirrors.pku.edu.cn/monitor_device_status/disk_io.json`)
)
