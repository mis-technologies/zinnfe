
<template>
    <div class="question-section position-relative" style="height: 90vh;">
           <div class="heading fixed-top px-4 py-2  mb-4 d-flex align-items-center justify-content-between">
               <div class="header-image__wrapper position-relative me-4">
                   <img src="/images/Female teacher.png" class="position-absolute w-75" alt="Profile image" />
               </div>
               <div class="d-flex align-items-start flex-column me-auto mt-3">
                   <h3 class="fs-2 fw-bolder">Chidinma</h3>
                   <p class="fs-2 fw-bold">356</p>
               </div>
               <div class="d-flex flex-column align-items-center mt-3">
                   <i class="fa-solid fa-clock fs-1"></i>
                   <p class="fs-2 fw-bolder">00:34</p>
               </div>
           </div>
           <div class="content-container position-relative">
               <span class="position-absolute border px-4 py-1 text-primary fs-2 fw-bold bg-light">2/5</span>
               <div class="question-title d-flex align-items-start justify-content-start flex-column">
                   <h2 class="answer fs-1 fw-bold">Question</h2>
                   <p class="description fw-bolder fs-1">{{ current_question.question }}</p>
               </div>
               <span class="position-absolute border px-4 py-2 text-primary fs-2 fw-bolder bg-light rounded-pill">?</span>
           </div>
           <div class="answer-wrapper mt-5" style="height: 40vh; overflow-y: scroll; padding-bottom: 30px">
               <p v-for="answer in current_question.answers" class=" px-3 py-3 fs-1 fw-bold ">{{ answer.answer }}</p>
           </div>
           <button class="btn border btn-light text-primary fw-bold fs-2 rounded outline-0 py-4 fixed-buttom bg-primary text-light position-absolute" >Next</button>
       </div>
   </template>
   
   
   <script lang="ts">
       export default {

        props: ['quiz_id'],
        data() {
            return {
                questions: [
                    {
                        question: 'who is a a goat',
                        answers: [
                           { 
                                id: 1,
                                answer: 'a verb',
                                is_correct: true
                           },
                           { 
                                id: 2,
                                answer: 'a noun',
                                is_correct: false
                           },
                           { 
                                id: 3,
                                answer: 'a proposition',
                                is_correct: false
                           }
                        ]
                    }
                ],
                current_question: {
                    question: 'what is the name of the a place',
                    answers: [
                        {
                            id: 3,
                            answer: 'a dog'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.quiz_id 
            let quizId = this.quiz_id ?? this.$route.params.id
            console.log(quizId);
        },
        methods: {
            nextQuestion() {
                //save selected answer for the current question
                // move to the next question
            }
        }
   
       }
   </script>