
<template>

        <div ref="preloader" class="preloader-wrapper">
            <img src="/images/zinnlogo.png" />
        </div>

        <div class="onboarding" style="">
            <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
                <div class="zinn__logo">
                    <img src="/images/zinnlogo.png" />
                </div>
                <img src="/images/onboarding-image.png" class="w-75" />
            </div>
            <div class="onboarding-content px-1 mx-2">
                <h1 class="text-white onboarding-content__heading mb-3">
                    Welcome <img src="/images/welcome.png" alt="" />
                </h1>
                <p class="text-white onboarding-content__description mb-3">
                    ZINN is security awareness chatbot mobile application that educates users on online security behavior
                </p>
                <div class="button pt-3">
                    <a class="btn signUp me-3" href="/signup" >Signup </a>
                    <a class="btn login" href="/signin" >Login</a>
                </div>
            </div>
        </div>

       
</template>

<route lang="yaml">
  meta:
    layout: guest
</route>



<script lang="ts">
// @ts-nocheck


export default {
  mounted(){

    delete window.localStorage.useAuthStore;
    
    const preloaderWrapper = document.querySelector(".preloader-wrapper");

    setTimeout(() =>{
      preloaderWrapper?.classList.add("fade-out-animation");
    }, 3000)
   
    console.log('ad', preloaderWrapper)

  }
}
</script>