
<template>
    <div class="running-course">
            
            <div v-for="lesson in lessons" @click="$router.push({name: 'app-lesson-detail', params: {id: lesson.id}})" class="item-1 d-flex align-items-center border rounded my-4">
                <div class="image"><img :src="lesson.cover_image" class="d-block h-20" alt="..."></div>
                <div class="text p-4">
                    <h2>{{ lesson.title }}</h2>
                    <div class="d-flex align-items-center justify-content-between"></div>
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

