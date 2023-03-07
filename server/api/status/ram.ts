export interface StatusRam
  extends StatusResult<['time', 'free', 'cached', 'buffers', 'total', 'used']> {}

export default defineEventHandler<StatusRam>((event) =>
  proxyRequest(event, `${process.env.MIRROR_API_STATUS}/ram.json`)
)
