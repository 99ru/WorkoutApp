<template>
 <div class="nav-container">
   <div class="nav-logo">
    <img src="@/assets/gymshark.png" >
   </div>
 </div>
</template>
<script>
export default {

}
</script>

<style>
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
 /*  padding: 3vh; */
  margin-left: 5vh;
  height: 100%;
}
</style>