import path from 'node:path'
import { defineNuxtModule, useLogger, addTemplate, createResolver } from '@nuxt/kit'
import fs from 'fs-extra'
import chokidar from 'chokidar'
import Spritesmith from 'spritesmith'
import fg from 'fast-glob'

export type SpritesmithProcessImagesOptions = Spritesmith.SpritesmithProcessImagesOptions

export type SpritesmithResult = Spritesmith.SpritesmithResult

export interface SpritesmithGenerateCSSOptions {
  spriteModuleName: string
  standardSpritesheetPath: string
  retinaSpritesheetPath: string
  results: {
    standard?: SpritesmithResult
    retina?: SpritesmithResult
  }

}

export interface ModuleOptions {
  srcDir: string
  outputDir: string
  spriteConfig: SpritesmithProcessImagesOptions
  retina: {
    enabled: boolean
    suffix: string
    ratio: number
  }
  prefix: string
  cssTemplate?: (opts: SpritesmithGenerateCSSOptions) => string
  enableDevWatch?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-spritesmith',
    configKey: 'spritesmith',
  },
  defaults: {
    srcDir: 'assets/sprites',
    outputDir: 'public/sprites',
    spriteConfig: {
      padding: 5,
      algorithm: 'binary-tree',
      exportOpts: { format: 'png' },
    },
    retina: {
      enabled: true,
      suffix: '@2x',
      ratio: 2,
    },
    prefix: 'sprite-',
  },
  async setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const logger = useLogger()

    // 确保目录存在
    const ensureDirs = async () => {
      await Promise.all([
        fs.ensureDir(resolve(nuxt.options.srcDir, moduleOptions.srcDir)),
        fs.ensureDir(resolve(nuxt.options.srcDir, moduleOptions.outputDir)),
      ])
    }

    // 生成雪碧图核心逻辑
    const generateSprite = async (dir: string) => {
      const spriteModuleName = dir.replace(/\//g, '-')
      const basePath = resolve(nuxt.options.srcDir, moduleOptions.srcDir, dir)
      const standardSpritesheetPath = resolve(nuxt.options.srcDir, moduleOptions.outputDir, `${spriteModuleName}.png`).replace(/\\/g, '/')
      const retinaSpritesheetPath = resolve(nuxt.options.srcDir, moduleOptions.outputDir, `${spriteModuleName}${moduleOptions.retina.suffix}.png`).replace(/\\/g, '/')

      // 获取图片文件
      const [standardImages, retinaImages] = await Promise.all([
        fg.glob(`!(*${moduleOptions.retina.suffix}).{png,jpg,jpeg}`, { cwd: basePath }),
        fg.glob(`*${moduleOptions.retina.suffix}.{png,jpg,jpeg}`, { cwd: basePath }),
      ])

      const results: {
        standard?: SpritesmithResult
        retina?: SpritesmithResult
      } = {}

      // 生成标准雪碧图
      if (standardImages.length > 0) {
        results.standard = await generateSpriteSheet({
          dir,
          images: standardImages,
          scale: 1,
          output: standardSpritesheetPath,
        })
      }

      // 生成 Retina 雪碧图
      if (moduleOptions.retina.enabled && retinaImages.length > 0) {
        results.retina = await generateSpriteSheet({
          dir,
          images: retinaImages,
          scale: moduleOptions.retina.ratio,
          output: retinaSpritesheetPath,
        })
      }

      // 生成 CSS
      if (results.standard || results.retina) {
        await generateCSS({ spriteModuleName, standardSpritesheetPath, retinaSpritesheetPath, results })
      }
    }

    const generateSpriteSheet = async (
      opts: {
        dir: string
        images: string[]
        scale: number
        output: string
      },

    ): Promise<SpritesmithResult> => {
      const { dir, images, scale, output } = opts

      const fullPaths = images.map(img =>
        resolve(nuxt.options.srcDir, moduleOptions.srcDir, dir, img),
      )

      return new Promise((resolve, reject) => {
        Spritesmith.run({
          src: fullPaths,
          ...moduleOptions.spriteConfig,
          padding: (moduleOptions.spriteConfig.padding || 0) * scale,
        }, (err, result) => {
          if (err) {
            reject(err)
            return
          }

          fs.writeFile(output, result.image).then(() => {
            resolve(result)
          }).catch(reject)
        })
      })
    }

    const generateCSS = async (
      opts: SpritesmithGenerateCSSOptions,
    ) => {
      const { spriteModuleName, standardSpritesheetPath, retinaSpritesheetPath, results } = opts
      const iconPrefix = `${moduleOptions.prefix}${spriteModuleName}`
      const iconImageClassName = iconPrefix

      let cssContent = `/* Auto-generated by nuxt-spritesmith */\n`

      if (moduleOptions.cssTemplate) {
        cssContent += moduleOptions.cssTemplate(opts)
      }
      else {
        // 标准样式
        if (results.standard) {
          cssContent += `.${iconImageClassName} {
          display: inline-block;
          background-image: url('${standardSpritesheetPath}');
        }\n`

          for (const [filename, data] of Object.entries(results.standard.coordinates)) {
            const iconName = path.basename(filename, path.extname(filename)).replace('@2x', '')

            cssContent += `
            .${iconPrefix}--${iconName} {
              width: ${data.width}px;
              height: ${data.height}px;
              background-position: -${data.x}px -${data.y}px;
            }\n`
          }
        }

        // Retina 样式
        if (results.retina) {
          cssContent += `
            @media
              (-webkit-min-device-pixel-ratio: ${moduleOptions.retina.ratio}),
              (min-resolution: ${moduleOptions.retina.ratio * 96}dpi) {
              .${iconImageClassName} {
                background-image: url('${retinaSpritesheetPath}');
                background-size: ${results.standard?.properties.width || 0}px auto;
              }
            }`
        }
      }

      /** 添加 css */
      const virtualCssFileName = `nuxt-spritesmith-${spriteModuleName}.css`

      const { filename } = addTemplate({
        write: true,
        filename: virtualCssFileName,
        getContents: () => cssContent,
      })

      nuxt.options.css.push(`#build/${filename}`)
    }

    // 构建钩子
    nuxt.hook('ready', async () => {
      await ensureDirs()

      const spriteDirs = await fg.glob('*/', {
        cwd: resolve(nuxt.options.srcDir, moduleOptions.srcDir),
        onlyDirectories: true,
      })

      logger.info(`Generating sprites for ${spriteDirs.length} directories`)

      await Promise.all(spriteDirs.map(generateSprite))
    })

    // 开发模式监听
    if (nuxt.options.dev && moduleOptions.enableDevWatch) {
      const watcher = chokidar.watch(
        resolve(nuxt.options.srcDir, moduleOptions.srcDir),
        { ignoreInitial: true },
      )

      watcher.on('all', async (event, filePath) => {
        const dir = resolve(
          resolve(nuxt.options.srcDir, moduleOptions.srcDir),
          path.dirname(filePath),
        )

        await generateSprite(dir)

        logger.success(`Regenerated sprite for: ${dir}`)
      })
    }
  },

})
