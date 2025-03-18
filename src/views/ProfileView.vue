<template>
  <nav class="relative p-2">
    <div class="flex justify-end">
      <div class="bg-orange-400 rounded p-2">
        <Menu color="black" />
      </div>
    </div>
  </nav>
  <div v-if="profiles.isProfileLoaded">Cześć {{ profiles.user?.name }}</div>
  <InsertProfileDetailsComponent v-if="profiles.isProfileLoaded && !profiles.user?.name" />
</template>

<script setup lang="ts">
import InsertProfileDetailsComponent from '@/components/InsertProfileDetailsComponent.vue'
import { useProfilesStore } from '@/stores/profiles'
import { Menu } from 'lucide-vue-next'

const profiles = useProfilesStore()
</script>

<style scoped></style>
