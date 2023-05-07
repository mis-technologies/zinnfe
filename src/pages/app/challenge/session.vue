
<template>
    <QuizSessionComponent :session_id="session_id"  ></QuizSessionComponent>
</template>


<script lang="ts">
// @ts-nocheck
    export default {

        data(){
            return{
                session_id: this.$route.query.sessionId
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
    name: 'app-challenge-session'
</route>