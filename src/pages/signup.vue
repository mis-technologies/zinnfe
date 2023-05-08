
<template>
  <div class="">

    <div class="row w-full mt-5 align-items-center">
      <div class="col-1 ">

        <button class="btn btn-primary" @click.prevent="$router.back()">
          <i class="fa-solid fa-arrow-left">Back</i>
        </button>
      </div>

      <div class="col-11">
        <div class=" container-fluid d-flex flex-column align-items-center justify-content-center">
          <img src="/images/zinnlogo.png" class="w-40" />
        </div>
      </div>

    </div>

    <div class="authform signup-authform authformScale">
      <h1 class="my-4">Sign up</h1>
      <p class="mb-4">Create an account to get started with us</p>
      <form  @submit.prevent="registerUser()" class="form d-flex flex-column align-items-start justify-content-between" aria-hidden="true" autocomplete="off">
        <input autocomplete="false" name="hidden" type="text" style="display:none;"></input>
       
        <div class="d-flex w-100 input-field">
          <input v-model="payload.email" type="email" class="form-control mb-4" id="email" placeholder="Email address" required />
        </div>

        <div class="d-flex w-100 input-field">
          <input  v-model="payload.firstname" type="text" class="form-control mb-4" id="firstname" placeholder="Firstname" required />
        </div>

        <div class="d-flex w-100 input-field">
          <input  v-model="payload.lastname" type="text" class="form-control mb-4" id="lastname" placeholder="Lastname" required />
        </div>
        
        <div class="w-100 input-field position-relative">
          <input  v-model="payload.password" type="password" class="form-control" id="password" placeholder="Password" required />
          <span class="eye" onclick="myFunction()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="w-100 input-field position-relative my-4">
          <input  v-model="payload.password_confirmation" type="password" class="form-control" id="password" placeholder="Password" required />
          <span class="eye" onclick="myFunction()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="d-flex align-self-end my-5">
          <p class="">Already have an account</p>
          <router-link class="btn text-dark"  to="/signin">Signin</router-link>
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
    layout: guest
</route>


<script lang="ts">
// @ts-nocheck
import { AuthService } from '../services';
import { useAuthStore } from '~/store/auth';

export default {
  
  data(){
    return {
      payload: {}
    }
  },
  mounted() { },
  methods: {
    registerUser(){

      console.log(this.payload)
      try {
          AuthService.registerUser(this.payload).then((res)=>{
              const authStore = useAuthStore();
              authStore.setAuthUser(res.data.user)
              authStore.setToken(res.data.token)
              this.$router.push('/zinn') // user choose between interactive mode or none interactive mode
             
          }).catch( (err) =>{
              console.log(err)
          })  
      } catch (error) {
          
      }

    }
  }
}
</script>