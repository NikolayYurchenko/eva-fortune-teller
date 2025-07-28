<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Левая часть -->
      <div class="footer-brand">
        <h2>EVA FORTUNE TELLING</h2>
        <p>Керівництво, ясність та розуміння вашого шляху</p>
      </div>

      <!-- Центр: навигация -->
      <div class="footer-nav">
        <a href="#main" @click.prevent="scrollTo('main')">Головна</a>
        <a href="#services" @click.prevent="scrollTo('services')">Послуги</a>
        <a href="#about" @click.prevent="scrollTo('about')">Про мене</a>
        <a href="#poss" @click.prevent="scrollTo('poss')">Що я можу</a>
        <a href="#exp" @click.prevent="scrollTo('exp')">Досвід</a>
        <a href="#rev" @click.prevent="scrollTo('rev')">Відгуки</a>
      </div>

      <!-- Правая часть: контакты -->
      <div class="footer-contacts">
        <p><strong>Телефон:</strong> +380 99 123 45 67</p>
        <p><strong>Пошта:</strong> kolya3864@gmail.com</p>
        <div class="footer-social">
          <a href="https://t.me/yourname" target="_blank">
            <img src="./icons/tg.png" alt="Telegram" />
          </a>
          <a href="viber://chat?number=+380123456789">
            <img src="./icons/vb.png" alt="Viber" />
          </a>
          <a href="https://wa.me/380123456789" target="_blank">
            <img src="./icons/ws.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>

    <!-- Линия и копирайт -->
    <div class="footer-bottom">
      <span></span>
      <p>© 2025 EVA Fortune Telling. All Rights Reserved.</p>
      <span></span>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  background: rgba(34, 20, 35, 0.95);
  padding: 60px 20px 30px;
  color: #e8dcc6;
  font-family: 'Playfair Display', serif;
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-brand h2 {
  font-size: 28px;
  color: #e8dcc6;
  margin-bottom: 10px;
}

.footer-brand p {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #bfae94;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  text-decoration: none;
  color: #e8dcc6;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #d4b77c;
}

.footer-contacts p {
  font-size: 14px;
  margin: 4px 0;
  color: #d4c9af;
}

.footer-social {
  display: flex;
  gap: 14px;
  margin-top: 10px;
}

.footer-social img {
  width: 26px;
  height: 26px;
  transition: transform 0.3s ease;
}

.footer-social img:hover {
  transform: scale(1.2);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 15px;
  color: #a99b80;
  font-size: 13px;
}

.footer-bottom span {
  flex: 1;
  height: 1px;
  background: rgba(232, 220, 198, 0.3);
  max-width: 200px;
}
</style>
