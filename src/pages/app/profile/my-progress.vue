
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-3 bg-white mb-4 d-flex align-items-center justify-content-between">
      <AppHeaderBar></AppHeaderBar>
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
        <div @click="$router.push({name: 'app-course', params: {id: course.id}})" v-for="course in courses" class="col cursor-pointer">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img :src="course.cover_image" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ course.title }}</h5>
              <p class="card-text">{{ course.completion_percentage }} % Completion</p>
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
    name: 'app-profile-progress'
   
  </route>
  
<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '/@/store';
import { ContentService } from '../../../services';
import { UserService } from '/@/services';

export default {
    data() {
        return {
            authUser: {},
            courses: [],
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser


        UserService.getMe().then(res => {
            this.courses = res.data.course_progress

            console.log(res.data.course_progress)
            // this.courses = res.data
        }).catch(err => {
        })
    }
}
</script>
  
  