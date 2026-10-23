<script setup lang="ts">
withDefaults(defineProps<{
  names: string[]
  spriteClass?: 'sprite-icon' | 'sprite-filter'
  dark?: boolean
  suffix?: string
}>(), {
  spriteClass: 'sprite-icon',
  dark: false,
  suffix: '',
})
</script>

<template>
  <div class="sprite-grid">
    <div
      v-for="name in names"
      :key="`${name}${suffix}`"
      class="sprite-cell"
      :class="{ 'sprite-cell-dark': dark }"
      :title="`${name}${suffix}`"
    >
      <span :class="`${spriteClass} ${spriteClass}--${name}${suffix}`" />
      <span class="sprite-label">{{ name }}{{ suffix }}</span>
    </div>
  </div>
</template>
