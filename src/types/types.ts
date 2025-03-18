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
