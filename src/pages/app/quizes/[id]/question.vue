
<template>
    <QuestionComponent quiz_id="23" ></QuestionComponent>
</template>


<script lang="ts">
    export default {

        methods: {
            loginUser() {}
        }

    }
</script>

<route lang="yaml">
    meta:
        layout: 'app'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'quiz-question'

 
</route>