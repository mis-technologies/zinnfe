<template>
   
    <main class="homepage-wrapper" >
       
        <RouterView/>
        <h2 class="text-center">You have New Challenge</h2>
        <AppBottomBar></AppBottomBar>

       
    </main>
</template>

<script lang="ts">
import { SocketInstance } from '../services' 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
export default {
    mounted(){
        let instance = SocketInstance.getSocketInstance()
        

        instance.channel('testchannel').listen(".ChallengeNotification", (e) => {
          console.log('.ChallengeNotification', e)
            toast(e.data.message, {
              autoClose: 4000,
              hideProgressBar: true
            });
        })
    }
}
</script>