
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-3 bg-white mb-4 d-flex align-items-center justify-content-between">
      <AppHeaderBar></AppHeaderBar>
      <span>
        <img src="/images/Image.png " alt="Profile image " />
      </span>
    </div>

    <!-- alert -->
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

    <!-- ongoing course -->
    <section class="my-20">
      <div class="title">
        <span class="text-sm">All Courses</span>
      </div>

      <div class="row row-cols-2 row-cols-md-2 g-4">
        <div class="col cursor-pointer">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img src="/images/Image (2).png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">Parformance analysis</h5>
              <p class="card-text">8 Lessons</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img src="/images/Image (1).png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">Parformance analysis</h5>
              <p class="card-text">12 Lesson</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img src="/images/Image (3).png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">Parformance analysis</h5>
              <p class="card-text">4 Lessons</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card d-flex align-items-center justify-content-between flex-column border-0 text-center">
            <img src="/images/Image (4).png" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">Parformance analysis</h5>
              <p class="card-text">9 Lessons</p>
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