export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file.downloads) {
      file.hasDownloads = true
    }
  })
})
