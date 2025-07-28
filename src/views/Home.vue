<template>
  <div id="app-wrapper">
    <Header />
    <Hero />
    <Services />
    <About />
    <Possibilities/>
    <Experience/>
    <Form/>
    <Social/>
    <Testimonial/>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import About from '../components/About.vue'
import Possibilities from '../components/Possibilities.vue'
import Experience from '../components/Experience.vue'
import Form from '../components/Form.vue'
import Social from '../components/Social.vue'
import Testimonial from '../components/Testimonial.vue'
import Footer from '../components/Footer.vue'
</script>
<style scoped>
#app-wrapper {
  width: 100%;
}
</style>
