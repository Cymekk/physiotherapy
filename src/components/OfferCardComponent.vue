<template>
  <div
    class="flex flex-col gap-[12px] items-center border border-orange-200 rounded-2xl p-2"
    :class="{ 'bg-orange-200': cardIndex % 2 === 0 }"
  >
    <p class="text-center">{{ card.title }}</p>
    <component :is="iconsMap[index]" v-if="iconsMap[index]" class="w-[50px] h-[60px]" />
    <p class="text-center">{{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { OfferCard } from '@/types/types'
import { Bandage, Bike, Cross, Dumbbell, Hand } from 'lucide-vue-next'

const props = defineProps<{
  card: OfferCard
  cardIndex: number
}>()

const iconsMap = [Bandage, Bike, Cross, Dumbbell, Hand]
const index = iconsMap.indexOf(props.card.icon)
</script>

<style scoped></style>
