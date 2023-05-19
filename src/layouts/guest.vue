<template>
    <main class="wrapper px-3 py-5" >

        <div v-if="isBusy"><h1>jkfsdkjsfdh</h1></div>
        <RouterView/>
    </main>
 
</template>

<script lang="ts">
// @ts-nocheck
    import { useEventStore } from '../store';
    export default{

        data(){
           return{
            isBusy: false
           }
        },
        mounted(){
            this.isBusy =  useEventStore().isBusy
            console.log(this.isBusy)
        }
    }
</script>