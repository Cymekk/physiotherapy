<template>
  <div class="flex h-[100svh] items-center justify-center p-2">
    <div class="bg-orange-300 px-2 rounded w-full flex flex-col">
      <h2 class="my-[12px] text-center text-[24px] font-semibold">{{ title }}</h2>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped></style>
