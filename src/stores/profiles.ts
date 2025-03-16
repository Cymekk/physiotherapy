import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient.js'

export const useProfilesStore = defineStore('profiles', () => {
  const registerUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  const loginUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      console.log(data)

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }
  return { registerUser, loginUser }
})
