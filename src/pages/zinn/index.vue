
<template>
  <div class="container-wrapper next d-flex flex-column position-relative">
    <div class="container-header mb-4">
      <a href="index.html">
        <div class="cyber-icon">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </a>
    </div>
    <div class="container-body d-flex align-items-center justify-content-center flex-column w-100 mt-4">
      <div class="image-wrapper">
        <img src="images/Image.png">
      </div>
      <p class="text-center">
        Say hello to <span>ZINN</span>, your Ai buddy, <br> Welcome on board!
      </p>
      <hr>
      <div class="text-wrapper d-flex align-items-center justify-content-center">
        <span>Are you sure to go on short ride with zinn?</span>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="$router.push({name: 'zinn-get-to-know'})" style="width: 30%; padding: 0 10px; margin: 5px;" class="">Yes</button>
      <button @click="$router.push({name: 'app-home'})"  style="width: 30%; padding: 0 10px; margin: 5px;" class="" >No</button>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: 'zinn'
    tomiddleware: ['auth']
    requiresAuth: true
 
</route>

<script lang="ts">
import { useAuthStore } from '../../store/auth';
export default {
  data() {
    return {
      authUser: {}
    }
  },
  mounted() {
    this.authUser = useAuthStore().authUser
   
  }
}
</script>

