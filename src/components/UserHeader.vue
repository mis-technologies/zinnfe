<script setup lang="ts">

    defineProps({
        msg: {
            type: String,
            default: '',
        },
    })

</script>
<template>
    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">

        <!-- Header -->

        <div id="header" class="mdk-header bg-dark js-mdk-header m-0" data-fixed>
            <div class="mdk-header__content">

                <div class="navbar navbar-expand-sm navbar-main navbar-dark bg-primary pr-0 pl-md-0 pr-0" id="navbar"
                    data-primary>
                    <div class="container-fluid pr-0 ">

                        <!-- Navbar toggler -->
                        <button class="navbar-toggler navbar-toggler-custom d-lg-none d-flex mr-navbar" type="button"
                            data-toggle="sidebar">
                          
                        </button>


                        <div class="d-flex sidebar-account flex-shrink-0 mr-auto mr-lg-0">
                            <a href="fluid-index.html" class="flex d-flex align-items-center text-underline-0">
                               
                                <span class="flex d-flex flex-column text-white">
                                    <strong class="sidebar-brand">ZINN</strong>
                                </span>
                            </a>
                        </div>





                      


                        <div class="dropdown">
                            <a href="#account_menu"
                                class="dropdown-toggle navbar-toggler navbar-toggler-dashboard border-left d-flex align-items-center ml-navbar"
                                data-toggle="dropdown">
                                <img src="assets/images/avatar/demi.png" class="rounded-circle" width="32" alt="Frontted">
                                <span class="ml-1 d-flex-inline">
                                    <span class="text-light">Adrian D.</span>
                                </span>
                            </a>
                            <div id="company_menu" class="dropdown-menu dropdown-menu-right navbar-company-menu">
                                <div class="dropdown-item d-flex align-items-center py-2 navbar-company-info py-3">

                                    <span class="mr-3">
                                        <img src="assets/images/frontted-logo-blue.svg" width="43" height="43" alt="avatar">
                                    </span>
                                    <span class="flex d-flex flex-column">
                                        <strong class="h5 m-0">Adrian D.</strong>
                                        <small class="text-muted text-uppercase">STUDENT</small>
                                    </span>

                                </div>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center py-2"
                                    href="fluid-student-edit-account.html">
                                    <span class="material-icons mr-2">account_circle</span> Edit Account
                                </a>
                                <a class="dropdown-item d-flex align-items-center py-2" href="#">
                                    <span class="material-icons mr-2">settings</span> Settings
                                </a>
                                <a class="dropdown-item d-flex align-items-center py-2" href="login.html">
                                    <span class="material-icons mr-2">exit_to_app</span> Logout
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- // END Header -->

      
</div>
<!-- // END header-layout -->
</template>

