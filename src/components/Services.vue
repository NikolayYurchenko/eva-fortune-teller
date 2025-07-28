<template>
  <section class="services" id="services">
    <div class="services-header">
      <span class="line"></span>
      <h2 class="services-title">Мої послуги</h2>
      <span class="line"></span>
    </div>
    <div class="services-grid">
      <div class="service-card" v-for="(service, i) in services" :key="i">
        <div class="icon">
          <img class="icon_img" :src="service.icon" :alt="service.title">
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import tarotIcon from '@/components/icons/card.png'
import palmIcon from '@/components/icons/hand.png'
import loveIcon from '@/components/icons/love.png'
const services = [
  {
    icon: tarotIcon,
    title: 'Розклад Таро',
    text: 'Отримайте поради та розуміння через персоналізований Тарорард'
  },
  {
    icon: palmIcon,
    title: 'Хіромантія',
    text: 'Зрозумійте свій життєвий шлях та потенціал за допомогою хіромантії. Зрозумійте свій життєвий шлях та потенціал за допомогою хіромантії'
  },
  {
    icon: loveIcon,
    title: 'Любовні заклинання',
    text: 'Приваблюйте або зміцнюйте кохання та романтику за допомогою моїх потужних заклинань. Приваблюйте або зміцнюйте кохання та романтику за допомогою моїх потужних заклинань'
  }
]
</script>

<style scoped>
.services {
  text-align: center;
  padding: 100px 20px;
  position: relative;
  z-index: 2;
}

.services-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  position: relative;
}

.services-title {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 700;
  color: #e8dcc6;
}

.line {
  display: inline-block;
  width: 10%;
  height: 2px;
  background-color: #e8dcc6;
  position: relative;
}

.line::before,
.line::after {
  content: '✦';
  position: absolute;
  top: -10px;
  font-size: 14px;
  color: #e8dcc6;
}

.line::before {
  left: -12px;
}

.line::after {
  right: -12px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  justify-items: center;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: #e8dcc6;
  color: #3e2f1d;
  padding: 30px 30px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  opacity: 0.9;
  width: 100%;
  max-width: 320px;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-card .icon {
  margin-bottom: 20px;
}

.service-card .icon img {
  width: 100%;
  max-width: 200px;
  height: 250px;
}

.service-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-card p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #3e2f1d;
}

/* Адаптив */
@media (max-width: 1024px) {
  .services {
    padding: 80px 15px;
  }
}

@media (max-width: 768px) {
  .services-grid {
    gap: 20px;
  }

  .service-card {
    padding: 25px 20px;
    max-width: 280px;
  }

  .service-card h3 {
    font-size: 24px;
  }

  .service-card .icon img {
    max-width: 160px;
  }
}

@media (max-width: 480px) {
  .services-title {
    font-size: 28px;
  }

  .service-card {
    padding: 20px 15px;
    max-width: 100%;
  }

  .service-card h3 {
    font-size: 22px;
  }

  .service-card p {
    font-size: 14px;
    line-height: 1.6;
  }

  .service-card .icon img {
    max-width: 140px;
  }
}
</style>
