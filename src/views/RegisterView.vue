<template>
  <LoginBoxComponent title="Rejestracja">
    <template #form>
      <form @submit.prevent="registerUser()" class="flex flex-col gap-[12px]">
        <div class="flex flex-col">
          <input
            type="text"
            class="bg-white p-2 rounded"
            placeholder="Email"
            v-model="form.email"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.email,
            }"
            ref="emailInput"
          />
          <div v-if="errors?.email" class="text-red-600 font-semibold">
            <span v-for="(error, index) in errors?.email?._errors" :key="index" class="block">{{
              error
            }}</span>
          </div>
        </div>

        <div class="flex flex-col">
          <input
            type="password"
            class="bg-white p-2 rounded"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.password || errors?.repeatedPassword,
            }"
            placeholder="Hasło"
            v-model="form.password"
          />
          <div v-if="errors?.password" class="text-red-600 font-semibold">
            <span v-for="(error, index) in errors?.password?._errors" :key="index" class="block">{{
              error
            }}</span>
          </div>
        </div>

        <div class="flex flex-col">
          <input
            type="password"
            class="bg-white p-2 rounded"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.password || errors?.repeatedPassword,
            }"
            placeholder="Powtórz hasło"
            v-model="form.repeatedPassword"
          />
          <div v-if="errors?.repeatedPassword" class="text-red-600 font-semibold">
            <span
              v-for="(error, index) in errors?.repeatedPassword?._errors"
              :key="index"
              class="block"
              >{{ error }}</span
            >
          </div>
        </div>
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
//imports
import LoginBoxComponent from '@/components/LoginBoxComponent.vue'
import { onMounted, ref } from 'vue'
import { useProfilesStore } from '@/stores/profiles'
import type { RegisterForm } from '@/types/types'
import { z } from 'zod'

//variable for email input
const emailInput = ref<HTMLInputElement | null>(null)

//store
const profiles = useProfilesStore()

//form variable
const form = ref<RegisterForm>({
  email: '',
  password: '',
  repeatedPassword: '',
})

//validation schema
const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Niepoprawny adres email' })
      .nonempty({ message: 'Pole email jest wymagane' }),
    password: z
      .string()
      .min(5, { message: 'Pole hasło powinno zawierać conajmniej 5 znaków' })
      .nonempty({ message: 'To pole jest wymagane' }),
    repeatedPassword: z
      .string()
      .min(5, { message: 'Pole powtórz hasło powinno zawierać conajmniej 5 znaków' })
      .nonempty({ message: 'To pole jest wymagane' }),
  })
  .superRefine(({ repeatedPassword, password }, ctx) => {
    if (repeatedPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Hasła nie są takie same',
        path: ['repeatedPassword'],
      })
    }
  })

type formSchema = z.infer<typeof formSchema>

//variable for errors
const errors = ref<z.ZodFormattedError<formSchema> | null>(null)

//function for register new user
const registerUser = () => {
  const validForm = formSchema.safeParse(form.value)
  if (!validForm.success) {
    errors.value = validForm.error.format()
  } else {
    errors.value = null
    profiles.loginUser(form.value)
  }
}

//focusing first input onMounted
onMounted(() => {
  emailInput.value?.focus()
})
</script>
