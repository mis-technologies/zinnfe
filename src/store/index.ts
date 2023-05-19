import { defineStore } from 'pinia';
import { useAuthStore } from './auth';



export const useEventStore = defineStore('eventStore', {
  state: (): {
    isBusy: Boolean,
    hasAlert: Boolean,
    newChallenge: any
  } => ({
      isBusy: false,
      hasAlert: false,
      newChallenge: {}
  }),

    
  persist: {
    paths: ['hasAlert', 'isBusy'],
  },


  actions: {
    async setAlert(state) {
      this.hasAlert = state
    },

    async setNewChallenge(payload: any) {
      this.newChallenge = payload
    },
    async setIsBusy(state: Boolean) {
      this.isBusy = state
    },

  },





});


export {useAuthStore}