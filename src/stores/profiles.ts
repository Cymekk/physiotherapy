import type { LoginForm, Profile, ProfileDetails, RegisterForm } from './../types/types'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useProfilesStore = defineStore('profiles', () => {
  const router = useRouter()
  const user = ref<Profile>()
  const isProfileLoaded = ref(true)

  const registerUser = async (credentials: RegisterForm) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      })
      if (error) throw error
      insertData(data.user.email, data.user.id)
      router.push({ name: 'profile' })
      getDataByID(data.user.id)
    } catch (error) {
      console.log(error)
    }
  }

  const loginUser = async (credentials: LoginForm) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })
      if (error) throw 'Nieprawny login lub hasło'
      router.push({ name: 'profile' })
      getDataByID(data.user.id)
    } catch (error) {
      alert(error)
    }
  }

  const logoutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push({ name: 'home' })
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

  const updateProfileData = async (userDetails: Profile | ProfileDetails) => {
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

  return {
    registerUser,
    loginUser,
    getDataByID,
    user,
    isProfileLoaded,
    updateProfileData,
    logoutUser,
  }
})
