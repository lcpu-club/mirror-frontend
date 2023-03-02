export interface StatusNetwork extends StatusResult<['time', 'inbound', 'outbound']> {}

export default defineEventHandler<StatusNetwork>((event) =>
  proxyRequest(event, `https://mirrors.pku.edu.cn/monitor_device_status/network.json`)
)
