export interface StatusCpu
  extends StatusResult<['time', 'iowait', 'irq', 'nice', 'softirq', 'steal', 'system', 'user']> {}

export default defineEventHandler<StatusCpu>((event) =>
  proxyRequest(event, `${useRuntimeConfig().upstreamStatusBase}/cpu.json`)
)
