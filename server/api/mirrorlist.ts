export interface IMirrorEntry {
  id: string
  name: string
  desc: string
  url: string
  diskUsage: string
  lastSyncTime: number
  nextSyncTime: number
  state: 'done' | 'error' | 'sync'
}

export default defineEventHandler(async () => {
  const mirrors = await fetch(`${process.env.MIRROR_API_MIRRORS}/mirrors`).then((res) => res.json())
  const status = await fetch(`${process.env.MIRROR_API_MIRRORS}/status`).then((res) => res.json())
  const data = status.map(
    ({ diskUsage, id, lastSyncTime, nextSyncTime, state }: Record<string, any>) => ({
      id,
      name: mirrors[id].name,
      desc: mirrors[id].describe,
      url: mirrors[id].url,
      diskUsage,
      lastSyncTime,
      nextSyncTime,
      state
    })
  ) as IMirrorEntry[]
  data.sort((a, b) => a.name.localeCompare(b.name))
  return data
})
