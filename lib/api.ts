import { StatusResultWithTime } from './status'

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

export const useMirrorList = () =>
  useAsyncData<IMirrorEntry[]>(async () => {
    const mirrors = await fetch(`/monitor/mirrors`).then((res) => res.json())
    const status = await fetch(`/monitor/status`).then((res) => res.json())
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

export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

export const useFileList = (path: string) =>
  useAsyncData<IFileEntry[]>(async () => {
    const data = (await fetch(`/files/${path}/`).then((res) => res.json())) as IFileEntry[]
    return data
  })

export const useStatus = (type: string) =>
  useAsyncData<StatusResultWithTime>(async () => {
    const resp = await fetch(`/monitor_device_status/${type}.json`)
    const data = await resp.json()
    return data
  })
