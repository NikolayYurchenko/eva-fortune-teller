<template>
  <section class="reviews" id="rev">
    <div class="reviews-header">
      <span class="line"></span>
      <h2 class="reviews-title">Відгуки клієнтів</h2>
      <span class="line"></span>
    </div>

    <div class="reviews-grid">
      <div class="review-card" v-for="(review, i) in reviews" :key="i" :style="{ '--rotate': review.rotate + 'deg' }">
        <img :src="review.img" alt="Review screenshot" />
      </div>
    </div>
  </section>
</template>

<script setup>
import rev1 from './icons/t1.jpg'
import rev2 from './icons/t2.jpg'
import rev3 from './icons/t3.jpg'
import rev4 from './icons/t4.jpg'
import rev5 from './icons/t5.jpg'
import rev6 from './icons/t6.jpg'
import rev7 from './icons/t7.jpg'
import rev8 from './icons/t8.jpg'
import rev9 from './icons/t9.jpg'

const reviews = [
  { img: rev1, rotate: -4 },
  { img: rev2, rotate: 3 },
  { img: rev3, rotate: -2 },
  { img: rev4, rotate: 5 },
  { img: rev5, rotate: -3 },
  { img: rev6, rotate: -2 },
  { img: rev7, rotate: -1 },
  { img: rev8, rotate: -5 },
  { img: rev9, rotate: -7 }
]
</script>

<style scoped>
.reviews {
  padding: 100px 20px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.reviews-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}

.reviews-title {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 700;
  color: #e8dcc6;
  text-shadow: 0 0 10px rgba(173, 146, 224, 0.4);
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

.line::before { left: -12px; }
.line::after { right: -12px; }

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
  gap: 100px;
  justify-items: center;
}

.review-card {
  background: rgba(232, 220, 198, 0.05);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transform: rotate(var(--rotate));
  transition: transform 0.4s ease;
  border: 2px solid rgba(232, 220, 198, 0.2);
  position: relative;
  width: 100%;
  max-width: 700px;
}

.review-card:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 0 25px rgba(255, 210, 100, 0.4);
  border-color: rgba(255, 210, 100, 0.6);
}

.review-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
