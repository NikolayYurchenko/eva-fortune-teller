<template>
  <header>
    <div class="header-grid" :class="{ scrolled: isScrolled }">
      <div class="logo">EVA FORTUNE TELLING</div>

      <nav :class="{ open: isOpen }">
        <a href="#main" @click.prevent="scrollTo('main')">Головна</a>
        <a href="#services" @click.prevent="scrollTo('services')">Послуги</a>
        <a href="#about" @click.prevent="scrollTo('about')">Про мене</a>
        <a href="#poss" @click.prevent="scrollTo('poss')">Що я можу</a>
        <a href="#exp" @click.prevent="scrollTo('exp')">Досвід</a>
        <a href="#form" @click.prevent="scrollTo('form')">Записатися</a>
        <a href="#rev" @click.prevent="scrollTo('rev')">Відгуки</a>
      </nav>

      <div class="burger" :class="{ open: isOpen }" @click="toggleMenu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80 // высота шапки
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
  isOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* убираем горизонтальный скролл */
  width: 100%;
}
/* === БАЗА === */
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: transparent;
  transition: background-color 0.5s ease;
  box-sizing: border-box;
}

.header-grid.scrolled {
  background-color: rgba(84, 59, 80, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.header-grid {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  height: 100px;
}

/* === ЛОГО === */
.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(24px, 4vw, 42px);
  font-weight: 700;
  color: #f6f0e7;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* === НАВИГАЦИЯ === */
nav {
  display: flex;
  gap: 40px;
  align-items: center;
  transition: transform 0.4s ease;
}

nav a {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(18px, 1.8vw, 22px);
  text-decoration: none;
  color: #f6f0e7;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #d4b77c;
}

/* === БУРГЕР === */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  z-index: 1100;
}
.burger span {
  width: 28px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* === ПЛАНШЕТЫ (до 1024px) === */
@media (max-width: 1024px) {
  .header-grid {
    padding: 0 20px;
  }
  nav {
    gap: 25px;
  }
  .logo {
    font-size: clamp(20px, 5vw, 34px);
  }
}

/* === ВКЛЮЧЕНИЕ БУРГЕРА (до 780px) === */
@media (max-width: 780px) {
  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.3);
    padding: 100px 30px;
    transition: transform 0.4s ease;
    width: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
    display: none;
  }
  nav.open {
    display: flex;
    width: 220px;
    transform: translateX(0);
  }
  .burger {
    display: flex;
  }
}

/* === МОБИЛЬНЫЕ (до 600px) === */
@media (max-width: 600px) {
  .header-grid {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px 20px;
    height: 80px;
  }
  .logo {
    font-size: clamp(18px, 6vw, 26px);
    max-width: 70%;
    white-space: normal;
    line-height: 1.2;
  }
}
</style>
