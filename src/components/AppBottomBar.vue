
<template>
    <nav class="nav d-flex">
        <a @click.prevent="$router.push({name: 'app-home'})" class="nav-link d-flex align-items-center justify-content-center flex-column " :class=" $route.name == 'app-home' ? 'nav-link__active' : '' ">
            <i class="fa-solid fa-house nav-icon"></i>
            <span class="nav-text">Home</span>
        </a>
        <a @click.prevent="$router.push({name: 'app-lessons'})" class="nav-link d-flex align-items-center justify-content-center flex-column " :class=" $route.name == 'app-lessons' ? 'nav-link__active' : '' ">
            <i class="fa-regular fa-circle-play nav-icon"></i>
            <span class="nav-text">Lessons</span>
        </a>
        <a href="#"  @click.prevent="$router.push({name: 'app-quizes'})" class="nav-link d-flex align-items-center justify-content-center flex-column" :class=" $route.name == 'app-quizes' ? 'nav-link__active' : '' ">
            <i class="fa-solid fa-clipboard-question nav-icon"></i>
            <span class="nav-text">Quiz</span>
        </a>
        <a href="#" class="nav-link d-flex align-items-center justify-content-center flex-column">
            <i class="fa-regular fa-user nav-icon"></i>
            <span class="nav-text">Profile</span>
        </a>
    </nav>
</template>

