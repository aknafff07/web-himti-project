<template>
  <Section>
    <Hero
      title="Selamat Datang di Website Himti"
      button="Lihat Berita"
      image="https://picsum.photos/1200/500"
    />

    <h1 class="text-3xl mb-6 font-bold mt-10">Berita Terbaru</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :link="`/news/${item.id}`"
      />
    </div>
  </Section>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Section from '../components/Section.vue'
import Card from '../components/Card.vue'
import news from '../data/news.json'
</script>
