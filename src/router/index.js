import { createRouter, createWebHistory } from 'vue-router'

// Import semua halaman (sementara kosong dulu)
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import DetailNews from '../pages/DetailNews.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/news/:id', name: 'DetailNews', component: DetailNews }, // <—
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
