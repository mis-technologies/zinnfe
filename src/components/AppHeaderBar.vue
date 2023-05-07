
<template>
   <div class="heading fixed-top px-4 gap-5 py-2 mb-4 d-flex align-items-center justify-content-between" :class="class" >
        <div class="cyber-icon">
            <a href="" @click.prevent="$router.back()"><i class="fa-solid fa-arrow-left"></i></a>
        </div>
        
      <div v-if="title" class="h-10" style="overflow: hidden;">
       <p class="fs-3"> {{ title }}</p>
      </div>
      
      <img @click.prevent="$router.push({name: 'zinn'})" class="avatar h-10" src="/images/Image.png" alt="Profile image " />
    </div>
</template>

<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '../store/auth';
export default {

    props: ['title', 'class'],
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
