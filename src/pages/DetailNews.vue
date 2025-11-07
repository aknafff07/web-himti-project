<template>
  <div v-if="item">
    <img :src="item.image" class="rounded-lg mb-4" />

    <h1 class="text-3xl font-bold mb-2">
      {{ item.title }}
    </h1>

    <p class="text-gray-600 text-lg">
      {{ item.description }}
    </p>
  </div>

  <div v-else>
    <h1 class="text-2xl font-bold text-red-500">Berita tidak ditemukan!</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import news from '../data/news.json'

const route = useRoute()
const id = route.params.id

// cari data berdasarkan ID
const item = news.find(n => n.id == id)
</script>
