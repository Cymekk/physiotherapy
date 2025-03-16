<template>
  <NavComponent />
  <HeaderComponent />
  <AboutMeComponent />
  <OfferComponent />
</template>

<script setup lang="ts">
import AboutMeComponent from '@/components/AboutMeComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import OfferComponent from '@/components/OfferComponent.vue'

import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('cards').select()
  instruments.value = data
  console.log(data)
}

onMounted(() => {
  getInstruments()
})
</script>

<style scoped></style>
