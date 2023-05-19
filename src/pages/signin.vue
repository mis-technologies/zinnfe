
<template>
  <div id="busy" class="">

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
      <form  @submit.prevent="loginUser()" class="form d-flex flex-column align-items-start justify-content-between" aria-hidden="true"  autocomplete="none" >

        <div class="d-flex w-100 input-field">
          <input v-model="payload.email" type="email" class="form-control mb-4" id="email" placeholder="Email address" required role="presentation" autocomplete="none"  />
        </div>

        <div class="w-100 input-field position-relative">
          <input v-model="payload.password" type="password" class="form-control" id="password" placeholder="Password" role="presentation" autocomplete="none"  required />
          <span class="eye" @click="viewPassword()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="d-flex justify-itmes-between my-5">
          <p class="">Don't have an account ?</p>
          <router-link class="btn text-dark"  to="/signup">Signup</router-link>
        </div>
        <div>
          <router-link class="btn my-4 text-dark"  to="/forgot-password">Forgot Password ?</router-link>
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
  name: 'signin'
</route>


<script lang="ts">
// @ts-nocheck
import { AuthService } from '../services';
import { useAuthStore } from '~/store/auth';
import { useEventStore } from '../store';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  
  data(){
    return {
      payload: {}
    }
  },
  mounted() {},
  methods: {
    loginUser(){

      window.$.busyLoadFull('show');
      AuthService.loginUser(this.payload).then((res)=>{
          const authStore = useAuthStore();
          authStore.setAuthUser(res.data.user)
          authStore.setToken(res.data.token)
          
          window.$.busyLoadFull('hide');
          this.$router.push('/zinn') // user choose between interactive mode or none interactive mode
      }).catch( (err) =>{
        window.$.busyLoadFull('hide');
        toast(err.data.message, {
          autoClose: 4000,
          hideProgressBar: true
        }); // ToastOptions
      })  
     
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