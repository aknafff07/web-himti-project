<template>
  <Navbar />
  <main class="p-6">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
