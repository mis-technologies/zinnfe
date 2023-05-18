
<template>
    <div class="beginnersQuiz d-flex justify-content-between" style="height: 85vh">
        <AppHeaderBar></AppHeaderBar>
        <div class="d-flex justify-content-between flex-column">
            <div class="d-flex align-items-start justify-content-between flex-column">
               

                <div class="start-section__body">
                    <img src="/images/umbrella-iso-color.png" class="w-100" />
                    <div class="description mt-5">
                        <h2 class="text-lxight fs-1 underline my-2 fw-bolder">{{ lesson.title }}</h2>
                        <p class="text-light text-start fs-2">
                            Do you feel confident? Answer questions from  {{ lesson.title }}
                        </p>
                    </div>
                </div>
            </div>
            <button @click="startQuizSession() " class="btn border btn-light text-primary fw-bold fs-2 rounded outline-0 py-4">
                Start 
            </button>
            
        </div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'app'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-lesson-quiz'

 
</route>


<script lang="ts">
// @ts-nocheck
import { ContentService } from '/@/services'


export default {
  
  data(){
    return {
      quiz_levels: [],
      lesson: {}
    }
  },
  mounted() {

        let lessonId = this.$route.params.id
        ContentService.getLesson(lessonId).then(res => {
            console.log(res)
            this.lesson = res.data
        }).catch(err => {
            console.error(err)
        })
    
   },
  methods: {
    startQuizSession(){
     this.$router.push({name: 'lesson-quiz-session', query: {lesson_id: this.lesson.id }})
    }
  }
}
</script>