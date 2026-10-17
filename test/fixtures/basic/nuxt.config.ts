import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  spritesmith: {
    engineOpts: {
      concurrentFileLimit: 1,
    },
    spriteConfig: {
      padding: 2,
      algorithm: 'binary-tree',
      exportOpts: { format: 'png' },
    },
  },
})
