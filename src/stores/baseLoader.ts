import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseLoaderStore = defineStore('baseLoader', () => {
  const isActive = ref(false)

  const show = () => (isActive.value = true)
  const hide = () => (isActive.value = false)

  return { show, hide, isActive }
})
