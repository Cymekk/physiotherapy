<template>
  <LoginBoxComponent title="Rejestracja">
    <template #form>
      <form @submit.prevent="registerUser()" class="flex flex-col gap-[12px]">
        <input type="text" class="bg-white p-2 rounded" placeholder="Email" v-model="form.email" />
        <input
          type="password"
          class="bg-white p-2 rounded"
          placeholder="Hasło"
          v-model="form.password"
        />
        <input
          type="password"
          class="bg-white p-2 rounded"
          placeholder="Powtórz hasło"
          v-model="form.repeatedPassword"
        />
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
import { reactive } from 'vue'
import { useProfilesStore } from '@/stores/profiles'

const profiles = useProfilesStore()

const form = reactive({
  email: '',
  password: '',
  repeatedPassword: '',
})

const registerUser = () => {
  if (form.email !== '' && form.password === form.repeatedPassword) {
    profiles.registerUser(form.email, form.password)
  }
}
</script>
