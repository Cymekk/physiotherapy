<template>
  <section id="offer" class="p-2">
    <div class="wrapper section-border">
      <h2 class="section-title">Oferta</h2>
      <p>
        W moim gabinecie znajdziesz profesjonalną pomoc w zakresie fizjoterapii, rehabilitacji i
        terapii bólu. Każda terapia jest dostosowana indywidualnie do Twoich potrzeb, aby zapewnić
        skuteczne i trwałe efekty.
      </p>
      <p class="font-semibold my-[12px] text-[18px]">Zakres usług</p>
      <OfferCardComponent v-for="(card, index) in offerCards" :key="index" :card="card" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { OfferCard } from '@/types/types'
import OfferCardComponent from './OfferCardComponent.vue'

const offerCards = ref<OfferCard[]>([
  {
    title: 'Terapia manualna',
    icon: 'Hand',
    description: 'Terapia manualna',
  },
  {
    title: 'Rehabilitacja pourazowa',
    icon: 'Bike',
    description: 'powrót do sprawności po kontuzjach i operacjach',
  },
  {
    title: 'Masaż leczniczy',
    icon: 'Cross',
    description: 'ulga w bólu i poprawa krążenia',
  },
  {
    title: 'Kinesiotaping',
    icon: 'Bandage',
    description: 'wsparcie dla mięśni i stawów',
  },
  {
    title: 'Ćwiczenia rehabilitacyjne',
    icon: 'Dumbell',
    description: 'indywidualne plany terapii ruchowej',
  },
])
</script>

<style scoped></style>
