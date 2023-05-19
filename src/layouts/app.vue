<template>
   
    <main class="homepage-wrapper" >
       
        <!-- <h2 style="z-index: 9999;" class="text-center waviy"><span>You have a new challenge</span></h2> -->

        <RouterView/>
        <AppBottomBar></AppBottomBar>

       
    </main>
</template>

<script lang="ts">
import { SocketInstance } from '../services' 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 
import { useEventStore } from '/@/store';
import { useAuthStore } from '/@/store';

export default {

    data(){
        return{
            authuser: {}
        }
    },
    mounted(){
        let instance = SocketInstance.getSocketInstance()
       let authuser = useAuthStore().authUser

        instance.channel(authuser.email).listen(".ChallengeNotification", (e) => {
          console.log('.ChallengeNotification', e)
            const eventStore = useEventStore();
            eventStore.hasAlert = true
            eventStore.newChallenge = e.data

           
            // let zinImage = document.getElementById('zinn_image');
            // zinImage.classList.add("zinn-alert");

            let mess = `<div class="notify-wrapper"> <p class="notify-text" >${e.data.message}</p> </div>`
        
            toast(mess, {
              autoClose: false,
              hideProgressBar: true,
              dangerouslyHTMLString: true,
              closeOnClick: false

            });
        })
    }
}
</script>

<style>

    .zinn-alert {
        border: solid red 2px
    }

    .notify-text {
        text-align: center;
    }

    .notify-wrapper {
        width: 100%;
       display: flex;
       flex-direction: column;
    }

    .notify-button {
        margin: auto;
    }

</style>