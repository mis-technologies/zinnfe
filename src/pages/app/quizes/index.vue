
<template>
  <div class="home-container position-relative">
    <AppHeaderBar></AppHeaderBar>

   

    
    <div class="hero d-flex top-10 align-items-center justify-content-between position-relative" id="quiz-section2"
      onclick="location.href='letsPlay.html';">
      <div class="quiz-text">
        <h2 class="text-white">Create Quiz</h2>
        <p class="text-white fw-light fs-3">
          Participate in challenges with other players.
        </p>
        <button class="btn rounded-pill px-4 text-primary bg-white">
          Find users
        </button>
      </div>
      <div class="image">
        <img src="/images/Educational Folder.png" alt="" />
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

    <!-- <div class="hero d-flex justify-content-between position-relative" id="quiz-section4"
      onclick="location.href='quiz.html';">
      <div class="quiz-text d-flex flex-column align-items-start">
        <h2 class="text-white">Intermediate's quiz</h2>
        <span class="border rounded mt-4">
          <i class="fa-solid fa-check text-light fs-3 p-3"></i>
        </span>
      </div>
      <div class="image d-flex flex-row-reverse">
        <img src="/images/Medical Book (1).png" class="w-20" alt="" />
      </div>
    </div>
    <div class="hero d-flex justify-content-between position-relative" id="quiz-section"
      onclick="location.href='quiz.html';">
      <div class="quiz-text d-flex flex-column align-items-start">
        <h2 class="text-white">Expert's quiz</h2>
        <span class="border rounded mt-4">
          <i class="fa-solid fa-lock text-light fs-3 p-3"></i>
        </span>
      </div>
      <div class="image d-flex flex-row-reverse">
        <img src="/images/Medical Book.png" class="w-20" alt="" />
      </div>
    </div> -->

    <!-- <div class="hero d-flex justify-content-between position-relative" id="quiz-section"
      onclick="location.href='quiz.html';">
      <div class="quiz-text d-flex flex-column align-items-start">
        <h2 class="text-white">Master's quiz</h2>
        <span class="border rounded mt-4">
          <i class="fa-solid fa-lock text-light fs-3 p-3"></i>
        </span>
      </div>
      <div class="image d-flex flex-row-reverse">
        <img src="/images/Bookmark Folder.png" class="w-20" style="rotate: -20deg" />
      </div>
    </div> -->


  </div>
</template>


<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
 
</route>


<script lang="ts">
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