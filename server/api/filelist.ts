export interface IFileEntry {
  mtime: string
  name: string
  size: number
  type: 'file' | 'directory'
}

export default defineEventHandler(async (ev) => {
  const query = getQuery(ev)
  const path = query.path || ''
  const data = (await fetch(`${process.env.MIRROR_API_FILES}/${path}`).then((res) =>
    res.json()
  )) as IFileEntry[]
  return data
})
