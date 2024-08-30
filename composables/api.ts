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
  name: string;
  url: string;
  help?: string;
  describe: string;
}

interface Repositories {
  [id: string]: RepositoryInfo;
}

interface MirrorStatus {
  id: string;
  state: 'done' | 'error' | 'sync';
  lastSyncTime: number;
  nextSyncTime: number;
  diskUsage: string;
}

export function useMirrorList(): Promise<IMirrorEntry[]> {
  // fetch /monitor/status and /monitor/mirrors, then combine them by id
  const repositories = $fetch<Repositories>('/monitor/mirrors', {});
  const status = $fetch<MirrorStatus[]>('/monitor/status', {});

  // merge repositories and status
  return Promise.all([repositories, status]).then(([repositories, status]) => {
      return status.map((item) => {
          const repo = repositories[item.id];
          return {
              id: item.id,
              name: repo.name,
              desc: repo.describe,
              url: repo.url,
              diskUsage: item.diskUsage,
              lastSyncTime: item.lastSyncTime,
              nextSyncTime: item.nextSyncTime,
              state: item.state
          };
      });
  });
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

export const useStatus = (type: string) => useFetch<StatusResultWithTime>(`/monitor_device_status/${type}.json`)
