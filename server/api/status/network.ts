export interface StatusNetwork extends StatusTable<['time', 'inbound', 'outbound']> {}

export default defineEventHandler<StatusNetwork>((event) =>
  proxyRequest(event, `https://mirrors.pku.edu.cn/monitor_device_status/network.json`)
)
