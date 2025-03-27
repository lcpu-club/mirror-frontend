import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    help: defineCollection({
      type: 'page',
      source: '**/help/*.md',
      schema: z.object({
        mirrorId: z.string(),
        title: z.string(),
        downloads: z.optional(
          z.array(
            z.object({
              link: z.string(),
              name: z.string()
            })
          )
        )
      })
    })
  }
})
