export function prettySize(bytes: number) {
  if (typeof bytes !== 'number') return null
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const e = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, e)).toFixed(2)} ${units[e]}`
}
