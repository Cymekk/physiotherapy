<template>
  <div>Lorem, ipsum dolor.{{ card.icon }}</div>
  <Bandage v-if="card.icon === 'Bandage'" />
  <Bike v-if="card.icon === 'Bike'" />
  <Cross v-if="card.icon === 'Cross'" />
  <Dumbbell v-if="card.icon === 'Dumbell'" />
  <Hand v-if="card.icon === 'Hand'" />
</template>

<script setup lang="ts">
import type { OfferCard } from '@/types/types'
import { Bandage, Bike, Cross, Dumbbell, Hand } from 'lucide-vue-next'

const props = defineProps<{
  card: OfferCard
}>()

console.log(props.card)
</script>

<style scoped></style>
