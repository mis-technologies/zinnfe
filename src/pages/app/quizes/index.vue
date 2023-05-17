
<template>
  <div class="home-container position-relative">
    <AppHeaderBar title="Let’s play" class="bg-white"></AppHeaderBar>

   
    <div class="hero d-flex top-10 align-items-center justify-content-between position-relative" id="quiz-section2" @click="$router.push({name: 'app-challenge-users'})">
      <div class="quiz-text">
        <h2 class="text-white">Challenge a friend</h2>
        <p class="text-white fw-light fs-3">
          Participate in challenges with other users.
        </p>
        <button @click="$router.push({name: 'app-challenge-users'})" class="btn rounded-pill px-4 text-primary bg-white">
          Find users
        </button>
      </div>
      <div class="image">
        <!-- <img src="/images/Educational Folder.png" alt="" /> -->
      </div>
    </div>

    <div v-for="level in quiz_levels" class="hero d-flex justify-content-between position-relative" id="quiz-section3" @click="$router.push({name: 'app-quiz', params: {level: level.name} })">
      <div class="quiz-text d-flex flex-column align-items-start">
        <h2 class="text-white">{{ level.name }} quiz</h2>
        <span class="border rounded mt-4">
          <i class="fa-solid fa-play text-light fs-3 p-3"></i>
        </span>
      </div>
      <div class="image d-flex flex-row-reverse">
        <img src="/images/Book.png" class="w-20" alt="" />
      </div>
    </div>

  


  </div>
</template>


<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
  name: app-quizes
</route>


<script lang="ts">
// @ts-nocheck
import { QuizService } from '/@/services';

export default {
  
  data(){
    return {
      quiz_levels: []
    }
  },
  mounted() {
    this.getQuizLevels()
   },
  methods: {
    getQuizLevels(){

      try {
        QuizService.getQuizLevels().then((res)=>{
           this.quiz_levels = res.data
             
          }).catch( (err) =>{
              console.log(err)
              // useState('isBusy').value = false;
          })  
      } catch (error) {
          // $toast(error);
          // useState('isBusy').value = false;
      }

    }
  }
}
</script>