<script setup lang="ts">
defineProps<{
  title: string
  description: string
  names: string[]
  dark?: boolean
}>()
</script>

<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-desc">{{ description }}</p>
    </div>
    <div class="card" :class="{ 'card-dark': dark }">
      <SpriteGrid :names="names" :dark="dark" />
    </div>
  </section>
</template>
