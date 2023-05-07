
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">
        <div class="start-section__header">
            <span>{{ 'Aaron'  }} vs {{ 'Dora' }}</span>
        </div>
        <div class="start-section__body">
            <img src="/images/target-iso-color.png" class="w-100">
            <div class="description">
                <p>
                     Click  start to  begin your quiz session, results will be on profile once your opponent completes the quiz as well
                </p>
            </div>
        </div>
        <button @click="startQuizSession()" class="btn btn-continue" >Start</button>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-challenge-ready'
</route>

<script lang="ts">
// @ts-nocheck

export default {
  
  data(){
    return {
      quiz_levels: []
    }
  },
  mounted() {
    
   },
  methods: {
    startQuizSession(){
     this.$router.push({name: 'quiz-session', params: {level: this.$route.query.level }})
    }
  }
}
</script>

