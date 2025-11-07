<template>
  <footer class="bg-gray-900 text-white py-4 text-center mt-10">
    <p>© {{ year }} - Website Himti Tutorial</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
