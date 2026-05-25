import { defineStore } from "pinia";

export const useHomeStore = defineStore('home_store', () => {
  const message= 'hello world'
  
  return {
    // state
    message,

    // getters
    // actions
  }
})