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
    // ...
  }
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


## Options

| Key | Default value | Description |
| :---: | :---: | :---: |
| `srcDir`| `assets/sprites` | Sprite image source dir |
| `outputDir` | `public/sprites` | Sprite sheet output dir |
| `spriteConfig` | - | Spritesmith generate CSS options |
| `retina` | - | Config for retina |
| `prefix` | `'sprite-'` | Define sprite icon class name prefix |
| `cssTemplate` | - | Custom css template |
| `enableDevWatch` | - | Weather to enable watcher for the development env |

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
