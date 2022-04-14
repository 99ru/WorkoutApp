<template>
 <div class="nav-container">
   <div class="nav-logo">
    <img src="@/assets/logo.svg">
   </div>
 </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.nav-container {
  background-color: #000000;
  height: 100px;
  display: flex;
  position: fixed;
  top: 10;
  width: 100%;
  z-index: 1;
}
.nav-logo > img {
  margin-left: 5vh;
  height: 100%;
  width: 50px;
}

h1{
  color:aqua;
}
</style>