<script setup lang="ts">
import BrandMark from './components/BrandMark.vue'
import FilterSection from './components/FilterSection.vue'
import SpriteSection from './components/SpriteSection.vue'
import {
  darkIcons,
  ecomIcons,
  filterNames,
  navIcons,
  socialIcons,
  statusIcons,
  uiIcons,
} from './data/sprite-icons'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-content">
        <h1 class="header-title">
          <BrandMark />
          <span>Nuxt Spritesmith</span>
        </h1>
        <p class="header-subtitle">
          Auto-generate sprite sheets from your PNG images with a single module.
          Retina-ready. Zero config needed.
        </p>
        <div class="header-stats">
          <div class="stat">
            <span class="stat-value">2</span><span class="stat-label">Sprite Sheets</span>
          </div>
          <div class="stat">
            <span class="stat-value">300+</span><span class="stat-label">Icons</span>
          </div>
          <div class="stat">
            <span class="stat-value">2x</span><span class="stat-label">Retina Support</span>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <FilterSection :names="filterNames" />
      <SpriteSection
        title="🧭 Navigation"
        description="Arrows, chevrons, and directional indicators."
        :names="navIcons"
      />
      <SpriteSection
        title="🔘 UI Elements"
        description="Buttons, form controls, and interaction icons."
        :names="uiIcons"
      />
      <SpriteSection
        title="🌐 Social Media"
        description="Share and connect icons for all major platforms."
        :names="socialIcons"
      />
      <SpriteSection
        title="🛒 E-Commerce"
        description="Shopping cart, favorites, reviews, and product icons."
        :names="ecomIcons"
      />
      <SpriteSection
        title="📊 Status & Misc"
        description="Success, error, badges, and decorative elements."
        :names="statusIcons"
      />
      <SpriteSection
        title="🌙 On Dark Backgrounds"
        description="Sprites with white/light variants shine on dark surfaces."
        :names="darkIcons"
        dark
      />
    </main>

    <footer class="footer">
      <p>Built with <strong>nuxt-spritesmith</strong> — auto-generated sprite sheets from <code>assets/sprites/</code></p>
    </footer>
  </div>
</template>

<style lang="scss">
$page-background: #f1f3f5;
$ink: #212529;
$navy: #1a1a2e;
$muted: #718096;
$soft-muted: #a0aec0;
$surface: #fff;
$tile: #f8f9fa;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background: $page-background;
  color: $ink;
  line-height: 1.6;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  background: linear-gradient(135deg, $navy 0%, #16213e 50%, #0f3460 100%);
  color: #fff;
  padding: 60px 24px 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 50%);
}
.header-content {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
}
.header-title {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #a8d8ea, #f8b4c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.header-subtitle {
  font-size: 1.1rem;
  color: $soft-muted;
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.7;
}
.header-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #f8b4c8;
}
.stat-label {
  font-size: 0.8rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
}
.main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 24px 64px;
}
.section {
  margin-bottom: 40px;
}
.section-header {
  margin-bottom: 16px;
}
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: $navy;
  margin-bottom: 4px;
}
.section-desc {
  font-size: 0.9rem;
  color: $muted;
}
.card {
  background: $surface;
  border-radius: 16px;
  padding: 28px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.04);
}
.card-dark {
  background: $navy;
  color: #e2e8f0;
}
.variant-group {
  margin-bottom: 24px;
}
.variant-group:last-child {
  margin-bottom: 0;
}
.variant-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid #edf2f7;
}
.variant-title code {
  font-size: 0.8rem;
  background: #edf2f7;
  padding: 2px 7px;
  border-radius: 4px;
  font-weight: 500;
  color: $muted;
}
.sprite-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}
.sprite-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 8px 12px;
  border-radius: 10px;
  background: $tile;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: default;
  min-height: 90px;
}
.sprite-cell:hover {
  background: #fff;
  border-color: #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
.sprite-cell:hover > :first-child {
  transform: scale(1.15);
}
.sprite-cell > :first-child {
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.sprite-label {
  font-size: 0.65rem;
  color: $soft-muted;
  text-align: center;
  word-break: break-all;
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sprite-cell-dark {
  background: rgba(255, 255, 255, 0.05);
}
.sprite-cell-dark:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}
.sprite-cell-dark .sprite-label {
  color: $muted;
}
.footer {
  background: $navy;
  color: $muted;
  text-align: center;
  padding: 32px 24px;
  font-size: 0.85rem;
}
.footer {
  strong {
    color: $soft-muted;
  }

  code {
    font-size: 0.8rem;
    background: rgba(255, 255, 255, 0.08);
    padding: 2px 7px;
    border-radius: 4px;
    color: #cbd5e0;
  }
}
@media (max-width: 768px) {
  .header-title {
    gap: 10px;
    font-size: 1.8rem;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }
  .header-stats {
    gap: 24px;
  }
  .stat-value {
    font-size: 1.4rem;
  }
  .sprite-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 6px;
  }
  .sprite-cell {
    padding: 12px 6px 8px;
    min-height: 70px;
  }
}
</style>
