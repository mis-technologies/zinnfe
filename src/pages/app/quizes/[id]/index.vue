
<template>
    <div class="beginnersQuiz d-flex justify-content-between" style="height: 85vh">
        <div class="d-flex justify-content-between flex-column">
            <div class="d-flex align-items-start justify-content-between flex-column">
                <span class="fw-bolder fs-1 text-light">Level 1</span>

                <div class="start-section__body">
                    <img src="/images/umbrella-iso-color.png" class="w-100" />
                    <div class="description mt-5">
                        <h2 class="text-light fs-1 fw-bolder">Beginner's quiz</h2>
                        <p class="text-light text-start fs-2">
                            Do you feel confident? Here you will provide answers to our most difficult cyber security
                            questions
                        </p>
                    </div>
                </div>
            </div>
            <button @click=" $router.push({name:'quiz-question'}) " class="btn border btn-light text-primary fw-bold fs-2 rounded outline-0 py-4">
                Start 
            </button>
            
        </div>
    </div>
</template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
 
</route>