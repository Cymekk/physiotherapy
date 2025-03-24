<template>
  <LoginBoxComponent title="Logowanie">
    <template #form>
      <form @submit.prevent="loginUser" class="flex flex-col gap-[12px]">
        <div class="flex flex-col">
          <input
            type="text"
            class="bg-white p-2 rounded"
            :class="{
              'border-2 border-red-400 placeholder-red-400 placeholder:font-semibold shadow-md shadow-red-400':
                errors?.email,
            }"
            placeholder="Login"
            v-model="form.email"
            ref="loginInput"
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
                errors?.password,
            }"
            placeholder="Hasło"
            v-model="form.password"
          />
          <div v-if="errors?.password" class="text-red-600 font-semibold">
            <span v-for="(error, index) in errors?.password?._errors" :key="index">
              {{ error }}
            </span>
          </div>
        </div>

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
//imports
import LoginBoxComponent from '@/components/LoginBoxComponent.vue'
import { onMounted, ref } from 'vue'
import { useProfilesStore } from '@/stores/profiles'
import { z } from 'zod'
import type { LoginForm } from '@/types/types'

//variable which store login input
const loginInput = ref<HTMLInputElement | null>(null)

//store
const profiles = useProfilesStore()

//schema for validation
const formSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Pole email jest wymagane' })
    .email({ message: 'Niepoprawny adres email' }),
  password: z.string().nonempty({ message: 'Pole hasło jest wymagane' }),
})

type formSchema = z.infer<typeof formSchema>

//variable for error
const errors = ref<z.ZodFormattedError<formSchema> | null>(null)

//form variable
const form = ref<LoginForm>({
  email: '',
  password: '',
})

//function for loging
const loginUser = () => {
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
  loginInput.value?.focus()
})
</script>
