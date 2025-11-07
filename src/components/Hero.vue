<template>
  <div
    class="h-64 md:h-80 bg-cover bg-center rounded-xl flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="bg-black/50 p-6 rounded-xl">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h1>
      <Button>{{ button }}</Button>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

defineProps({
  title: String,
  button: String,
  image: String
})
</script>
