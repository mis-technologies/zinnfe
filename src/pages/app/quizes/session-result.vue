
<template>
    <QuizSessionResultComponent  :session_id="session_id" ></QuizSessionResultComponent>
</template>


<script lang="ts">
    export default {

        data(){
            return{
                'quiz_id': null,
                level: this.$route.params.level,
                session_id: this.$route.query.session_id,
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
    name: 'quiz-session-result'

 
</route>