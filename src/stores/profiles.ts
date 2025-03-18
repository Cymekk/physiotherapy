import type { Profile } from './../types/types'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useProfilesStore = defineStore('profiles', () => {
  const router = useRouter()
  const user = ref<Profile>()
  const isProfileLoaded = ref(true)

  const registerUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      if (error) throw error
      insertData(data.user.email, data.user.id)
      router.push({ name: 'profile' })
      getDataByID(data.user.id)
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
      if (error) throw error
      router.push({ name: 'profile' })
      getDataByID(data.user.id)
    } catch (error) {
      console.log(error)
    }
  }

  const insertData = async (email: string, id: string) => {
    try {
      const { error } = await supabase.from('profiles').insert({ email, userID: id })
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  const updateProfileData = async (userDetails: Profile) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: user.value?.id,
          name: userDetails.name,
          surname: userDetails.surname,
          phoneNumber: userDetails.phoneNumber,
        })
        .select()
      console.log(data)
      if (error) throw error
      getDataByID(user.value?.userID as string)
    } catch (error) {
      console.log(error)
    }
  }

  const getDataByID = async (id: string) => {
    try {
      isProfileLoaded.value = false
      const { data, error } = await supabase.from('profiles').select().eq('userID', id)
      if (error) throw error
      user.value = { ...data[0] }
    } catch (error) {
      console.log(error)
    } finally {
      isProfileLoaded.value = true
    }
  }

  return { registerUser, loginUser, getDataByID, user, isProfileLoaded, updateProfileData }
})
