<template>
   
    <main class="homepage-wrapper" >
         <RouterView :key="key"/>
        <AppBottomBar></AppBottomBar>

       
    </main>
</template>

<script lang="ts">
import { SocketInstance } from '../services' 
// import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
import { useEventStore } from '/@/store';
import { useAuthStore } from '/@/store';

// import { storeToRefs } from 'pinia'
// import { watch } from 'vue'

export default {

    data(){
        return{
            authuser: {},
            key: Math.random()
        }
    },


    setup(){
        // const eventStore = useEventStore()
        // const { newChallenge } = storeToRefs(eventStore)
        // let  key = Math.random()

        // watch(newChallenge, () => {
        //     console.log(key)
        //     console.log('isLoggedIn ref changed, do something!')
        //     key = Math.random()
        //     console.log(key)
        // })
    },
    mounted(){
        let instance = SocketInstance.getSocketInstance()
        let authuser = useAuthStore().authUser

        instance.channel(authuser.email).listen(".ChallengeNotification", (e) => {
          console.log('.ChallengeNotification', e)
            const eventStore = useEventStore();
            eventStore.hasAlert = true
            eventStore.newChallenge = e.data

           this.key = Math.random()
            // toast(e.data.message, {
            //   autoClose: 1000,
            //   hideProgressBar: true,
            //   closeOnClick: true
            // });
        })
    }
}
</script>

<style>
</style>