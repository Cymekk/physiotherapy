import type { FunctionalComponent } from 'vue'

export interface OfferCard {
  title: string
  icon: FunctionalComponent
  description: string
}

export interface Profile {
  id?: number
  name: string | null
  surname: string | null
  email?: string | null
  userID?: string | null
  phoneNumber: number | null
}

export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  email: string
  password: string
  repeatedPassword: string
}

export interface ProfileDetails {
  name: string
  surname: string
  phoneNumber: number | string
}
