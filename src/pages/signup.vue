
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
       
        <div class="d-flex w-100 input-field">
          <input v-model="payload.email" type="email" class="form-control mb-4" id="email" placeholder="Email address" role="presentation" autocomplete="off"  required />
        </div>

        <div class="d-flex w-100 input-field">
          <input  v-model="payload.firstname" type="text" class="form-control mb-4" id="firstname" placeholder="Firstname" role="presentation" autocomplete="off"  required />
        </div>

        <div class="d-flex w-100 input-field">
          <input  v-model="payload.lastname" type="text" class="form-control mb-4" id="lastname" placeholder="Lastname" role="presentation" autocomplete="off" required />
        </div>
        
        <div class="w-100 input-field position-relative">
          <input  v-model="payload.password" type="password" class="form-control" id="password" placeholder="Password" role="presentation" autocomplete="off"  required />
          <span class="eye" @click="viewPassword()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="w-100 input-field position-relative my-4">
          <input  v-model="payload.password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Password" role="presentation" autocomplete="off"  required />
          <span class="eye" @click="viewConfirmPassword()">
            <i id="eye3" class="fa-regular fa-eye"></i>
            <i id="eye4" class="fa-regular fa-eye-slash"></i>
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
    registerUser(){

      window.$.busyLoadFull('show');
      AuthService.registerUser(this.payload).then((res)=>{
          const authStore = useAuthStore();
          authStore.setAuthUser(res.data.user)
          authStore.setToken(res.data.token)
          window.$.busyLoadFull('hide');
          this.$router.push('/zinn') // user choose between interactive mode or none interactive mode
          
      }).catch( (err) =>{
          window.$.busyLoadFull('hide');
          Array(err.data.errors).forEach(element => {
            let errors = Object.values(element)
            errors.forEach(error => {
                toast(error, {
                autoClose: 10000,
                hideProgressBar: true
              }); 
            });
          
          });
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
    },

    viewConfirmPassword() {
      var inPut = document.getElementById("password_confirmation");
      var hide1 = document.getElementById("eye3");
      var hide2 = document.getElementById("eye4");

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