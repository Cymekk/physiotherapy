<template>
  <LoginBoxComponent title="Logowanie">
    <template #form>
      <form @submit.prevent="console.log('hejo')" class="flex flex-col gap-[12px]">
        <input type="text" class="bg-white p-2 rounded" placeholder="Login" />
        <input type="text" class="bg-white p-2 rounded" placeholder="Hasło" />
        <input
          type="submit"
          class="bg-orange-500 w-min mx-auto mb-[12px] py-2 px-4 rounded font-semibold"
          value="Zaloguj"
        />
      </form>

      <p class="mb-[12px]">
        Nie posiadasz konta? Stwórz je
        <RouterLink :to="{ name: 'register' }"
          ><span class="font-semibold underline underline-offset-2">tutaj</span></RouterLink
        >
      </p>
    </template>
  </LoginBoxComponent>
</template>

<script setup lang="ts">
import LoginBoxComponent from '@/components/LoginBoxComponent.vue'
</script>
