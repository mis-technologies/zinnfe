
<template>
    <QuizSessionComponent :lesson_id="lesson_id" ></QuizSessionComponent>
</template>


<script lang="ts">
// @ts-nocheck
    export default {

        data(){
            return{
                quiz_id: this.$route.query.quiz_id,
                lesson_id: this.$route.params.id,
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
    name: 'lesson-quiz-session'

 
</route>