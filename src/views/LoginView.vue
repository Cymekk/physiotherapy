<template>
  <LoginBoxComponent title="Logowanie">
    <template #form>
      <form
        @submit.prevent="profiles.loginUser(form.email, form.password)"
        class="flex flex-col gap-[12px]"
      >
        <input type="text" class="bg-white p-2 rounded" placeholder="Login" v-model="form.email" />
        <input
          type="password"
          class="bg-white p-2 rounded"
          placeholder="Hasło"
          v-model="form.password"
        />
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
import { reactive } from 'vue'
import { useProfilesStore } from '@/stores/profiles'

const profiles = useProfilesStore()

const form = reactive({
  email: '',
  password: '',
})
</script>
