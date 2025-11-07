<template>
  <RouterLink :to="link">
    <div class="border rounded-lg shadow p-4 hover:shadow-xl transition cursor-pointer">
      <img :src="image" alt="" class="rounded-lg mb-3" />
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  description: String,
  image: String,
  link: String
})
</script>
