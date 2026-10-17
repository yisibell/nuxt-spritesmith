import type Spritesmith from 'spritesmith'

export type SpritesmithProcessImagesOptions =
  Spritesmith.SpritesmithProcessImagesOptions

export type SpritesmithResult = Spritesmith.SpritesmithResult

export interface SpritesmithEngineConstructor {
  readonly specVersion: string
  new (...args: any[]): unknown
}

/**
 * A spritesmith engine constructor or an installed engine package name.
 *
 * Common package-name values include `pixelsmith` and `sharpsmith`.
 * A custom engine constructor can also be passed directly.
 *
 * @example
 * ```ts
 * engine: 'sharpsmith'
 * engine: 'pixelsmith'
 * engine: SharpSmith
 * ```
 */
export type SpritesmithEngine = string | SpritesmithEngineConstructor

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
  /**
   * 图片源目录
   */
  srcDir: string
  /**
   * 雪碧图输出目录
   */
  outputDir: string
  /** Spritesmith engine constructor or package name. */
  engine?: SpritesmithEngine
  /** Options forwarded to the selected engine constructor. */
  engineOpts?: Record<string, unknown>
  spriteConfig: SpritesmithProcessImagesOptions
  /** retina 屏配置 */
  retina?: {
    /** 是否开启 retina 屏适配 */
    enabled?: boolean
    /** 文件名后缀，默认为: @2x */
    suffix?: string
    ratio?: number
  }
  prefix: string
  cssTemplate?: (opts: SpritesmithGenerateCSSOptions) => string
  /**
   * @deprecated Abandoned development environment watch mode
   */
  enableDevWatch?: boolean
}

