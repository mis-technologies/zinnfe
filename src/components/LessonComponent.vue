
<template>
    <div class="video-wrapper fixed-top px-4 pt-4 bg-white position-relative d-flex align-items-center">
        <div class="cyber-icon">
            <a href="homepage.html"><i class="fa-solid fa-arrow-left"></i></a>
        </div>
        <span>Cyber security minefield</span>
    </div>
    <div class="videowrapper position-relative mt-5 pt-5">
        <iframe src="https://www.youtube.com/embed/inWWhr5tnEA " frameborder="0 " class="position-absolute"
            allowfullscreen></iframe>
    </div>
    <div class="text">
        <h2 class="fw-bold">Description</h2>
        <div class="d-flex align-items-center justify-content-between">

        </div>
        <div class="d-flex align-items-center gap-5">

        </div>
    </div>


    <!-- related lessons -->
    <div class="video-lessons mt-4">
        <h2 class="fw-bold fs-1 my-4">Related Lessons</h2>
        <div class="links" style="overflow-y: scroll; height: 80%">
            <a href="#" class="d-flex align-items-center gap-4 fs-2 nav-link my-3">
                <div class="icon-wrapper position-relative">
                    <i class="fa-solid fa-play"></i>
                </div>
                <span>Behaviour of cyber robotics -part 1</span>
            </a>
            <a href="#" class="d-flex align-items-center gap-4 fs-2 nav-link mb-4">
                <div class="icon-wrapper position-relative">
                    <i class="fa-solid fa-play"></i>
                </div>
                <span>Behaviour of cyber robotics -part 1</span>
            </a>
            <a href="#" class="d-flex active align-items-center gap-4 fs-2 nav-link mb-4">
                <div class="icon-wrapper position-relative">
                    <i class="fa-solid fa-play"></i>
                </div>
                <span>Cia elements in cyber security</span>
            </a>
            <a href="#" class="d-flex align-items-center gap-4 fs-2 nav-link mb-4">
                <div class="icon-wrapper position-relative">
                    <i class="fa-solid fa-play"></i>
                </div>
                <span>Cia elements in cyber security</span>
            </a>

        </div>
    </div>
</template>
<script lang="ts">
export default {

    props: ['course_id'],
    data() {
        return {
            payload: {}
        }
    },
    mounted() {
        this.course_id 
        let courseId = this.course_id ?? this.$route.params.id
        console.log(courseId);
    },
    methods: {
        loginUser() {}
    }

}
</script>

