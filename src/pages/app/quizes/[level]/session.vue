
<template>
    <QuizSessionComponent level="level" quiz_id="quiz_id" ></QuizSessionComponent>
</template>


<script lang="ts">
// @ts-nocheck
    export default {

        data(){
            return{
                quiz_id: this.$route.query.quiz_id,
                level: this.$route.params.level,
            }
        },
        methods: {}
    }
</script>

<route lang="yaml">
    meta:
        layout: 'app'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'quiz-session'

 
</route>