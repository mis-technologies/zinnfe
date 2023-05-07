
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">
        <div class="start-section__header">
            <span>{{ authUser.firstname }} vs {{ user.firstname }}</span>
        </div>
        <div class="">
            <img src="/images/hiclipart.com.png" class="w-50 mx-auto">
            <div>
                <form action="">
                    <div class="my-2">
                        <label class="text-white" for="">Level</label>
                        <select class="form-control" name="" id="">
                            <option value="">Easy</option>
                        </select>
                    </div>

                    <div class="my-2">
                        <label class="text-white" for="">Duration</label>
                        <select class="form-control form-input" name="" id="">
                            <option value="">5 Mins</option>
                            <option value="">10 Mins</option>
                            <option value="">15 Mins</option>
                            <option value="">20 Mins</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="description mt-10">
                <!-- <p class="text-white">Click  start to create a challenge</p> -->
            </div>
        </div>
        <button @click="startQuizSession()" class="btn btn-continue">Continue</button>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'app-challenge'
</route>

<script lang="ts">
// @ts-nocheck
import { UserService } from '/@/services'
import { useAuthStore } from '/@/store/auth';

export default {

    data() {
        return {
            quiz_levels: [],
            user: {},
            authUser: {},
            form: {}
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        UserService.getUser(this.$route.query.userId).then(res => {
            // this.$router.push({name: 'app-challenge-ready'})
            this.user = res.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        startQuizSession() {
            this.$router.push({ name: 'quiz-session', params: { level: this.$route.query.level } })
        },

        challengeUser() {
            const data = { user_id: 400, level: 'easy', questions: 30, duration: 1 }
            UserService.getUsers(data).then(res => {
                this.$router.push({ name: 'app-challenge-ready' })
                this.users = res.data
            }).catch(err => {
                console.log(err)
            })
        }


    }



}
</script>

