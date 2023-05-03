
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

      <div class="running-course">
        <div class="carousel-body d-flex flex-column gap-3">
          
          <div class="item-1 d-flex align-items-center border rounded my-2 p-2" @click="$router.push({name: 'app-lesson-detail', params: {id: 400} })">
            <div class="image"><img src="/images/Rectangle 3463364.png" class="d-block w-75" alt="..."></div>
            <div class="text">
              <h2>Cyber Security minefield</h2>
              <div class="d-flex align-items-center justify-content-between"></div>
            </div>
          </div>

         
        </div>
    </div>
  </section>


</div></template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
 
</route>