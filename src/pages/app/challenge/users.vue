
<template>
  <div class="home-container position-relative">
    <AppHeaderBar></AppHeaderBar>

    <div class="hero d-flex align-items-center justify-content-between">
      <div class="text w-2/3">
        <p>Challenge any of the online users below</p>
      </div>
     
    </div>




    <!-- ongoing course -->
    <section>

      <div class="title">
        <span class="text-sm">Online Users</span>
      </div>

      <UserListComponent list="online" ></UserListComponent>

  </section>


</div></template>

<route lang="yaml">
  meta:
    layout: 'app'
    tomiddleware: ['auth']
    requiresAuth: true
  name: 'app-challenge-users'
 
</route>