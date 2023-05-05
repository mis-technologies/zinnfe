
<template>
    <div class="running-course">
        <div class="carousel-body d-flex flex-column gap-3">
            
            <div v-for="lesson in lessons" @click="$router.push({name: 'app-lesson-detail', params: {id: lesson.id}})" class="item-1 d-flex align-items-center border rounded my-2 p-2">
                <!-- <div class="image"><img src="/images/Rectangle 3463364.png" class="d-block w-75" alt="..."></div> -->
                <div class="text">
                    <h2>{{ lesson.title }}</h2>
                    <div class="d-flex align-items-center justify-content-between"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { ContentService } from '../services';
export default {

    props: ['course_id', 'list', 'limit'],
    data() {
        return {
            lessons: []
        }
    },
    mounted() {
        // let courseId = this.course_id ?? this.$route.params.id

        let query = {
            course_id: this.course_id
        }
        if(this.limit ){
            query.limit = this.limit
        }

        if(this.list ){
            query.list = this.list
        }
        

        ContentService.getLessons(query).then(res => {
            console.log(res)
            this.lessons = res.data
        }).catch(err => {
            console.log(err)
        })

    },
    methods: {
        loginUser() { }
    }

}
</script>

