
<template>
  <div class="">

    <div class="row w-full mt-5 align-items-center">
      <div class="col-1 ">
        <button class="btn btn-primary" @click.prevent="$router.back()">
          <i class="fa-solid fa-arrow-left" >Back</i>
        </button>
      </div>

      <div class="col-11">
        <div class=" container-fluid d-flex flex-column align-items-center justify-content-center">
          <img src="/images/zinnlogo.png" class="w-40" />
        </div>
      </div>

    </div>

    <div class="authform signin-authform authformScale">
      <h1 class="my-4">Sign in</h1>
      <p class="mb-4">Signin to your account</p>
      <form @submit.prevent="loginUser()" class="form d-flex flex-column align-items-start justify-content-between" aria-hidden="true">

        <div class="d-flex w-100 input-field">
          <input v-model="payload.email" type="email" class="form-control mb-4" id="email" placeholder="Email address" required />
        </div>

        <div class="w-100 input-field position-relative">
          <input v-model="payload.password" type="password" class="form-control" id="password" placeholder="Password" required />
          <span class="eye" onclick="myFunction()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="d-flex align-self-end my-5">
          <p class="">Don't have an account ?</p>
          <router-link class="btn text-dark"  to="/signup">Signup</router-link>
        </div>

        <button type="submit" class="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: 'guest'
    tomiddleware: ['guest']
    requiresAuth: false
</route>


<script lang="ts">
// @ts-nocheck
import { AuthService } from '../services';
import { useAuthStore } from '~/store/auth';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  
  data(){
    return {
      payload: {}
    }
  },
  mounted() { },
  methods: {
    loginUser(){

      try {
          AuthService.loginUser(this.payload).then((res)=>{
              const authStore = useAuthStore();
              authStore.setAuthUser(res.data.user)
              authStore.setToken(res.data.token)
              this.$router.push('/zinn') // user choose between interactive mode or none interactive mode
             
          }).catch( (err) =>{
            toast(err.data.message, {
              autoClose: 4000,
              hideProgressBar: true
            }); // ToastOptions
          })  
      } catch (error) {
          
      }

    }
  }
}
</script>