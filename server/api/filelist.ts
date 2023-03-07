export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

export default defineEventHandler(async (ev) => {
  const query = getQuery(ev)
  const path = query.path || ''
  const data = (await fetch(`https://mirrors.pku.edu.cn/files/${path}`).then((res) =>
    res.json()
  )) as IFileEntry[]
  return data
})
