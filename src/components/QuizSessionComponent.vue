
<template>
    <div class="question-section position-relative" style="height: 90vh;">
        <div v-if="questions.length > 0">
            <div class="heading fixed-top px-4 py-2  mb-4 d-flex align-items-center justify-content-between">
                <div class="header-image__wrapper position-relative me-4">
                    <img src="/images/Female teacher.png" class="position-absolute w-75" alt="Profile image" />
                </div>
                <div class="d-flex align-items-start flex-column me-auto mt-3">
                    <h3 class="fs-2 fw-bolder">Chidinma</h3>
                </div>
                <div class="d-flex flex-column align-items-center mt-3">
                    <i class="fa-solid fa-clock fs-1"></i>
                    <!-- time provided to this component is in seconds 2 * 60 = 2 mins -->
                    <VueCountdown v-if="session_started" class="fs-2 fw-bolder" @start="onCountdownStarted" @end="onCountdownEnded" :time="quiz_session.duration * 60 * 1000" v-slot="{counting,  days, hours, minutes, seconds }">
                        {{ minutes }}: {{ seconds }}
                    </VueCountdown>
                </div>
            </div>
            <div  class="content-container position-relative">
                <span class="position-absolute border px-4 py-1 text-primary fs-2 fw-bold bg-light">{{ current_question_count +
                    '/' + total_questions }}</span>
                <div class="question-title d-flex align-items-start justify-content-start flex-column">
                    <h2 class="answer fs-1 fw-bold">Question</h2>
                    <p class="description fw-bolder fs-1">{{ current_question.question }}</p>
                </div>
                <span class="position-absolute border px-4 py-2 text-primary fs-2 fw-bolder bg-light rounded-pill">?</span>
            </div>
            <div class="answer-wrapper mt-5" style="height: 40vh; overflow-y: scroll; padding-bottom: 30px">
                <p @click="selectAnswer(answer, current_question, $event)" v-for="answer in current_question.answers" ref="answer" class="px-3 my-2 py-3 fs-1">{{ answer.answer }}</p>
            </div>
            <button v-if="is_last_question" @click="submitQuizResponse()"
                class="btn border btn-light text-primary fw-bold fs-2 rounded outline-0 py-4 fixed-buttom bg-primary text-light position-absolute">Submit</button>
            <button v-else @click="nextQuestion() "
                class="btn border btn-light text-primary fw-bold fs-2 rounded outline-0 py-4 fixed-buttom bg-primary text-light position-absolute">
                Continue
                <span v-if="no_answer_selected" class="block text-sm text-red">Please choose an answer</span>
            </button>
        </div>

        <div v-else>
            <AppHeaderBar></AppHeaderBar>
        </div>

    </div>
</template>
   
   
<script lang="ts">
import VueCountdown from '@chenfengyuan/vue-countdown';
import { QuizService } from '../services';


export default {

    components: {
         VueCountdown
    },
    props: {
        quiz_id: {
            type: Number,
        },
        level: {
            type: String,
        },
        lesson_id: {
        },
        // quiz_duration: {
        //     type: Number,
        //     default: 0.5 // in minutes
        // }
    },
    data() {
        return {
            questions: [],
            current_question: {},
            total_questions: 0,
            current_question_count: 0,
            is_last_question: false,
            session_started: false,
            
            // quiz_remaining_time: 20,

            quiz_responses: [],

            quiz_session: '',

            no_answer_selected: false

        }
    },

    

    mounted() {
       
    },

    created() {
      this.startQuizSession()
    },
    methods: {

        startQuizSession(){
            try {

                let query = {}

                if(this.quiz_id) query.quiz_id = this.quiz_id
                if(this.level_id) query.level_id = this.level_id
                if(this.lesson_id) query.lesson_id = this.lesson_id

                QuizService.startQuizSession(query).then((res)=>{
                    console.log(res)
                    this.quiz_session = res.data
                    this.questions = res.data.questions
                    this.current_question = this.questions[0]
                    this.session_started = true

                    this.quiz_id
                    this.current_question = this.questions[0]
                    this.total_questions = this.questions.length
                    this.current_question_count = 1
                }).catch( (err) =>{
                    console.log(err)
                })  
            } catch (error) {
             
            }
        },

        nextQuestion() {

            
            this.$refs['answer'].map(el => el.classList.remove('selected'));

            //if the answer is not selected prevent next question
            if(!this.current_question.selected_answer_id){
                this.no_answer_selected = true
                return false
            }

            this.saveAnswer()
           


            //save selected answer for the current question
            // move to the next question
            let nextQuestionIndex = this.questions.indexOf(this.current_question) + 1
            let totalQuestion = this.questions.length

            if (nextQuestionIndex != totalQuestion) {
                ++this.current_question_count
                this.current_question = this.questions[nextQuestionIndex]
            } else {
                //submite here
                this.is_last_question = true
            }
        },
        // countDownTimer() {
        //     if (this.quiz_remaining_time > 0) {
        //         setTimeout(() => {
        //             this.quiz_remaining_time -= 1
        //             this.countDownTimer()
        //         }, 1000)
        //     }
        // },


        //countdown timer methods
        onCountdownStarted(){
            console.log("onCountdownStarted")
        },

        onCountdownEnded(){
            console.log('onCountdownEnded');
            this.is_last_question = true
        },


        //do this on continue
        saveAnswer(){
            let response = {
                question_id: this.current_question.id,
                answer_id: this.current_question.selected_answer_id,
                quiz_session_id: this.quiz_session.id
            }
            this.quiz_responses.push(response)
            this.no_answer_selected = false

        },


        //select answer
        selectAnswer(answer: any, question: any, event: any){

            this.no_answer_selected = false
            this.current_question.selected_answer_id =  answer.id

            this.$refs['answer'].map(el => el.classList.remove('selected'));
            event.target.classList.toggle('selected')

        },

        submitQuizResponse(){
            console.log(this.quiz_responses)

            QuizService.submitQuizSession(
                this.quiz_session.id,
                this.quiz_responses
            ).then((res)=>{
                console.log(res)
                this.$router.push({name: 'quiz-session-result', query: {session_id: this.quiz_session.id }})  
            }).catch( (err) =>{
                console.log(err)
            })  
        }
    }

}
</script>


