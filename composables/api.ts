import { StatusResultWithTime } from '../lib/status'

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

export const useMirrorList = () => useFetch<IMirrorEntry[]>('/api/mirrorlist')

export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

export const useFileList = (path: string) =>
  useFetch<IFileEntry[]>('/api/filelist', {
    query: {
      path
    }
  })

export const useStatus = (type: string) => useFetch<StatusResultWithTime>(`/api/status/${type}`)
