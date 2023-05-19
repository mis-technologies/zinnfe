
<template>
  <div class="container-wrapper next d-flex flex-column position-relative">
    <div class="container-header mb-4">
      <a href="" @click.prevent="$router.back()">
        <div class="cyber-icon">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </a>
    </div>

    <div v-if="hasAlert">
      <div v-if="newChallenge">
        <div class="container-body d-flex align-items-center justify-content-center flex-column w-100 mt-4">
          <div class="image-wrapper">
            <img class="w-50" src="/images/zinnbot.png">
          </div>

          <p class="text-center">
              Hi <b>{{ authUser.firstname }}</b>! {{ newChallenge.message }}
          </p>
          <hr>
          <div class="text-wrapper  align-items-center justify-content-center">
            <p>Do you want to accept the challenge now ? </p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="$router.push({name: 'app-challenge-ready', query: {challengeId: newChallenge.challengeId}})" style="width: 30%; padding: 0 10px; margin: 5px;"
            class="">Accept</button>
          <button @click="$router.push({ name: 'app-home' })" style="width: 30%; padding: 0 10px; margin: 5px;"
            class="">Ignore</button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="container-body d-flex align-items-center justify-content-center flex-column w-100 mt-4">
        <div class="image-wrapper">
          <img class="w-50" src="/images/zinnbot.png">
        </div>

        <p class="text-center">
          Hi <b>{{ authUser.firstname }}</b>! Say hello to <span>ZINN</span>, your AI buddy, Welcome on board!
        </p>
        <hr>
        <div class="text-wrapper d-flex align-items-center justify-content-center">
          <p>Do you want to go on short ride with zinn?</p>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button @click="$router.push({ name: 'zinn-get-to-know' })" style="width: 30%; padding: 0 10px; margin: 5px;"
          class="">Yes</button>
        <button @click="$router.push({ name: 'app-home' })" style="width: 30%; padding: 0 10px; margin: 5px;"
          class="">No</button>
      </div>
    </div>


  </div>
</template>

<route lang="yaml">
  meta:
    layout: 'zinn'
    tomiddleware: ['auth']
    requiresAuth: true
  name: 'zinn'
    
 
</route>

<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '../../store/auth';
import { useEventStore } from '/@/store';
export default {
  data() {
    return {
      authUser: {},
      hasAlert: false,
      newChallenge: {}
    }
  },
  mounted() {
    this.authUser = useAuthStore().authUser
    this.hasAlert = useEventStore().hasAlert;
    this.newChallenge = useEventStore().newChallenge;
  },
  unmounted() {
    useEventStore().setAlert(false)
    useEventStore().setNewChallenge(null)
  }
}
</script>

