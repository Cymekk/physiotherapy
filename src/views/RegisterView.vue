<template>
  <LoginBoxComponent title="Rejestracja">
    <template #form>
      <form @submit.prevent="console.log('hejo')" class="flex flex-col gap-[12px]">
        <input type="text" class="bg-white p-2 rounded" placeholder="Email" />
        <input type="text" class="bg-white p-2 rounded" placeholder="Hasło" />
        <input type="text" class="bg-white p-2 rounded" placeholder="Powtórz hasło" />
        <input
          type="submit"
          class="bg-orange-500 w-min mx-auto mb-[12px] py-2 px-4 rounded font-semibold"
          value="Utwórz konto"
        />
      </form>

      <p class="mb-[12px]">
        Posiadasz konto? Zaloguj sie
        <RouterLink :to="{ name: 'login' }"
          ><span class="font-semibold underline underline-offset-2">tutaj</span></RouterLink
        >
      </p>
    </template>
  </LoginBoxComponent>
</template>

<script setup lang="ts">
import LoginBoxComponent from '@/components/LoginBoxComponent.vue'
</script>
