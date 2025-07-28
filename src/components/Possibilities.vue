<template>
  <section class="possibilities" id="poss">
    <div class="poss-header">
      <span class="line"></span>
      <h2 class="poss-title">ЧИМ Я МОЖУ ВАМ ДОПОМОГТИ</h2>
      <span class="line"></span>
    </div>

    <p class="poss-sub">
      Спеціалізуюся на магії, ворожіннях та пророкуваннях. Індивідуальний підхід та потужні ритуали
    </p>

    <div class="poss-grid">
      <div v-for="(item, i) in items" :key="i" class="poss-card">
        <span class="icon">✦</span>
        <h3>{{ item }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  'Ворожіння',
  'Виливання на віск',
  'Пророцтво',
  'Приворот по фото',
  'Повернення коханого',
  'Отворот суперниці',
  'Самотність у долі',
  'Захист від розлучення',
  'Зняття порчі, пристріту',
  'Венок безшлюбності',
  'Возєднання сімї',
  'Сексуальна привязка',
  'Захист від зрад',
  'Гармонізація відносин',
  'Магічний ритуал'
]
</script>

<style scoped>
.possibilities {
  text-align: center;
  padding: 100px 20px;
  background: transparent;
  position: relative;
  z-index: 2;
}

.poss-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.poss-title {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 700;
  color: #e8dcc6;
}

.line {
  display: inline-block;
  width: 12%;
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
.line::before { left: -12px; }
.line::after { right: -12px; }

.poss-sub {
  color: #e8dcc6;
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}

/* === Сетка 3x5 === */
.poss-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;
}

.poss-card {
  background: rgba(232, 220, 198, 0.08);
  border: 1px solid rgba(232, 220, 198, 0.2);
  padding: 25px;
  border-radius: 12px;
  color: #e8dcc6;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  animation: floatCard 6s ease-in-out infinite;
}

.poss-card:nth-child(1) { animation-delay: 0s; }
.poss-card:nth-child(2) { animation-delay: 0.2s; }
.poss-card:nth-child(3) { animation-delay: 0.4s; }
.poss-card:nth-child(4) { animation-delay: 0.6s; }
.poss-card:nth-child(5) { animation-delay: 0.8s; }
.poss-card:nth-child(6) { animation-delay: 1s; }
.poss-card:nth-child(7) { animation-delay: 1.2s; }
.poss-card:nth-child(8) { animation-delay: 1.4s; }
.poss-card:nth-child(9) { animation-delay: 1.6s; }
.poss-card:nth-child(10) { animation-delay: 1.8s; }

@keyframes floatCard {
  0% {
    transform: translateY(0) rotateX(0) rotateY(0);
    box-shadow: 0 0 15px rgba(212, 183, 124, 0.2);
  }
  25% {
    transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
    box-shadow: 0 8px 20px rgba(212, 183, 124, 0.25);
  }
  50% {
    transform: translateY(0) rotateX(0) rotateY(0);
    box-shadow: 0 0 15px rgba(212, 183, 124, 0.2);
  }
  75% {
    transform: translateY(-6px) rotateX(-2deg) rotateY(2deg);
    box-shadow: 0 8px 20px rgba(212, 183, 124, 0.25);
  }
  100% {
    transform: translateY(0) rotateX(0) rotateY(0);
    box-shadow: 0 0 15px rgba(212, 183, 124, 0.2);
  }
}

.poss-card:hover {
  background: rgba(232, 220, 198, 0.2);
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.poss-card .icon {
  display: block;
  font-size: 22px;
  margin-bottom: 10px;
  color: #d4b77c;
}

.poss-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 600;
}

/* === Адаптив === */
@media (max-width: 1200px) {
  .poss-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .poss-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .poss-grid {
    grid-template-columns: 1fr;
  }
}
</style>
