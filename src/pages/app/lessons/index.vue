
<template>
  <div class="home-container position-relative">
    <div class="heading fixed-top px-4 py-5 bg-white mb-4 d-flex align-items-center justify-content-between">
      <h2>Hello!buddy👍</h2>
      <span>
        <img src="/images/Image.png " alt="Profile image " />
      </span>
    </div>

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
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              
              <div class="carousel-body d-flex flex-column gap-3">
                <div class="item-1 d-flex align-items-center justify-content-between">
                  <div class="image">
                    <img src="/images/Rectangle 3463364.png" class="d-block w-75" alt="..." />
                  </div>
                  <div class="text">
                    <h2>Cyber Security minefield</h2>
                    <div class="d-flex align-items-center justify-content-between">
                     
                    </div>
                  </div>
                </div>
                <div class="item-1 d-flex align-items-center justify-content-between">
                  <div class="image">
                    <img src="/images/Rectangle 3463365.png" class="d-block w-75" alt="..." />
                  </div>
                  <div class="text">
                    <h2>The science of cyber fields</h2>
                    <div class="d-flex align-items-center justify-content-between">
                   
                    
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