<template>
  <nav class="relative p-2 bg-orange-200">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'home' }">
        <div class="home flex items-center gap-2">
          <House :size="32" />
          <div class="name flex flex-col">
            <h1 class="font-medium text-xl">Anna Lewandowska</h1>
            <h2 class="text-[14px]">Fizjoterapia</h2>
          </div>
        </div>
      </RouterLink>

      <div class="bg-orange-400 rounded p-2">
        <Menu color="black" @click="isMenuActive = !isMenuActive" />
      </div>
    </div>
  </nav>
  <MobileNavComponent :isActive="isMenuActive" />
</template>

<script setup lang="ts">
import { House, Menu } from 'lucide-vue-next'
import MobileNavComponent from './MobileNavComponent.vue'
import { ref } from 'vue'

const isMenuActive = ref(false)
</script>

<style scoped></style>
