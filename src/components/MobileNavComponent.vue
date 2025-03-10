<template>
  <div
    class="absolute w-full bg-orange-200 transition-transform-opacity duration-300"
    :class="{
      '-translate-y-[30%] opacity-0 -z-10': !isActive,
      'translate-y-0 opacity-100 z-10': isActive,
    }"
  >
    <ul class="flex flex-col gap-2 font-semibold p-4">
      <li>Strona główna</li>
      <li>O mnie</li>
      <li>Oferta</li>
      <li>Rezerwacja wizyty</li>
      <li>Kontakt</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()
</script>

<style scoped></style>
