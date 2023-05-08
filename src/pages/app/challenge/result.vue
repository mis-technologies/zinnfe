
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">

        <div class="start-section__header">
            <!-- <span>{{ challenge.user?.firstname }} vs {{ challenge.to_user?.firstname }} </span> -->
            <AppHeaderBar :title="challenge.user?.firstname + ' vs ' + challenge.to_user?.firstname"></AppHeaderBar>

        </div>



        <div class="trophy-content__details px-5 py-4 w-100">
            <div v-if="isWon">
                <p class="text-center text-light fs-1 fw-bold">You won</p>
                <img src="/images/trophy-cup.png" class="w-50 mb-10 mx-auto">
            </div>

            <p class="text-center text-light fs-1 fw-bold">Challenge Results</p>
            <div v-for="result in challenge.quiz_session?.results" class="description p-5 my-2" style="background: #ffffff2b;">
              
                <span class="d-flex justify-content-between text-light">
                    <p class="fs-4 fw-bold">{{ result.user.name }}</p>
                    <p class="fs-4 fw-bold border rounded-pill px-3 text">{{ result.score }}</p>
                </span>
            </div>


            <p v-if="otheruser_hasnotplayed" class="text-center text-red fs-1 fw-bold mt-10">Waiting for the other user to complete challenge</p>

        </div>

       <div class=""></div>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-challenge-result'
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
            challengeId: '',
            isWon: false,
            otheruser_hasnotplayed: true,

        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        this.challengeId = this.$route.query.challengeId

        QuizService.getChallenge(this.challengeId).then(res => {
            this.challenge = res.data
            let myresult = res.data.quiz_session?.results.find(res => (res.user.id == this.authUser.id));
            let otherresult = res.data.quiz_session?.results.find(res => (res.user.id != this.authUser.id));
            if(otherresult){
                this.otheruser_hasnotplayed = false;
                if(myresult.score > otherresult.score) {
                    this.isWon = true
                }
            }
            
        }).catch(err => {
            console.log(err)
        })

    },
    methods: {
        startChallenge() {
            let session_id = this.challenge.quiz_session_id
            this.$router.push({ name: 'app-challenge-session', query: { sessionId: session_id } })
        }
    }
}
</script>

