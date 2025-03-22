import type { StatusResultWithTime } from '../lib/status'

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

export const useMirrorList = async (): Promise<IMirrorEntry[]> => {
  try {
    // Fetch repositories and status concurrently
    return await $fetch<IMirrorEntry[]>('/api/mirrorlist', {})
  } catch (error) {
    throw new Error('Failed to fetch mirror list')
  }
}

export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

export function getFileList(path: string): Promise<IFileEntry[]> {
  return $fetch<IFileEntry[]>(`/files/${encodeURIComponent(path)}`, {})
}

export const useStatus = (type: string) =>
  useFetch<StatusResultWithTime>(`/monitor_device_status/${type}.json`)
