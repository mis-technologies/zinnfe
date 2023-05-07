
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">
        <AppHeaderBar></AppHeaderBar>

        <div class="start-section__header">
            <!-- <span>{{ challenge.user?.firstname }} vs {{ challenge.to_user?.firstname }} </span> -->
            <AppHeaderBar ></AppHeaderBar>

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

            <div class="description mt-10">
                <!-- <p class="text-white">Click  start to create a challenge</p> -->
            </div>
        </div>

        <button @click="createChallenge()" class="btn btn-continue">Start</button>
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
            quiz_levels: [],
            challenge: {},
            authUser: {},
            challengeId: ''

        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        QuizService.getChallenge(this.$route.query.challengeId).then(res => {
            this.challenge = res.data
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {

        getChallenge() {
            this.form.user_id = this.user.id
            console.log(this.form)
            QuizService.createChallenge(this.form).then(res => {
                console.log(res)
                // this.$router.push({ name: 'app-challenge-ready', query: {challengeId: res.data.id} })
            }).catch(err => {
                console.log(err)
            })
        }


    }
}
</script>

