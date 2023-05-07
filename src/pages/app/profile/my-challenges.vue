
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-3 bg-white mb-4 d-flex align-items-center justify-content-between">
      <AppHeaderBar></AppHeaderBar>
      <span>
        <img src="/images/Image.png " alt="Profile image " />
      </span>
    </div>


    <!-- ongoing course -->
    <section class="my-20">
      <div class="title">
        <span class="text-sm">My Challenges</span>
      </div>
      <div class="row row-cols-2 row-cols-md-2 g-4">
        <div @click="$router.push({name: 'app-challenge-ready', query: {challengeId: challenge.id}})" v-for="challenge in challenges" class="col cursor-pointer">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img :src="challenge.user?.profile_pic" class="card-img-top w-25" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ challenge.user?.name }}</h5>
              <p class="card-text d-flex justify-content-between"><b>Duration</b>: {{ challenge.duration }}mins</p>
              <p class="card-text d-flex justify-content-between"><b>Level</b>: {{ challenge.level?.name }}</p>
              <p class="card-text d-flex justify-content-between"><b>Questions</b>: {{ challenge.quiz_session?.questions.length }}</p>
              <p class="card-text d-flex justify-content-between"><b>Date</b>: {{ challenge.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>
  
<route lang="yaml">
    meta:
      layout: 'app'
      tomiddleware: ['auth']
      requiresAuth: true
    name: 'app-profile-challenges'
   
  </route>
  
<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '/@/store';
import { QuizService } from '/@/services';

export default {
    data() {
        return {
            authUser: {},
            challenges: [],
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        QuizService.getChallenges().then(res => {
            this.challenges = res.data
            console.log(res.data)
            // this.courses = res.data
        }).catch(err => {
        })
    }
}
</script>
  
  