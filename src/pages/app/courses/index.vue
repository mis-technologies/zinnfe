
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-3 bg-white mb-4 d-flex align-items-center justify-content-between">
      <AppHeaderBar class="bg-white"></AppHeaderBar>
      <span>
        <img src="/images/Image.png " alt="Profile image " />
      </span>
    </div>



    <!-- ongoing course -->
    <section class="my-20">
      <div class="title">
        <span class="text-sm">All Courses</span>
      </div>

      <div class="row row-cols-2 row-cols-md-2 g-4">
        <div @click="viewCourse(course)" v-for="course in courses" class="col cursor-pointer">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img :src="course.cover_image" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ course.title }}</h5>
              <p class="card-text">{{ course.lesson_count }} Lessons</p>
      
              <i v-if="course.is_locked" class="fa-solid fa-lock fs-3 p-3 me-3"></i>
            
            </div>
          </div>
        </div>
      
      </div>
    </section>


  </div>
</template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
  name: 'app-courses'
 
</route>


<script lang="ts">
// @ts-nocheck

import { ContentService } from '../../../services';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {

    data() {
        return {
            courses: []
        }
    },
    mounted() {
        // let courseId = this.course_id ?? this.$route.params.id

        ContentService.getCourses().then(res => {
            this.courses = res.data
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    },
    methods: {
        loginUser() { },
        viewCourse(course) { 
          if(course.is_locked){
            toast('Course not unlocked', {
              autoClose: 10000,
              hideProgressBar: true
            }); 
            return false
          }
          this.$router.push({name: 'app-course', params: {id: course.id}})
        }
    }

}
</script>
