<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-2">
    <div class="bg-orange-200 p-2 rounded">
      <p class="text-center">Prosze uzupełnić swoje dane kontaktowe przy pierwszym logowaniu</p>
      <form @submit.prevent="submitForm()" class="flex flex-col gap-2 mt-2">
        <div class="flex flex-col">
          <input
            type="text"
            placeholder="Imie"
            class="bg-white rounded p-2"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.name,
            }"
            ref="nameInput"
            v-model="formHandler.name"
          />

          <div v-if="errors?.name" class="text-red-600 font-semibold">
            <span v-for="(error, index) in errors?.name?._errors" :key="index" class="block">{{
              error
            }}</span>
          </div>
        </div>

        <div class="flex flex-col">
          <input
            type="text"
            placeholder="Nazwisko"
            class="bg-white rounded p-2"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.surname,
            }"
            v-model="formHandler.surname"
          />
          <div v-if="errors?.surname" class="text-red-600 font-semibold">
            <span v-for="(error, index) in errors?.surname?._errors" :key="index" class="block">{{
              error
            }}</span>
          </div>
        </div>

        <div class="flex flex-col">
          <input
            type="number"
            placeholder="Numer Telefonu"
            class="bg-white rounded p-2"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.phoneNumber,
            }"
            v-model="formHandler.phoneNumber"
          />

          <div v-if="errors?.phoneNumber" class="text-red-600 font-semibold">
            <span
              v-for="(error, index) in errors?.phoneNumber?._errors"
              :key="index"
              class="block"
              >{{ error }}</span
            >
          </div>
        </div>

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
//imports
import { useProfilesStore } from '@/stores/profiles'
import type { ProfileDetails } from '@/types/types'
import { onMounted, ref } from 'vue'
import { z } from 'zod'

//store
const profiles = useProfilesStore()

//variable for first input
const nameInput = ref<HTMLInputElement | null>(null)

//focusing first input onMounted
onMounted(() => {
  nameInput.value?.focus()
})

//validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Pole imie powinno mieć conajmniej 3 znaki' })
    .nonempty({ message: 'Pole imie jest wymagane' }),
  surname: z
    .string()
    .min(3, { message: 'Pole nazwisko powinno mieć conajmniej 3 znaki' })
    .nonempty({ message: 'Pole nazwisko jest wymagane' }),
  phoneNumber: z
    .string()
    .nonempty({ message: 'Pole Numer Telefonu jest wymagane' })
    .length(9, { message: 'Numer telefonu powinen składać się z 9 liczb' }),
})

type formSchema = z.infer<typeof formSchema>

//variable for errors
const errors = ref<z.ZodFormattedError<formSchema> | null>(null)

//variable for form
const formHandler = ref<ProfileDetails>({
  name: '',
  surname: '',
  phoneNumber: '',
})

//submiting form function
const submitForm = () => {
  formHandler.value.phoneNumber = formHandler.value.phoneNumber.toString()
  const validForm = formSchema.safeParse(formHandler.value)
  if (!validForm.success) {
    errors.value = validForm.error.format()
    console.log(validForm)
  } else {
    errors.value = null
    profiles.updateProfileData(formHandler.value)
  }
}
</script>

<style scoped></style>
