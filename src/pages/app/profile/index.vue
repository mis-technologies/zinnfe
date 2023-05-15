
<template>
    <div class="trophy-container position-relative" session_id="177">
        <div class="trophy-heading__text d-flex align-items-center justify-content-center text-light flex-column"><span
                class="fs-1 fw-lighter">{{ authUser.name }}</span></div>
        <div class="trophy-content"><img :src="authUser.profile_pic" class="w-50 mx-auto rounded-pill">
            <div class="trophy-content__details px-5 py-4">
                <p class="text-center text-light fs-1 fw-bold">Statistics</p>
                <div class="description my-2"><span class="d-flex justify-content-between text-light">
                        <p class="fs-4 fw-bold">Total Points</p>
                        <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ user.points }}</p>
                    </span></div>

                <div class="description my-2"><span class="d-flex justify-content-between text-light">
                        <p class="fs-4 fw-bold">Level</p>
                        <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ user?.level?.name }}</p>
                    </span></div>
            </div>
            <a @click="$router.push({name: 'app-profile-progress'})" class="btn w-full border text-white fw-bold fs-2 rounded my-2 py-2">View Progress</a>
            <a @click="$router.push({name: 'app-profile-challenges'})" class="btn w-full border text-white fw-bold fs-2 rounded my-2 py-2">View Challenges</a>
            <!-- <a class="btn w-full border text-white fw-bold fs-2 rounded my-2 py-2">Notifications</a> -->

            <hr class="border my-5">
            <a @click="$router.push({name: 'app-change-password'})" class="btn w-full border text-white fw-bold fs-2 rounded my-2 py-2">Change Password</a>
        </div>
    </div>
</template>
  
<route lang="yaml">
    meta:
      layout: 'app'
      tomiddleware: ['auth']
      requiresAuth: true
    name: 'app-profile'
   
  </route>
  
<script lang="ts">
// @ts-nocheck
import { UserService } from '/@/services';
import { useAuthStore } from '/@/store';
export default {
    data() {
        return {
            authUser: {},
            user: {}
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        UserService.getMe().then(res => {
            this.user = res.data
        })
    }
}
</script>
  
  