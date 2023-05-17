
<template>
    <div class="running-course">
            
        <div v-for="user in users" class="">
            <div class="border my-4 rounded p-4 d-flex align-items-center justify-content-between ">

                <div class="d-flex">
                    <img :src="user.profile_pic" class="d-block h-20 rounded-pill" alt="...">
                    <div class="ml-5">
                        <h2  @click="$router.push({name: 'app-user-detail', params: {id: user.id}})" class="fs-2">{{ user.name }}</h2>
                        <span v-if="user?.level.name" class="">Level: {{ (user?.level.name).charAt(0).toUpperCase() + (user?.level.name).slice(1)}} </span>
                    </div>
                
                </div>

                <div class="">
                    <a @click.prevent="$router.push({name: 'app-challenge', query: {userId: user.id}})" class="btn btn-primary" href="">Challenge</a>
                    <div class="mr-2">Points: {{ user.points }}</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { ContentService } from '../services';
import { UserService } from '../services';
export default {

    props: ['course_id', 'list', 'limit'],
    data() {
        return {
            users: []
        }
    },
    mounted() {
        // let courseId = this.course_id ?? this.$route.params.id

        let query = {}
        if(this.limit ){
            query.limit = this.limit
        }

        if(this.list ){
            query.list = this.list
        }
        
        UserService.getUsers(query).then(res => {
            this.users = res.data
        }).catch(err => {
            console.log(err)
        })

    },
    methods: {}

}
</script>

