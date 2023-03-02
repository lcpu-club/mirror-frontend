export interface StatusCpu
  extends StatusResult<['time', 'iowait', 'irq', 'nice', 'softirq', 'steal', 'system', 'user']> {}

export default defineEventHandler<StatusCpu>((event) =>
  proxyRequest(event, `https://mirrors.pku.edu.cn/monitor_device_status/cpu.json`)
)
