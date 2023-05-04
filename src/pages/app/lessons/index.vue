
<template>
  <div class="home-container position-relative">
    <AppHeaderBar></AppHeaderBar>

    <div class="hero d-flex align-items-center justify-content-between">
      <div class="text w-2/3">
        <span>Lessons from all courses</span>
        <p>Select any of the lessons below</p>
      </div>
      <div class="image w-1/3">
        <img src="/images/pencil-dynamic-color.png" class="image2" alt="" />
        <span></span>
      </div>
    </div>




    <!-- ongoing course -->
    <section>

      <div class="title">
        <span class="text-sm">All Lessons</span>
      </div>

      <LessonListComponent list="top" ></LessonListComponent>

  </section>


</div></template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
 
</route>