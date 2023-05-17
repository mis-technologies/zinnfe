
<template>
    <div class="about-cybersecurity d-flex flex-column next">
        <div class="cybersecurity-wrapper d-flex align-items-center mb-4">
            <div class="cyber-icon">
                <i class="fa-solid fa-arrow-left" @click="$router.back"></i>
            </div>
            <span>Get to know you</span>
        </div>


        
        <div class="cyb-heading">
            <span>How much do you know about cybersecurity?</span>
        </div>
        <div class="button-choice d-flex flex-column">

            <button v-for="level_answer in level_answers"  @click.prevent="selectAnswer($event, level_answer)" ref="ans" class="d-flex align-items-center px-5 justify-content-start">
               {{ level_answer.text }}
              
            </button>
        </div>
        <button style="display: block" class="btn-continue btn"  @click="submitQuizResponse()" >
            Continue
            <span v-if="!selected_level" class="block text-sm text-red">Please choose an answer</span>
        </button>
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
// @ts-nocheck
import { useAuthStore } from '../../store/auth';
export default {
    data() {
        return {
            authUser: {},
            selected_level: null,
            no_level_selected: false,
            level_answers: [
                { id: 1, text: 'I am new to the cyber space', level: 'beginner'},
                { id: 2, text: 'Slightly aware', level: 'beginner'},
                { id: 3, text: 'I am intermediate', level: 'intermediate'},
                { id: 4, text: 'I am quite the expert', level: 'advanced'}
            ]
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
    },
    methods: {
         //select answer
         selectAnswer( event: any, level_answer: any){
            this.selected_level = level_answer.level
            this.$refs['ans'].map(el => el.classList.remove('active'));
            event.target.classList.toggle('active')
        },

        submitQuizResponse(){
            if(!this.selected_level){
                return false
            }
            this.$router.push({name: 'zinn-selected-level', query: {level: this.selected_level}}) 
        }
    }
}
</script>



