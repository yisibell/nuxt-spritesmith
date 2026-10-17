import { afterAll, describe, it, expect } from 'vitest'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { setup, $fetch, useTestContext } from '@nuxt/test-utils'

const fixtureRoot = fileURLToPath(new URL('./fixtures/basic', import.meta.url))
const sourceDir = path.join(fixtureRoot, 'assets/sprites/demo')
const onePixelPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
  'base64',
)

await mkdir(sourceDir, { recursive: true })
await writeFile(path.join(sourceDir, 'one.png'), onePixelPng)
await writeFile(path.join(sourceDir, 'one@2x.png'), onePixelPng)

describe('ssr', async () => {
  await setup({
    rootDir: fixtureRoot,
  })

  afterAll(async () => {
    await rm(path.join(fixtureRoot, 'assets'), { recursive: true, force: true })
    await rm(path.join(fixtureRoot, 'public'), { recursive: true, force: true })
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
  })

  it('generates standard and retina sprite sheets', async () => {
    const standardSprite = await $fetch<ArrayBuffer>('/sprites/demo.png', {
      responseType: 'arrayBuffer',
    })
    const retinaSprite = await $fetch<ArrayBuffer>('/sprites/demo@2x.png', {
      responseType: 'arrayBuffer',
    })

    expect(standardSprite.byteLength).toBeGreaterThan(0)
    expect(retinaSprite.byteLength).toBeGreaterThan(0)
  })

  it('generates CSS for the sprite category', async () => {
    const { nuxt } = useTestContext()
    const cssPath = path.join(nuxt!.options.buildDir, 'nuxt-spritesmith-demo.css')
    const css = await readFile(cssPath, 'utf8')

    expect(css).toContain('.sprite-demo')
    expect(css).toContain('.sprite-demo--one')
    expect(css).toContain('background-repeat: no-repeat')
    expect(css).toContain('@media')
    expect(css).toContain('demo@2x.png')
  })
})
