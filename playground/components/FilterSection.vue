<script setup lang="ts">
defineProps<{ names: string[] }>()
</script>

<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">🎨 Color Filters</h2>
      <p class="section-desc">
        Filter icons with 15 color variants. Each icon has a regular (36×36) and
        compact (32×32) size — all from a single sprite sheet.
      </p>
    </div>
    <div class="card">
      <div class="variant-group">
        <h3 class="variant-title">Regular Size <code>36×36</code></h3>
        <SpriteGrid :names="names" sprite-class="sprite-filter" />
      </div>
      <div class="variant-group">
        <h3 class="variant-title">Compact Size <code>32×32</code></h3>
        <SpriteGrid :names="names" sprite-class="sprite-filter" suffix="-32" />
      </div>
    </div>
  </section>
</template>
