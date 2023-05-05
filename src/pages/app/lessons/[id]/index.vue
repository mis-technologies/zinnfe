
<template>
    <div class="home-container position-relative">
       <LessonComponent :lesson_id="lesson_id" ></LessonComponent>
    </div>
</template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
  name: 'app-lesson-detail'
 
</route>

<script lang="ts">
// @ts-nocheck
export default {
    data() {
        return {
            lesson_id: this.$route.params.id
        }
    },
    mounted() {
        let lessonId =  this.$route.params.id
        console.log('lessonId', lessonId);
    },
    methods: {
        loginUser() {}
    }

}
</script>