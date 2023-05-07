
<template>
    <div class="home-container" style="height: 100vh">

          <!-- <div class="video-wrapper fixed-top px-4 pt-4 bg-white position-relative d-flex align-items-center">
              <div class="cyber-icon">
                  <a href="#" @click.prevent=" $router.back()" ><i class="fa-solid fa-arrow-left"></i></a>
              </div>
              <span>{{ course.title }}</span>
          </div> -->

          <AppHeaderBar class="bg-white" :title="course.title"></AppHeaderBar>


        
          <div class="text pt-20">
              <h2 class="fw-bold">Description</h2>
              <div></div>
              <div class="d-flex align-items-center gap-5">
                  <span> <i class="fa-solid fa-book-open"></i> {{ course.lesson_count }} lessons </span>
              </div>
          </div>
          
          <div class="video-lessons mt-4">
              <h2 class="fw-bold fs-1">Lessons</h2>
              <div class="links" style="overflow-y: scroll; height: 80%">
                  <a v-for="lesson in course.lessons" @click=" $router.push({name: 'app-lesson-detail', params: {id: lesson.id}}) " href="#" class="d-flex align-items-center gap-4 fs-2 nav-link my-3">
                      <div class="icon-wrapper position-relative">
                          <i class="fa-solid fa-play"></i>
                      </div>
                      <span>{{ lesson.title }}</span>
                  </a>
              </div>
          </div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'app'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-course'
</route>

<script lang="ts">
// @ts-nocheck
import { ContentService } from '../../../../services';
export default {

    data() {
        return {
            course: [],
            course_id: this.$route.params.id
        }
    },
    mounted() {
        ContentService.getCourse(this.course_id).then(res => {
            this.course = res.data
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        loginUser() { }
    }

}
</script>