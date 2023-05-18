
<template>
    <div class="container-wrapper next d-flex flex-column position-relative">
        <div class="container-header mb-4">
            <a href="" @click.prevent="$router.back()">
                <div class="cyber-icon">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </a>
        </div>
        <div class="container-body d-flex align-items-center justify-content-center flex-column w-100 mt-4">
            <div class="image-wrapper">
                <img class="w-50" src="/images/zinnbot.png">
            </div>
            <p class="text-center px-1">
                Hi <b>{{ authUser.firstname }}</b>  - How about you take an introductory  course  ?
            </p>
            <hr>
            <div class="text-wrapper  text-center">
                <span>Course Title:</span>
                <p>{{ course.title }} </p>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button @click="startCourse()" class="btn btn-continue" >Continue</button>
        </div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'zinn-introduce-course'
</route>

<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '../../store/auth';
import { ContentService } from '/@/services';
export default {
    data() {
        return {
            authUser: {},
            selected_level: null,
            courses: [],
            course: {}

        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        this.selected_level = this.$route.query.level
        let level = this.$route.query.level
        ContentService.getCourses({level}).then(res => {
            this.courses = res.data
            this.course = res.data[0]
        }).catch(error => {
            console.error(error)
        })

    },
    methods: {
        //select answer
        startCourse(event: any) {
            this.$router.push({name: 'app-course', params: {id: this.course.id }})
        },
    }
}
</script>

