<template>
  <div
    class="absolute w-full bg-orange-200 transition-transform-opacity duration-300"
    :class="{
      '-translate-y-[30%] opacity-0 -z-10': !isActive,
      'translate-y-0 opacity-100 z-10': isActive,
    }"
  >
    <ul class="flex flex-col gap-2 font-semibold p-4" @scroll="console.log('object')">
      <RouterLink :to="{ name: 'home' }" @click="$emit('closeMenu')">
        <li>Strona główna</li>
      </RouterLink>
      <RouterLink :to="{ name: 'home', hash: '#about-me' }" @click="$emit('closeMenu')">
        <li>O mnie</li>
      </RouterLink>
      <RouterLink :to="{ name: 'home', hash: '#offer' }" @click="$emit('closeMenu')">
        <li>Oferta</li>
      </RouterLink>
      <RouterLink :to="{ name: 'login' }" @click="$emit('closeMenu')">
        <li>Rezerwacja wizyty</li>
      </RouterLink>
      <RouterLink :to="{ name: 'home', hash: '#offer' }" @click="$emit('closeMenu')">
        <li>Oferta</li>
      </RouterLink>

      <RouterLink :to="{ name: 'contact' }" @click="$emit('closeMenu')">
        <li>Kontakt</li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()

defineEmits(['closeMenu'])
</script>

<style scoped></style>
