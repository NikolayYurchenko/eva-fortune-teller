import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServicesPage from '../views/ServicesPage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: ServicesPage },
    { path: '/about', component: AboutPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
