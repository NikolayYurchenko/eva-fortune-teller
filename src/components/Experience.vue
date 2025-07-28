<template>
  <section class="experience" id="exp">
    <div class="circle-container">
      <div class="exp-circle circle-left">
        <div class="content">
          <h2>320+</h2>
          <h3>ОБРЯДІВ</h3>
          <p>Сотні унікальних практик, ритуалів та обрядів, накопичених за роки магічної роботи</p>
        </div>
      </div>

      <div class="exp-circle circle-center">
        <div class="content">
          <h2>35+</h2>
          <h3>РОКІВ ПРАКТИКИ</h3>
          <p>Досвід і знання, що передаються поколіннями, допомогли сотням людей знайти свій шлях та гармонію</p>
        </div>
      </div>

      <div class="exp-circle circle-right">
        <div class="content">
          <h2>400+</h2>
          <h3>ВІДГУКІВ</h3>
          <p>Подяки від клієнтів по всьому світу – кожна історія унікальна та неповторна</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 80px 20px;
  position: relative;
  z-index: 2;
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 500px;
}

/* === КРУГИ === */
.exp-circle {
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 3px solid rgba(232, 220, 198, 0.5);
  background-color: #e8dcc6;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 35px rgba(173, 146, 224, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  animation: drift 12s ease-in-out infinite;
}

.exp-circle:nth-child(2) {
  animation-delay: 2s;
  animation-duration: 14s;
}

.exp-circle:nth-child(3) {
  animation-delay: 4s;
  animation-duration: 16s;
}

@keyframes drift {
  0%   { transform: translate(0px, 0px); }
  20%  { transform: translate(12px, -8px); }
  40%  { transform: translate(18px, 10px); }
  60%  { transform: translate(-10px, 14px); }
  80%  { transform: translate(-16px, -6px); }
  100% { transform: translate(0px, 0px); }
}


.exp-circle:hover {
  transform: scale(1.08);
  box-shadow: 0 0 60px rgba(232, 220, 198, 0.7);
}

/* Асимметрия и пересечение */
.circle-left {
  top: 0;
  left: 15%;
  z-index: 2;
}
.circle-center {
  top: 25%;
  left: 40%;
  z-index: 3;
}
.circle-right {
  top: -10%;
  right: 15%;
  z-index: 1;
}

/* === ТЕКСТ === */
.exp-circle .content h2 {
  font-size: 58px;
  font-weight: 700;
  color: #3e2f1d;
  margin-bottom: 10px;
}

.exp-circle .content h3 {
  font-size: 28px;
  color: #3e2f1d;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.exp-circle .content p {
  font-size: 18px;
  line-height: 1.8;
  color: #3e2f1d;
  opacity: 0.9;
}

/* === АДАПТИВ === */
@media (max-width: 1024px) {
  .circle-container {
    flex-direction: column;
    height: auto;
    gap: 60px;
  }
  .exp-circle {
    position: relative;
    margin: 20px 0;
    width: 300px;
    height: 300px;
  }
  .circle-left, .circle-center, .circle-right {
    top: auto;
    left: auto;
    right: auto;
  }
}
</style>
<script setup lang="ts">
</script>