<template>
  <nav class="bg-gray-900 text-white py-4 shadow-md">
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      
      <!-- LOGO -->
      <RouterLink to="/" class="text-2xl font-bold tracking-wide">
        HIMTI
      </RouterLink>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex gap-8 text-lg">
        <RouterLink 
          to="/" 
          class="hover:text-yellow-300 transition duration-200"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="hover:text-yellow-300 transition duration-200"
        >
          About
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="hover:text-yellow-300 transition duration-200"
        >
          Contact
        </RouterLink>
      </div>

      <!-- MOBILE BUTTON -->
      <button 
        class="md:hidden text-2xl focus:outline-none"
        @click="toggleMenu"
      >
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <div 
      v-if="open" 
      class="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-4 text-lg"
    >
      <RouterLink 
        to="/" 
        class="py-2 hover:text-yellow-300 transition duration-200"
        @click="toggleMenu"
      >
        Home
      </RouterLink>

      <RouterLink 
        to="/about" 
        class="py-2 hover:text-yellow-300 transition duration-200"
        @click="toggleMenu"
      >
        About
      </RouterLink>

      <RouterLink 
        to="/contact" 
        class="py-2 hover:text-yellow-300 transition duration-200"
        @click="toggleMenu"
      >
        Contact
      </RouterLink>
    </div>

  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const open = ref(false);
const toggleMenu = () => {
  open.value = !open.value;
};
</script>

<style scoped>
/* Tambahan opsional (tidak wajib) */
</style>
