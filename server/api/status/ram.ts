export interface StatusRam
  extends StatusTable<['time', 'free', 'cached', 'buffers', 'total', 'used']> {}

export default defineEventHandler<StatusRam>((event) =>
  proxyRequest(event, `https://mirrors.pku.edu.cn/monitor_device_status/ram.json`)
)
