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

interface RepositoryInfo {
  name: string
  url: string
  help?: string
  describe: string
}

interface Repositories {
  [id: string]: RepositoryInfo
}

interface MirrorStatus {
  id: string
  state: 'done' | 'error' | 'sync'
  lastSyncTime: number
  nextSyncTime: number
  diskUsage: string
}
export const useMirrorList = async (): Promise<IMirrorEntry[]> => {
  try {
    // Fetch repositories and status concurrently
    const [repositories, status] = await Promise.all([
      $fetch<Repositories>('/monitor/mirrors', {}),
      $fetch<MirrorStatus[]>('/monitor/status', {})
    ])

    // Merge repositories and status by ID
    return status.map((item) => {
      const repo = repositories[item.id]
      return {
        id: item.id,
        name: repo?.name ?? 'Unknown', // handle missing repo
        desc: repo?.describe ?? 'No description available',
        url: repo?.url ?? '',
        diskUsage: item.diskUsage,
        lastSyncTime: item.lastSyncTime,
        nextSyncTime: item.nextSyncTime,
        state: item.state
      }
    })
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
