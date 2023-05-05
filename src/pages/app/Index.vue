
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-2 bg-white mb-4 d-flex align-items-center justify-content-between">
      <h2>Hi {{ authUser.firstname }} 👍</h2>
      <span>
        <img :src=" authUser.profile_pic " alt="Profile image " />
      </span>
    </div>

    <div class="hero d-flex align-items-center justify-content-between">
      <div class="text w-2/3">
        <span>Start a quiz or challenge a friend?!</span>
        <p>Be a part of an ongoing quiz competition or start a quiz</p>
      </div>
      <div class="image w-1/3">
        <img src="/images/pencil-dynamic-color.png" class="image2" alt="" />
        <span></span>
      </div>
    </div>


    <!-- couses -->
    <section>
      <div class="title">
        <span class="text-sm">Courses</span>
        <a class="text-lg mx-2" href="" @click.prevent="$router.push({name: 'app-courses'})">View All</a>
      </div>

      <div class="progress-container position-relative p-4">
        <h5 class="text-white">Expert level</h5>
        <h3 class="text-white">Intro to cyber security</h3>
       
      
        <p class="text-white">
          Number od Lessons : <span class="fw-bold">10 lessons</span>
        </p>
        <span>
          <p>ongoing</p>
        </span>
      </div>
    </section>

    <!-- ongoing course -->
    <section>

      <div class="title">
        <span class="text-xs">Recent Lessons</span>
        <a class="text-lg mx-2" href="" @click.prevent="$router.push({name: 'app-lessons'})">View All</a>
      </div>
      
      <LessonListComponent list="top" limit="5"></LessonListComponent>

    </section>


  </div>
</template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
  name: 'app-home'
 
</route>

<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '../../store/auth';
export default {
  data(){
    return{
      authUser: {}
    }
  },
  mounted(){
    this.authUser = useAuthStore().authUser

    console.log(this.authUser)
  }
}
</script>

