<template>
  <nav class="relative p-2 flex justify-between items-center bg-orange-300">
    <div class="rounded-full border-2 p-[2px]">
      <User />
    </div>

    <button
      class="pointer bg-orange-200 py-2 px-4 rounded font-semibold"
      @click="profiles.logoutUser()"
    >
      Wyloguj się
    </button>
  </nav>
  <main class="px-2 mt-[16px]">
    <div v-if="profiles.isProfileLoaded">
      <p class="text-xl">
        Cześć <span class="font-semibold">{{ profiles.user?.name }}</span>
      </p>
      <p>Najbliższa wizyta: <span class="font-semibold">31.03.205 16:00</span></p>
    </div>
    <div
      class="box mt-[16px] border rounded border-orange-200 p-2 bg-orange-300 flex flex-col items-center gap-[12px]"
    >
      <h2 class="title text-center text-xl">Zaplanuj kolejną wizytę</h2>
      <p>Kliknij w ten kafelek aby zaplanować kolejną wizytę w naszym gabinecie</p>
      <CalendarDays :size="80" />
    </div>
    <div
      class="box mt-[16px] border rounded border-orange-200 p-2 bg-orange-300 flex flex-col items-center gap-[12px]"
    >
      <h2 class="title text-center text-xl">Moje wizyty</h2>
      <p>
        Tutaj możesz zarządzać swoimi wizytami, mianowicie anulować swoją wizytę czy zostawić opinię
        po swojej ostatniej wizycie.
      </p>
      <CalendarCheck :size="80" />
    </div>
  </main>
  <InsertProfileDetailsComponent v-if="profiles.isProfileLoaded && !profiles.user?.name" />
</template>

<script setup lang="ts">
import InsertProfileDetailsComponent from '@/components/InsertProfileDetailsComponent.vue'
import { useProfilesStore } from '@/stores/profiles'
import { User, CalendarDays, CalendarCheck } from 'lucide-vue-next'

const profiles = useProfilesStore()
</script>

<style scoped></style>
