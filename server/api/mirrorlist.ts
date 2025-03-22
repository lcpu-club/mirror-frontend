export interface IMirrorEntry {
  id: string
  name: string
  desc: string
  url: string
  diskUsage: string
  lastSyncTime: number
  nextSyncTime: number
  state: 'done' | 'error' | 'sync' | 'paused'
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const baseFileUrl = config.public.fileBase
  const statusURL = config.public.mirrorStatusURL

  const mirrorsData = await fetch(statusURL).then((res) => res.json())

  const data = mirrorsData.map((mirror: any) => {
    let state: 'done' | 'error' | 'sync' | 'paused' = 'error'
    if (mirror.status === 'success') {
      state = 'done'
    } else if (mirror.status === 'syncing') {
      state = 'sync'
    } else if (mirror.status === 'paused') {
      state = 'paused'
    }

    const diskUsage = mirror.size === 'unknown' ? 'N/A' : mirror.size

    return {
      id: mirror.name,
      name: mirror.name,
      desc: '', // TODO: Get mirror description
      url: `${baseFileUrl}/${mirror.name}/`,
      diskUsage,
      lastSyncTime: mirror.last_ended_ts * 1000,
      nextSyncTime: mirror.next_schedule_ts * 1000,
      state
    }
  }) as IMirrorEntry[]

  data.sort((a, b) => a.name.localeCompare(b.name))
  return data
})
