
<template>
    <div class="about-cybersecurity d-flex flex-column next">
        <div class="cybersecurity-wrapper d-flex align-items-center mb-4">
            <div class="cyber-icon">
                <i class="fa-solid fa-arrow-left" @click="$router.back"></i>
            </div>
            <span>Get to know you</span>
        </div>
        <div class="progress-container">
            <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style="height: 1px">
                <div class="progress-bar" style="width: 25%"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Example 15px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style="height: 15px">
                <div class="progress-bar" style="width: 25%"></div>
            </div>
        </div>
        <div class="cyb-heading">
            <span>How much do you know about cybersecurity?</span>
        </div>
        <div class="button-choice d-flex flex-column">

            <button v-for="level_answer in level_answers"  @click.prevent="selectAnswer($event)" ref="ans" class="d-flex align-items-center px-5 justify-content-start">
               {{ level_answer.text }}
            </button>
           
           

        </div>
        <button class="btn-continue btn" onclick="btnNext2()">Continue</button>
    </div>
</template>

<route lang="yaml">
    meta:
        layout: 'zinn'
        tomiddleware: ['auth']
        requiresAuth: true
    name: 'zinn-get-to-know'
</route>

<script lang="ts">
import { useAuthStore } from '../../store/auth';
export default {
    data() {
        return {
            authUser: {},
            no_answer_selected: false,
            level_answers: [
                { text: 'I am new to the cyber space', level: 'beginner'},
                { text: 'Slightly aware', level: 'junior'},
                { text: 'I am intermediate', level: 'intermediate'},
                { text: 'I am quite the expert', level: 'expert'}
            ]
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
    },
    methods: {
         //select answer
         selectAnswer( event: any){
            
            // this.$refs['ans'].map(el => el.classList.remove('active'));
            this.$refs['ans'].map(el => el.classList.remove('active'));
            event.target.classList.toggle('active')
        },
    }
}
</script>

