import type { FunctionalComponent } from 'vue'

export interface OfferCard {
  title: string
  icon: FunctionalComponent
  description: string
}

export interface Profile {
  id: number
  email: string
  name: string | null
  surname: string | null
}
