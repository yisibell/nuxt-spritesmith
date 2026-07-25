<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <h1 class="header-title">
          🎯 Nuxt Spritesmith
        </h1>
        <p class="header-subtitle">
          Auto-generate sprite sheets from your PNG images with a single module.
          Retina-ready. Zero config needed.
        </p>
        <div class="header-stats">
          <div class="stat">
            <span class="stat-value">2</span>
            <span class="stat-label">Sprite Sheets</span>
          </div>
          <div class="stat">
            <span class="stat-value">300+</span>
            <span class="stat-label">Icons</span>
          </div>
          <div class="stat">
            <span class="stat-value">2x</span>
            <span class="stat-label">Retina Support</span>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <!-- Color Filters -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            🎨 Color Filters
          </h2>
          <p class="section-desc">
            Filter icons with 15 color variants. Each icon has a regular (36×36) and
            compact (32×32) size — all from a single sprite sheet.
          </p>
        </div>
        <div class="card">
          <div class="variant-group">
            <h3 class="variant-title">
              Regular Size <code>36×36</code>
            </h3>
            <div class="sprite-grid">
              <div
                v-for="name in filterNames"
                :key="name"
                class="sprite-cell"
                :title="name"
              >
                <span :class="`sprite-filter sprite-filter--${name}`" />
                <span class="sprite-label">{{ name }}</span>
              </div>
            </div>
          </div>
          <div class="variant-group">
            <h3 class="variant-title">
              Compact Size <code>32×32</code>
            </h3>
            <div class="sprite-grid">
              <div
                v-for="name in filterNames"
                :key="`${name}-32`"
                class="sprite-cell"
                :title="`${name}-32`"
              >
                <span :class="`sprite-filter sprite-filter--${name}-32`" />
                <span class="sprite-label">{{ name }}-32</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Icons -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            🧭 Navigation
          </h2>
          <p class="section-desc">
            Arrows, chevrons, and directional indicators.
          </p>
        </div>
        <div class="card">
          <div class="sprite-grid">
            <div
              v-for="name in navIcons"
              :key="name"
              class="sprite-cell"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- UI Elements -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            🔘 UI Elements
          </h2>
          <p class="section-desc">
            Buttons, form controls, and interaction icons.
          </p>
        </div>
        <div class="card">
          <div class="sprite-grid">
            <div
              v-for="name in uiIcons"
              :key="name"
              class="sprite-cell"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Social Media Icons -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            🌐 Social Media
          </h2>
          <p class="section-desc">
            Share and connect icons for all major platforms.
          </p>
        </div>
        <div class="card">
          <div class="sprite-grid">
            <div
              v-for="name in socialIcons"
              :key="name"
              class="sprite-cell"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- E-Commerce Icons -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            🛒 E-Commerce
          </h2>
          <p class="section-desc">
            Shopping cart, favorites, reviews, and product icons.
          </p>
        </div>
        <div class="card">
          <div class="sprite-grid">
            <div
              v-for="name in ecomIcons"
              :key="name"
              class="sprite-cell"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Status & Misc -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            📊 Status & Misc
          </h2>
          <p class="section-desc">
            Success, error, badges, and decorative elements.
          </p>
        </div>
        <div class="card">
          <div class="sprite-grid">
            <div
              v-for="name in statusIcons"
              :key="name"
              class="sprite-cell"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Dark Background Demo -->
      <section class="section section-dark">
        <div class="section-header">
          <h2 class="section-title">
            🌙 On Dark Backgrounds
          </h2>
          <p class="section-desc">
            Sprites with white/light variants shine on dark surfaces.
          </p>
        </div>
        <div class="card card-dark">
          <div class="sprite-grid">
            <div
              v-for="name in darkIcons"
              :key="name"
              class="sprite-cell sprite-cell-dark"
              :title="name"
            >
              <span :class="`sprite-icon sprite-icon--${name}`" />
              <span class="sprite-label">{{ name }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>
        Built with <strong>nuxt-spritesmith</strong> — auto-generated sprite sheets
        from <code>assets/sprites/</code>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const filterNames = [
  'all', 'black', 'blue', 'brown', 'florals', 'green', 'grey',
  'neutral', 'new_in', 'orange', 'pink', 'purple', 'red', 'white', 'yellow',
]

const navIcons = [
  'arrow-down', 'arrow-down-new', 'arrow-down-select', 'arrow-down-white',
  'arrow-up', 'arrow-up-11', 'arrow-up-18', 'arrow-up-grey', 'arrow-up-new',
  'arrow-up-order-detail', 'arrow-up-white',
  'arrow-left', 'arrow-left-full-img',
  'arrow-right-18', 'arrow-right-full-img', 'arrow-right-full-img-sec', 'arrow-right-white',
  'go-back-menu', 'go-back-white-16', 'go-forward-16', 'go-forward-16-new', 'go-forward-24',
  'normal-arrow-left', 'normal-arrow-right',
  'sort-down-white', 'sort-up-white', 'triangle-down',
  'go-search',
  'sg-arrow-down-11', 'sg-arrow-up-11',
]

const uiIcons = [
  'close', 'close-16', 'close-dialog-activity-banner', 'close-full-img',
  'close-share', 'close-white', 'close_mb', 'menu',
  'plus', 'plus-18', 'minus', 'minus-18',
  'check-black', 'check-primary', 'check-red', 'check-white', 'check-white-14', 'check-yellow',
  'calendar', 'calendar-register', 'calender-event',
  'camera', 'camera-review', 'video', 'video-play',
  'question-grey', 'qustion-prompt',
  'date', 'copy-link', 'composite-full',
  'gallery-back', 'gallery-close', 'gallery-choose', 'gallery-cart',
  'see-full-img', 'top-right-delete', 'delete-cart',
  'dialog-close', 'dialog-activity-close-32',
  'three-level-close', 'three-level-selected', 'three-level-video',
  'click-down', 'click-up', 'gallery-sns-facebook',
]

const socialIcons = [
  'facebook-grey', 'twitter-grey', 'pinterest-grey', 'mail-grey',
  'facebook-success-check',
  'sns-bottom-email', 'sns-bottom-facebook', 'sns-bottom-google',
  'sns-bottom-instagram', 'sns-bottom-pinterest', 'sns-bottom-tiktok',
  'sns-bottom-twitter', 'sns-bottom-youtube',
  'sns-email-product', 'sns-email-white-26',
  'sns-facebook-gray-26', 'sns-facebook-product', 'sns-facebook-white-26',
  'sns-google-gray-26', 'sns-google-product', 'sns-google-white-26',
  'sns-instagram-gray-26',
  'sns-pinterest-gray-26', 'sns-pinterest-product', 'sns-pinterest-white-26',
  'sns-twitter-gray-26', 'sns-twitter-product', 'sns-twitter-white-26',
  'sns-youtube-gray-26', 'sns-share', 'share-sns',
  'sns-footer-facebook', 'sns-footer-instagram', 'sns-footer-pinterest',
  'sns-footer-tiktok', 'sns-footer-twitter', 'sns-footer-youtube',
  'login-facebook', 'login-google',
  'gallery-share-photo-fb', 'gallery-share-photo-ins', 'gallery-share-photo-twitter',
  'share-facebook', 'share-instagram', 'share-pinterest',
  'icon-sns-bottom-email',
]

const ecomIcons = [
  'cart', 'cart-empty', 'empty-cart', 'empty-order',
  'heart', 'star',
  'favor-list', 'favor-list-active', 'my-favor',
  'like-grey', 'like-pink', 'like-selected', 'likely', 'ulikely',
  'comment', 'comment-like', 'comment-not-like',
  'customer-service', 'customer',
  'order_mb', 'processing-new', 'del-goods',
  'size-guide-ruler', 'clothes-hanger', 'color-lump',
  'free_custom_size', 'try-on-discount', 'try_get_free',
  'velvet-bag-gift', 'lightning', 'money', 'seal',
  'off', 'off-en', 'switch-on', 'switch-off',
  'gallery-sns-instagram', 'gallery-sns-pinterest', 'gallery-sns-googleplus',
  'gallery-sns-twitter',
  'goods-comment-video-play-24', 'goods-comment-video-play-36',
  'style-gallery-add', 'style-gallery-pictures', 'style-gallery-success', 'style-gallery-video',
  'send-message', 'product-inquiry-chat', 'chat_mb', 'chat_mb_new',
  'chat-bubble', 'live-chat-header', 'chat-arrow-down-black', 'chat-arrow-down-white',
  'chat-arrow-up-black', 'chat-link-article', 'chat-minus-black', 'chat-plus-black',
  'move-to-bag', 'show-similar-goods',
  'turntable-icon', 'special-offer-arrow',
  'left-selected-20', 'right-selected-20',
]

const statusIcons = [
  'success-check', 'successful', 'fail',
  'review-success', 'review-success-close',
  'forbid-add-like', 'addedsuccessfully',
  'ques-finish', 'ques-pen', 'ques-right-arrow',
  'notice', 'semi-circle-tick',
  'award-couples-choice', 'award-couples-choice-2023', 'award-kont',
  'activity-block', 'go-to-survey',
  'invite-friends', 'composite-full',
  'hot-searched', 'try-on-arrow-down', 'try-on-arrow-up',
]

const darkIcons = [
  'arrow-down-white', 'arrow-right-white', 'arrow-up-white',
  'check-white', 'check-white-14', 'close-white',
  'go-back-white-16', 'sort-down-white', 'sort-up-white',
  'sns-facebook-white-26', 'sns-google-white-26',
  'sns-pinterest-white-26', 'sns-twitter-white-26', 'sns-email-white-26',
  'gallery-sns-facebook',
  'dialog-activity-close-32',
  'share-sns', 'copy-link',
]
</script>

<style>
/* Global reset & base */
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
  background: #f1f3f5;
  color: #212529;
  line-height: 1.6;
}

/* App layout */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
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
  color: #a0aec0;
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

/* Main */
.main {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

/* Sections */
.section {
  margin-bottom: 40px;
}

/* .section-dark styles handled by card-dark below */

.section-header {
  margin-bottom: 16px;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 4px;
}

.section-desc {
  font-size: 0.9rem;
  color: #718096;
}

/* Cards */
.card {
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 4px 12px rgba(0, 0, 0, 0.04);
}

.card-dark {
  background: #1a1a2e;
  color: #e2e8f0;
}

/* Variant groups */
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
  color: #718096;
}

/* Sprite grid */
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
  background: #f8f9fa;
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
  color: #a0aec0;
  text-align: center;
  word-break: break-all;
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Dark variant */
.sprite-cell-dark {
  background: rgba(255, 255, 255, 0.05);
}

.sprite-cell-dark:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.sprite-cell-dark .sprite-label {
  color: #718096;
}

/* Footer */
.footer {
  background: #1a1a2e;
  color: #718096;
  text-align: center;
  padding: 32px 24px;
  font-size: 0.85rem;
}

.footer strong {
  color: #a0aec0;
}

.footer code {
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 7px;
  border-radius: 4px;
  color: #cbd5e0;
}

/* Responsive */
@media (max-width: 768px) {
  .header-title {
    font-size: 1.8rem;
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
