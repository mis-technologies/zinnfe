
<template>
    <div class="trophy-container position-relative">
        <div class="trophy-heading__text d-flex align-items-center justify-content-center text-light flex-column">
            <span class="fs-1 fw-lighter">Quiz Results</span>
        </div>

        <div class="trophy-content">
            <img src="/images/trophy-cup.png" class="w-50 mx-auto">
            
            <div v-if="quiz_session_result.is_single_user" class="trophy-content__details px-5 py-4">
                <p class="text-center text-light fs-1 fw-bold">Summary</p>
                
                <div class="description my-2">
                    <span class="d-flex justify-content-between text-light">
                        <p class="fs-4 fw-bold">Total Scores</p>
                        <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ quiz_session_result.myresults.score }}</p>
                    </span>
                </div>

                <div class="description my-2">
                    <span class="d-flex justify-content-between text-light">
                        <p class="fs-4 fw-bold">Correct Answers</p>
                        <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ quiz_session_result.myresults.score }}</p>
                    </span>
                </div>

                <div class="description my-2">
                    <span class="d-flex justify-content-between text-light">
                        <p class="fs-4 fw-bold">Total Questions</p>
                        <p class="fs-4 fw-bold border rounded-pill px-3 text">{{quiz_session_result.myresults.summary.length}}</p>
                    </span>
                </div>

            </div>
            <a @click.prevent="$router.push({path: '/app/quizes'})" class="btn w-full border  text-white fw-bold fs-2 rounded  py-2  ">continue</a>
        </div>
       
    </div>
</template>
   
   
<script lang="ts">
import { QuizService } from '../services';


export default {


    props: {
        quiz_id: {
            type: String,
            // default: "there"
        },

    },
    data() {
        return {
            quiz_session_result: '',
        }
    },



    mounted() {

    },

    created() {
        this.getQuizSessionResult()
    },
    methods: {
        getQuizSessionResult() {
            QuizService.getQuizSessionResult(
                this.$route.query.session_id
            ).then((res) => {
                console.log(res)
                this.quiz_session_result = res.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }

}
</script>


