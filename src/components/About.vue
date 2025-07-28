<template>
  <section class="about" id="about">
    <div class="about-header">
      <span class="line"></span>
      <h2 class="about-title">ПРО МЕНЕ</h2>
      <span class="line"></span>
    </div>

    <div class="about-content">
      <div class="about-text">
        <h3>Хто я є</h3>
        <p>
          Я обдарована ворожка, нащадок давнього роду ясновидців.
          Мої здібності розвивалися з юного віку під керівництвом моєї матері, бабусі та прабабусі – всі вони були відомі своїми потужними екстрасенсорними дарами.
        </p>
        <p>
          Маючи багаторічний досвід, я допомагаю іншим знаходити ясність та керівництво через свої бачення,
          продовжуючи історичну традицію моєї родини та пропонуючи відповіді тим, хто їх шукає
        </p>
      </div>

      <div class="about-image">
        <img src="@/assets/about.png" alt="Clairvoyant Portrait" />
      </div>
    </div>

    <div class="about-heritage">
      <h3>Наша спадщина</h3>
      <p>
        Сімейна традиція ясновидіння охоплює кілька поколінь, глибоко вкорінена в родовід інтуїтивних жінок. Кожне покоління передавало священні знання та практики, забезпечуючи безперервність потужних ідей та духовного керівництва
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 100px 20px;
  color: #e8dcc6;
  text-align: center;
  position: relative;
  z-index: 2;
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
}

.about-title {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 700;
  color: #e8dcc6;
  letter-spacing: 2px;
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

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto 60px auto;
  flex-wrap: wrap;
}

.about-text {
  flex: 1 1 400px;
  text-align: left;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  padding: 40px;
  background-color: #e8dcc6;
  opacity: 0.9;
  border-radius: 10px;
}

.about-text h3 {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  margin-bottom: 20px;
  color: #3e2f1d;
}

.about-text p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #3e2f1d;
}

.about-image {
  flex: 1 1 600px;
  max-width: 600px;
}

.about-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  border: 1px solid #e8dcc6;
  animation: float3D 4s ease-in-out infinite;
}

@keyframes float3D {
  0% {
    transform: rotateX(0deg) rotateY(0deg) scale(1);
  }
  25% {
    transform: rotateX(10deg) rotateY(-8deg) scale(1.04);
  }
  50% {
    transform: rotateX(-8deg) rotateY(10deg) scale(1.05);
  }
  75% {
    transform: rotateX(8deg) rotateY(-6deg) scale(1.02);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) scale(1);
  }
}

.about-heritage {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  opacity: 0.95;
  padding: 40px;
  background-color: #e8dcc6;
  border-radius: 10px;
}

.about-heritage h3 {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  margin-bottom: 20px;
  color: #3e2f1d;
}

.about-heritage p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #3e2f1d;
}

/* === Адаптив === */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  .about-text {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 60px 15px;
  }
  .about-title {
    font-size: 32px;
  }
  .about-text p, .about-heritage p {
    font-size: 16px;
    line-height: 1.6;
  }
}
</style>
