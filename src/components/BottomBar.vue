
<template>
    <nav class="mobile-bottom-nav">
        <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
            <div class="mobile-bottom-nav__item-content">
                <i class="material-icons">home</i>
                one
            </div>		
        </div>
        <div class="mobile-bottom-nav__item">		
            <div class="mobile-bottom-nav__item-content">
                <i class="material-icons">mail</i>
                two
            </div>
        </div>
        <div class="mobile-bottom-nav__item">
            <div class="mobile-bottom-nav__item-content">
                <i class="material-icons">person</i>
                three
            </div>		
        </div>
        
        <div class="mobile-bottom-nav__item">
            <div class="mobile-bottom-nav__item-content">
                <i class="material-icons">phone</i>
                four
            </div>		
        </div>
    </nav> 
</template>

<script>
export default {
    mounted(){
        var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
        navItems.forEach(function(e, i) {
            e.addEventListener("click", function(e) {
                navItems.forEach(function(e2, i2) {
                    e2.classList.remove("mobile-bottom-nav__item--active");
                })
                this.classList.add("mobile-bottom-nav__item--active");
            });
        });
    }
}

</script>

<style scoped>
    body {
  padding: 10px;
  padding-bottom: 50px;
}

h1 {
  margin-bottom: 2000px;
}
/* For Demo only */
.cd__main{
   position: relative;
   width: 360px !important;
   height: 720px;
   border: 2px solid #bbb;
}
/* end demo only */
.mobile-bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
  transform: translateZ(0);
  display: flex;
  height: 50px;
  box-shadow: 0 -2px 5px -2px #333;
  background-color: #fff;
}
.mobile-bottom-nav__item {
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mobile-bottom-nav__item--active {
  color: red;
}
.mobile-bottom-nav__item-content {
  display: flex;
  flex-direction: column;
}
</style>