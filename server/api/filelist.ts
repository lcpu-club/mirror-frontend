import { setResponseStatus } from 'h3'
import { HTTPError } from '@/lib/errors'

export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

function isMaliciousPath(path: string): boolean {
  return decodeURIComponent(path).includes('..')
}

export default defineEventHandler(async (ev) => {
  const { path } = getQuery(ev)
  try {
    if (typeof path !== 'string' || isMaliciousPath(path)) {
      throw new HTTPError(400)
    }
    const resp = await fetch(`https://mirrors.pku.edu.cn/files/${path}`)
    const code = resp.status
    if (code === 404) {
      throw new HTTPError(404)
    }
    if (code !== 200) {
      throw new HTTPError(500)
    }
    const data = (await resp.json()) as IFileEntry[]
    return data
  } catch (err) {
    if (err instanceof HTTPError) {
      setResponseStatus(ev, err.statusCode)
      return
    }
    setResponseStatus(ev, 500)
  }
})
