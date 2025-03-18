<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-2">
    <div class="bg-orange-200 p-2 rounded">
      <p class="text-center">Prosze uzupełnić swoje dane kontaktowe przy pierwszym logowaniu</p>
      <form @submit.prevent="submitForm()" class="flex flex-col gap-2 mt-2">
        <input
          type="text"
          placeholder="Imie"
          class="bg-white rounded p-2"
          v-model="formHandler.name"
        />
        <input
          type="text"
          placeholder="Nazwisko"
          class="bg-white rounded p-2"
          v-model="formHandler.surname"
        />
        <input
          type="number"
          placeholder="Numer Telefonu"
          class="bg-white rounded p-2"
          v-model="formHandler.phoneNumber"
        />
        <input
          type="submit"
          value="Zapisz"
          class="bg-orange-400 w-min py-2 px-4 rounded self-center"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProfilesStore } from '@/stores/profiles'
import { reactive } from 'vue'

const profiles = useProfilesStore()

const formHandler = reactive({
  name: '',
  surname: '',
  phoneNumber: 0,
})

const submitForm = () => {
  if (
    formHandler.name !== '' &&
    formHandler.surname !== '' &&
    formHandler.phoneNumber.toString().split('').length === 9
  )
    profiles.updateProfileData(formHandler)
}
</script>

<style scoped></style>
