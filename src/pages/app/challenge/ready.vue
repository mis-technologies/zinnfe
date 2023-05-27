
<template>
    <div class="start-section d-flex align-items-center justify-content-center flex-column next">

        <div class="start-section__header">
            <!-- <span>{{ challenge.user?.firstname }} vs {{ challenge.to_user?.firstname }} </span> -->
            <AppHeaderBar :title="challenge.user?.firstname + ' vs ' +   challenge.to_user?.firstname " ></AppHeaderBar>

        </div>
        <div class="mx-10">
            <img src="/images/ask-icon.png" class="w-50 mb-10 mx-auto">

            <div class="description my-2">
                <span class="d-flex justify-content-between text-light">
                    <p class="fs-4 fw-bold">Total Questions</p>
                    <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ challenge.quiz_session?.questions.length }}</p>
                </span>
            </div>

            <div class="description my-2">
                <span class="d-flex justify-content-between text-light">
                    <p class="fs-4 fw-bold">Duration</p>
                    <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ challenge.duration }}</p>
                </span>
            </div>

            <div class="description my-2">
                <span class="d-flex justify-content-between text-light">
                    <p class="fs-4 fw-bold">Level</p>
                    <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ challenge.level?.name }}</p>
                </span>
            </div>

            
            <div v-if="authUser.id == challenge.user_id" class="description mt-10">
                <div v-if="challenge.user_complete == 1">
                    <p class="text-red text-center fs-1">You have already completed this challenge, click on view results</p>
                    <button @click="viewChallengeResult()" class="btn btn-continue">View Results</button>
                </div>

                <div v-else class="text-white text-center fs-1">
                    <p class="text-white text-center fs-1">Click on start to begin your challenge.</p>
                    <button  @click="startChallenge()" class="btn btn-continue">Start</button>
                </div>
            </div>

            <div v-else class="description mt-10">
               <div v-if="challenge.to_user_complete == 1">
                    <p class="text-red text-center fs-1">You have already completed this challenge, click on view results</p>
                    <button @click="viewChallengeResult()" style="height:  40px; margin-top: 20px;"  class="btn btn-continue">View Results</button>
                </div>

                <div v-else class="text-white text-center fs-1">
                    <p class="text-white text-center fs-1">Click on start to begin your challenge.</p>
                    <button  @click="startChallenge()" class="btn btn-continue">Start</button>
                </div>
            </div>

        </div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-challenge-ready'
</route>

<script lang="ts">
// @ts-nocheck
import { UserService } from '/@/services'
import { useAuthStore } from '/@/store/auth';
import { QuizService } from '/@/services';
import user from '/@/services/user';

export default {

    data() {
        return {
            challenge: {},
            authUser: {},
            challengeId: ''

        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        this.challengeId = this.$route.query.challengeId

        QuizService.getChallenge(this.challengeId).then(res => {
            this.challenge = res.data
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        startChallenge() {
            let session_id = this.challenge.quiz_session_id
            this.$router.push({name: 'app-challenge-session',  query: {sessionId: session_id}})        
        },
        viewChallengeResult() {
            let session_id = this.challenge.quiz_session_id
            this.$router.push({name: 'app-challenge-result',  query: {challengeId: this.challengeId}})        
        }
    }
}
</script>

