export interface StatusDiskSpace extends StatusResult<['time', 'used', 'avai']> {}

export default defineEventHandler<StatusDiskSpace>((event) =>
  proxyRequest(event, `${process.env.MIRROR_API_STATUS}/disk_space.json`)
)
