
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">
        <div class="start-section__header">
            <span>{{ ($route.query.level).charAt(0).toUpperCase() + ($route.query.level).slice(1)  }} level start!</span>
        </div>
        <div class="start-section__body">
            <img src="/images/target-iso-color.png" class="w-100">
            <div class="description">
                <p>
                    It can be hard to stay <span>motivated</span> so keep pushing!
                </p>
            </div>
        </div>
        <button @click="startQuizSession()" class="btn btn-continue" >continue</button>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'zinn-selected-level'
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

