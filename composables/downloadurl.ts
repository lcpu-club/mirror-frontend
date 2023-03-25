/* eslint-disable no-console */

import { getFileList } from './api'

export interface IDownloadLink {
  name: string
  link: string
}

interface IDownloadLinkReducer {
  prefix: string
  matched: Record<string, string>
}

function isDynamicPart(part: string) {
  return part.startsWith(':^') && part.endsWith('$')
}

async function expand(reducers: IDownloadLinkReducer[], part: string, directory: boolean) {
  console.group('Start to expand ' + directory ? 'dir' : 'file')
  console.log(reducers, part)
  if (isDynamicPart(part)) {
    const regex = new RegExp(part.substring(1))
    reducers = await Promise.all(
      reducers.map(async ({ prefix, matched }) => {
        const list = await getFileList(prefix)
        return list
          .map((item) => (item.type === 'directory') === directory && regex.exec(item.name))
          .filter((item): item is Exclude<typeof item, null | boolean> => !!item)
          .map(
            (item): IDownloadLinkReducer => ({
              prefix: `${prefix}${item[0]}${directory ? '/' : ''}`,
              matched: { ...matched, ...item.groups }
            })
          )
      })
    ).then((r) => r.flat())
  } else {
    reducers = reducers.map((r) => ({
      prefix: `${r.prefix}${part}/`,
      matched: r.matched
    }))
  }
  console.log(reducers)
  console.groupEnd()
  return reducers
}

export function useDownloadLinks(links: IDownloadLink[]) {
  return useAsyncData(async () => {
    const result: IDownloadLink[] = []
    for (const { link, name } of links) {
      let reducers: IDownloadLinkReducer[] = [{ prefix: '/', matched: {} }]
      const parts = link.split('/')
      const end = parts.pop()
      if (!end) throw new Error('Invalid link')
      for (const part of parts) {
        reducers = await expand(reducers, part, true)
      }
      reducers = await expand(reducers, end!, false)
      result.push(
        ...reducers.map(
          ({ prefix, matched }): IDownloadLink => ({
            link: prefix,
            name: name.replace(/{{(\w+)}}/g, (_, key) => matched[key])
          })
        )
      )
    }
    return result
  })
}
