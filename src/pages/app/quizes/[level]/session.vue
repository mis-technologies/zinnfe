
<template>
    <QuizSessionComponent level="level" quiz_id="23" ></QuizSessionComponent>
</template>


<script lang="ts">
    export default {

        data(){
            return{
                'quiz_id': null,
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