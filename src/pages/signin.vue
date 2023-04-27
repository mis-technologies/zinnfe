
<template>
  <div class="">

    <div class="row w-full mt-5 align-items-center">
      <div class="col-1 ">
        <button class="btn btn-primary"><i class="fa-solid fa-arrow-left" onclick="closeButton() ">Back</i></button>
      </div>

      <div class="col-11">
        <div class=" container-fluid d-flex flex-column align-items-center justify-content-center">
          <img src="images/zinnlogo.png" class="w-40" />
        </div>
      </div>

    </div>

    <div class="authform signin-authform authformScale">
      <h1 class="my-4">Sign in</h1>
      <p class="mb-4">Signin to your account</p>
      <form class="form d-flex flex-column align-items-start justify-content-between" aria-hidden="true">

        <div class="d-flex w-100 input-field">
          <input type="email" class="form-control mb-4" id="email" placeholder="Email address" required />
        </div>

        <div class="w-100 input-field position-relative">
          <input type="password" class="form-control" id="password" placeholder="Password" required />
          <span class="eye" onclick="myFunction()">
            <i id="eye1" class="fa-regular fa-eye"></i>
            <i id="eye2" class="fa-regular fa-eye-slash"></i>
          </span>
        </div>

        <div class="d-flex align-self-end my-5">
          <p class="">Don't have an account ?</p>
          <a href="/signup" class="btn text-dark  ">Sign up</a>
        </div>



        <button type="submit" class="btn btn-primary" onclick="auth()">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: guest
</route>


<script lang="ts">
export default {
  mounted() { }
}
</script>