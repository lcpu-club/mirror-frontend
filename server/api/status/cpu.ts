export interface StatusCpu
  extends StatusResult<['time', 'iowait', 'irq', 'nice', 'softirq', 'steal', 'system', 'user']> {}

export default defineEventHandler<StatusCpu>((event) =>
  proxyRequest(event, `${process.env.MIRROR_API_STATUS}/cpu.json`)
)
