<template>
  <button
    class="px-4 py-2 rounded-lg font-semibold transition"
    :class="{
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-300 text-black hover:bg-gray-400': variant === 'secondary'
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>
