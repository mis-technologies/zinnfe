
<template>
    <div :key="key" class="heading fixed-top px-4 gap-5 py-2 mb-4 d-flex align-items-center justify-content-between" :class="class">
        <div class="cyber-icon">
            <a href="" @click.prevent="$router.back()"><i class="fa-solid fa-arrow-left"></i></a>
        </div>

        <div v-if="title" class="h-10" style="overflow: hidden;">
            <p class="fs-3"> {{ title }}</p>
        </div>
        <img @click.prevent="$router.push({ name: 'zinn' })" class="avatar h-10" :class="hasAlert ? 'blink-image ' : ''"
            src="/images/zinnbot.png" id="zinn_image" alt="Profile image " />
    </div>
</template>

<script lang="ts">
// @ts-nocheck
import { useAuthStore } from '../store/auth';
import { useEventStore } from '../store';
export default {

    props: ['title', 'class'],
    data() {
        return {
            authUser: {},
            hasAlert: false,
            key: Math.random() + 1
        }
    },
    mounted() {
        this.authUser = useAuthStore().authUser
        this.hasAlert = useEventStore().hasAlert;
        this.key =  useEventStore().newChallenge.challengId;
    }
}
</script>


<style>
.blink-image {
    border: thin solid red;
    border-radius: 10px;
    height: 40px;
}



/* Firefox old*/
@-moz-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* IE */
@-ms-keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Opera and prob css3 final iteration */
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.blink-image {
    -moz-animation: blink normal 1s infinite ease-in-out;
    /* Firefox */
    -webkit-animation: blink normal 1s infinite ease-in-out;
    /* Webkit */
    -ms-animation: blink normal 1s infinite ease-in-out;
    /* IE */
    animation: blink normal 1s infinite ease-in-out;
    /* Opera and prob css3 final iteration */
}</style>