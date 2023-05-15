<template>
   
    <main class="homepage-wrapper" >
        <RouterView/>
        <AppBottomBar></AppBottomBar>

       
    </main>
</template>

<script lang="ts">
 import { SocketInstance } from '../services'  
export default {
    mounted(){
        SocketInstance.getSocketInstance()
    }
}
</script>