import { defineStore } from 'pinia';
export const useAuthStore = defineStore('useAuthStore', {
  state: (): {
    authUser: Object,
    isLoggedIn: Boolean,
    bearerToken: string
  } => ({
    authUser: {name: 'ds'},
    isLoggedIn: false,
    bearerToken: ''
  }),


  getters: {
    getAuthUser: state => state.authUser,
  },


  actions: {
    async logoutUser() {
      this.isLoggedIn = false
      this.authUser = {}
    },

    async setAuthUser(user: any) {
      try {
        this.authUser = user
      } catch (error) {
        console.log( error)
      }
    },

    async setToken(token: any) {
      try {
        this.isLoggedIn = true
        this.bearerToken = token
      } catch (error) {
        return error
      }
    },
  },


  persist: {
    beforeRestore: (ctx) => {
      console.log(`about to restore '${ctx.store.$id}'`)
    },

    afterRestore: (ctx) => {
      console.log(`just restored '${ctx.store.$id}'`)
    },

    paths: ['isLoggedIn', 'bearerToken'],
  },
});