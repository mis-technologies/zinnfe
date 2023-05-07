
<template>
    <div class="running-course">
            
            <div v-for="user in users" @click="$router.push({name: 'app-user-detail', params: {id: user.id}})" class="item-1 d-flex align-items-center border rounded my-4">
                <div class=""><img :src="user.profile_pic" class="d-block h-30 rounded-pill" alt="..."></div>
                <div class=" row p-4">
                   <div class="d-flex align-items-center justify-content-between">
                        <h2 class="fs-2">{{ user.name }}</h2>
                        <a @click.prevent="$router.push({name: 'app-challenge-ready'})" class="btn btn-primary" href="">Challenge</a>
                   </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="mr-2">Points: {{ user.points }}</span>
                        <span class="mx-2">Level: {{ (user.level).charAt(0).toUpperCase() + (user.level).slice(1)}} </span>
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
    methods: {
       
    }

}
</script>

