<p align="center">
  <a href="https://www.npmjs.org/package/nuxt-spritesmith">
    <img src="https://img.shields.io/npm/v/nuxt-spritesmith.svg">
  </a>
  <a href="https://npmcharts.com/compare/nuxt-spritesmith?minimal=true">
    <img src="https://img.shields.io/npm/dm/nuxt-spritesmith.svg">
  </a>
  <br>
</p>

# nuxt-spritesmith

> A Nuxt(3) module for generate sprite image icons via [spritesmith](https://github.com/twolfson/spritesmith) 

- [✨ &nbsp;Release Notes](/CHANGELOG.md)


## Features

- Powered by [spritesmith](https://github.com/twolfson/spritesmith).
- Support Multi sprite sheet generation.


## Quick Setup

1. Add `nuxt-spritesmith` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-spritesmith

# Using yarn
yarn add --dev nuxt-spritesmith

# Using npm
npm install --save-dev nuxt-spritesmith
```

2. Add `nuxt-spritesmith` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-spritesmith'
  ],
  // custom nuxt-spritesmith options
  spritesmith: {
    engine: 'sharpsmith',
    engineOpts: {
      concurrentFileLimit: 4
    }
  }
})
```

You can also pass an engine constructor directly:

```ts
import SharpSmith from 'sharpsmith'

export default defineNuxtConfig({
  modules: ['nuxt-spritesmith'],
  spritesmith: {
    engine: SharpSmith,
  },
})
```

3. Put your icons in `~/assets/sprites` folder.



4. Using your sprite icon.

``` vue
<template>
  <div>
     <span class="sprite-some sprite-some--your-icon-name"></span>
  </div>
</template>
```

That's it! You can now use **nuxt-spritesmith** in your Nuxt app ✨

## Custom engine

By default, the module uses the `sharpsmith` engine. You can explicitly select
another installed engine, such as `pixelsmith`, by package name:

```bash
pnpm add -D nuxt-spritesmith sharpsmith
```

```ts
export default defineNuxtConfig({
  modules: ['nuxt-spritesmith'],
  spritesmith: {
    engine: 'sharpsmith',
    engineOpts: {
      concurrentFileLimit: 4,
    },
  },
})
```

The engine constructor can also be passed directly:

```ts
import SharpSmith from 'sharpsmith'

export default defineNuxtConfig({
  modules: ['nuxt-spritesmith'],
  spritesmith: {
    engine: SharpSmith,
  },
})
```

`engineOpts` is forwarded to the selected engine constructor. The engine must
implement `spritesmith-engine-spec@2.0.0`.


## Options

| Key | Default value | Description |
| :---: | :---: | :---: |
| `srcDir`| `assets/sprites` | Sprite image source dir |
| `outputDir` | `public/sprites` | Sprite sheet output dir |
| `engine` | `sharpsmith` | Spritesmith engine package name or constructor |
| `engineOpts` | - | Options forwarded to the engine constructor |
| `spriteConfig` | - | Spritesmith generate CSS options |
| `retina` | - | Config for retina |
| `prefix` | `'sprite-'` | Define sprite icon class name prefix |
| `cssTemplate` | - | Custom css template |
| `enableDevWatch` | - | Whether to enable watcher for the development env |

The module scans the first-level directories under `srcDir`. For example,
`assets/sprites/payment/*.png` generates `public/sprites/payment.png` and the
corresponding CSS classes use the configured `prefix`.

When Retina support is enabled, files ending with `@2x` are grouped into a
second sprite sheet, such as `payment@2x.png`, and CSS is generated with a
device-pixel-ratio media query.

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Run Vitest
pnpm test
pnpm test:watch

# Release new version
npm run release
```

The test suite uses Vitest and Nuxt Test Utils. It covers SSR rendering,
standard and Retina sprite generation, engine configuration, generated CSS,
and cleanup of temporary fixture files.
