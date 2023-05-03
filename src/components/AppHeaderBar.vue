
<template>
   <div class="heading fixed-top px-4 py-2 bg-white mb-4 d-flex align-items-center justify-content-between">
      <!-- <button class="btn btn-light" @click.prevent="$router.back()">
        <i class="fa-solid fa-arrow-left"><em class="ml-2">Back</em></i>
      </button> -->

        <div class="cyber-icon">
            <a href="" @click.prevent="$router.back()"><i class="fa-solid fa-arrow-left"></i></a>
        </div>
        
      <span>
        <img :src=" authUser.profile_pic " alt="Profile image " />
      </span>
    </div>
</template>

<script lang="ts">
import { useAuthStore } from '../store/auth';
export default {

    props: ['title'],
    data(){
        return{
        authUser: {}
        }
    },
    mounted(){
        this.authUser = useAuthStore().authUser
    }
}
</script>
