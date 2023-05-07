
<template>
    <div class="start-section d-flex align-items-center justify-content-between flex-column next">

        <div class="start-section__header">
            <AppHeaderBar :title="authUser.firstname + ' vs ' + user.firstname "></AppHeaderBar>

            <!-- <span></span> -->
        </div>
        <div class="">
            <img src="/images/hiclipart.com.png" class="w-50 mx-auto">
            <div>
                <form action="">
                    <div class="my-4">
                        <label class="text-white fs-3" for="">Level</label>
                        <select v-model="form.level" class="form-control" name="" id="">
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
                        </select>
                    </div>

                    <div class="my-4">
                        <label class="text-white fs-3" for="">Duration</label>
                        <select v-model="form.duration" class="form-control form-input" name="" id="">
                            <option value="5">5 Mins</option>
                            <option value="10">10 Mins</option>
                            <option value="15">15 Mins</option>
                            <option value="20">20 Mins</option>
                        </select>
                    </div>

                    <div class="my-4">
                        <label class="text-white fs-3" for="">Questions</label>
                        <select v-model="form.questions" class="form-control form-input" name="" id="">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="description mt-10">
                <!-- <p class="text-white">Click  start to create a challenge</p> -->
            </div>
        </div>
        <button @click="createChallenge()" class="btn btn-continue">Continue</button>
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
import { QuizService } from '/@/services';

export default {

    data() {
        return {
            quiz_levels: [],
            user: {},
            authUser: {},
            form: {
                level: 'beginner',
                duration: 5,
                questions: 5,
            }
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
    
        createChallenge() {
            this.form.user_id = this.user.id
            console.log(this.form)
            QuizService.createChallenge(this.form).then(res => {
                console.log(res)
                this.$router.push({ name: 'app-challenge-ready', query: {challengeId: res.data.id} })
            }).catch(err => {
                console.log(err)
            })
        }


    }
}
</script>

