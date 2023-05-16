
<template>
    <div class="home-container position-relative">
        <AppHeaderBar :title="'Change Password'" class="bg-white"></AppHeaderBar>
        <div class="authform signin-authform authformScale">
            <h1 class="my-4">Reset Password</h1>
            <p class="mb-4">Enter new password</p>
            <form @submit.prevent="resetPassword()" class="form d-flex flex-column align-items-start justify-content-between"
                aria-hidden="true" autocomplete="none">

                <div class="w-100 input-field position-relative">
                    <input v-model="form.code" type="text" class="form-control" id="password" placeholder="Verification Code"
                        role="presentation" autocomplete="off" required />
                </div>

                <div class="w-100 input-field position-relative my-4">
                    <input v-model="form.email" type="email" class="form-control"
                        id="email" placeholder="Email" role="presentation" autocomplete="off" required />
                </div>

                <div class="w-100 input-field position-relative my-4">
                    <input v-model="form.password" type="password" class="form-control"
                        id="password" placeholder="New Password Confirmation" role="presentation" autocomplete="off" required />
                    <span class="eye" @click="viewNewPasswordConfirm()">
                        <i id="eye3" class="fa-regular fa-eye"></i>
                        <i id="eye4" class="fa-regular fa-eye-slash"></i>
                    </span>
                </div>


                <div class="w-100 input-field position-relative my-4">
                    <input v-model="form.password_confirmation" type="password" class="form-control"
                        id="password_confirmation" placeholder="Confirm Password" role="presentation" autocomplete="off" required />
                    <span class="eye" @click="viewConfirmPassword()">
                        <i id="eye3" class="fa-regular fa-eye"></i>
                        <i id="eye4" class="fa-regular fa-eye-slash"></i>
                    </span>
                </div>


                <button type="submit" class="btn mt-10 btn-primary">
                    Submit
                </button>
            </form>
        </div>

    </div>
</template>
  
<route lang="yaml">
    meta:
        layout: 'app'
        tomiddleware: ['guest']
        requiresAuth: false
    name: 'reset-password'
   
  </route>
  
<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '/@/store';
import { AuthService } from '/@/services';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    data() {
        return {
            authUser: {},
            form: {
                email: this.$route.query.email
            }
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
    },
    methods: {
        resetPassword(){
            AuthService.resetPassword(this.form).then((res)=>{
                toast(res.message, {
                    autoClose: 4000,
                    hideProgressBar: true,
                }); // ToastOptions
              
               this.$router.push({name: 'signin', query: {email: this.form.email}}) // user choose between interactive mode or none interactive mode
               this.form = {}
            }).catch( (err) =>{
                toast(err.data.message, {
                    autoClose: 4000,
                    hideProgressBar: true,
                }); // Toast
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
        },
        viewNewPasswordConfirm() {
            var inPut = document.getElementById("new_password_confirmation");
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
  
  