<template>
  <section class="hero" id="main">
    <div class="hero-inner">

      <!-- Левая часть - карты -->
      <div class="hero-left">
        <img src="./icons/cards.png" alt="Tarot Cards" class="tarot-img" />
      </div>

      <!-- Центр - текст -->
      <div class="hero-center">
        <h1 class="hero-title">Єва Володимирівна - Досвідчена ясновидеця</h1>
        <p class="hero-subtitle">Людина, звернувшись до мене з будь-яким питанням, отримує очікуваний результат. Я не даю порожніх обіцянок</p>
        <button class="cta-btn">ЗАПИСАТИСЯ</button>
      </div>

      <!-- Правая часть - рука -->
      <div class="hero-right">
        <img src="./icons/big_hand.png" alt="Mystic Hand" class="hand-img" />
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  width: 100%;
  padding: 65px 0 0 40px;
  color: #f6f0e7;
}

.hero-inner {
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 40px;
}

/* Левая часть */
.tarot-img {
  max-width: clamp(540px, 30vw, 420px);
  transform: rotate(-6deg);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
  justify-self: center;
}

/* Центр */
.hero-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: clamp(52px, 6vw, 80px);
  line-height: 1.1;
  margin: 0;
}

.hero-subtitle {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(18px, 2vw, 24px);
  margin-top: 10px;
}

.cta-btn {
  background-color: #d4b77c;
  color: #3e2e20;
  font-size: clamp(18px, 1.8vw, 22px);
  padding: 14px 40px;
  border-radius: 8px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.5s;
  border: 0.5px solid transparent;
}

.cta-btn:hover {
  background-color: transparent;
  color: #d4b77c;
  border: 0.5px solid #d4b77c;
}

/* Правая часть */
.hand-img {
  max-width: clamp(400px, 25vw, 280px);
  transform: rotate(6deg);
  justify-self: center;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
}

/* Адаптив */
@media (max-width: 992px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tarot-img,
  .hand-img {
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}
</style>
