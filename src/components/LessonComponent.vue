
<template>
     <AppHeaderBar class="bg-white" :title=" lesson.title "></AppHeaderBar>
    <div class="videowrapper position-relative mt-5 pt-5">
        <iframe :src="lesson.url" frameborder="0 " class="position-absolute" allowfullscreen></iframe>
    </div>
    <div class="text">
        <h2 class="fw-bold">Description</h2>
        <div class="d-flex align-items-center justify-content-between">
            {{ lesson.content }}
        </div>
        <div class="d-flex align-items-center gap-5">

        </div>
    </div>


    <!--  lesson quiz -->
    <div v-if="lesson.quiz" class="video-lessons mt-4">
        <div  class="hero d-flex justify-content-between position-relative" id="quiz-section3">
            <div  @click="$router.push({name: 'app-lesson-quiz', params: {id: lesson.id} })" class="quiz-text d-flex flex-column align-items-start">
                <h2 class="text-white">Lesson Quiz</h2>
                <span class="border rounded mt-4">
                    <i class="fa-solid fa-play text-light fs-3 p-3"></i>
                </span>
            </div>
            <div class="image d-flex flex-row-reverse">
                <img src="/images/Book.png" class="w-20" alt="" />
            </div>
        </div>

    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { ContentService } from '../services';

export default {

    props: ['lesson_id'],
    data() {
        return {
            lesson: {}
        }
    },
    mounted() {
        ContentService.getLesson(this.lesson_id).then(res => {
            console.log(res)
            this.lesson = res.data
        }).catch(err => {
            console.error(err)
        })
    },
    methods: {
       
    }

}
</script>

