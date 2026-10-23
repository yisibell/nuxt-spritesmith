<template>
  <svg
    class="brand-mark"
    viewBox="0 0 56 56"
    role="img"
    aria-label="Nuxt Spritesmith logo"
  >
    <defs>
      <linearGradient id="brand-mark-gradient" x1="8" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A8D8EA" />
        <stop offset="1" stop-color="#F8B4C8" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="17" fill="url(#brand-mark-gradient)" />
    <rect x="12" y="12" width="13" height="13" rx="4" fill="#1A1A2E" />
    <rect x="31" y="12" width="13" height="13" rx="4" fill="#1A1A2E" opacity=".82" />
    <rect x="12" y="31" width="13" height="13" rx="4" fill="#1A1A2E" opacity=".82" />
    <rect x="31" y="31" width="13" height="13" rx="4" fill="#1A1A2E" />
  </svg>
</template>

<style scoped>
.brand-mark {
  display: block;
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
}
</style>
