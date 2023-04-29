
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-5 bg-white mb-4 d-flex align-items-center justify-content-between">
      <h2>Hello!buddy👍</h2>
      <span>
        <img src="images/Image.png " alt="Profile image " />
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
        <a class="text-lg mx-2" href="">View All</a>
      </div>

      <div class="progress-container position-relative p-4">
        <h5 class="text-white">Expert level</h5>
        <h3 class="text-white">Intro to cyber security</h3>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
          aria-valuemax="100">
          <div class="progress-bar" style="width: 5%"></div>
        </div>
        <p class="text-white">
          Your Level : <span class="fw-bold">0/24 unit</span>
        </p>
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
        <span class="text-sm">Recent Lessons</span>
        <a class="text-lg mx-2" href="">View All</a>
      </div>
      
      <div class="running-course">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              
              <div class="carousel-body d-flex flex-column gap-3">
                <div class="item-1 d-flex align-items-center justify-content-between">
                  <div class="image">
                    <img src="images/Rectangle 3463364.png" class="d-block w-75" alt="..." />
                  </div>
                  <div class="text">
                    <h2>Cyber Security minefield</h2>
                    <div class="d-flex align-items-center justify-content-between">
                      <p>1 of 14 units</p>
                      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 20%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-1 d-flex align-items-center justify-content-between">
                  <div class="image">
                    <img src="images/Rectangle 3463365.png" class="d-block w-75" alt="..." />
                  </div>
                  <div class="text">
                    <h2>The science of cyber fields</h2>
                    <div class="d-flex align-items-center justify-content-between">
                      <p>1 of 14 units</p>
                      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 20%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
 
</route>