
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
      <h1 class="my-4">Forgot Password</h1>
      <p class="mb-4">Enter your email to reset your password</p>
      <form  @submit.prevent="loginUser()" class="form d-flex flex-column align-items-start justify-content-between" aria-hidden="true"  autocomplete="none" >

        <div class="d-flex w-100 input-field">
          <input v-model="form.email" type="email" class="form-control mb-4" id="email" placeholder="Email address" required role="presentation" autocomplete="none"  />
        </div>

      

        <div class="d-flex align-self-end my-5">
          <router-link class="btn text-dark"  to="/signup">Sigin</router-link>
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
    name: 'forgot-password'
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
      form: {}
    }
  },
  mounted() { },
  methods: {
    loginUser(){

      try {
          AuthService.forgotPassword(this.form).then((res)=>{
            console.log(res)
              this.$router.push({name: 'reset-password', query: {email: this.form.email}}) // user choose between interactive mode or none interactive mode
          }).catch( (err) =>{
            toast(err.data.message, {
              autoClose: 4000,
              hideProgressBar: true
            }); // ToastOptions
          })  
      } catch (error) {
          
      }

    },

    viewPassword() {
      var inPut = document.getElementById("password");
      var hide1 = document.getElementById("eye1");
      var hide2 = document.getElementById("eye2");

      if (inPut.type === "password") {
        inPut.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
      } else {
        inPut.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block";
      }
    }
  }
}
</script>