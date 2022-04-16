<template>
  <div class="wrapper">
    <div class="showmore">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam dicta
        expedita cumque sunt obcaecati. Optio mollitia repudiandae incidunt
        vitae accusamus accusantium repellendus, explicabo officiis, nemo quasi
        necessitatibus qui similique. Aperiam voluptatem quos quia iusto
        assumenda ipsa laboriosam, dolor consequatur exercitationem amet commodi
        quo necessitatibus impedit ea suscipit sunt quod deleniti veritatis
        illum omnis, asperiores iste consectetur beatae perferendis. Consequatur
        dolore, qui veniam aspernatur, et quisquam culpa maxime commodi ab
        molestias non pariatur porro amet nisi molestiae saepe. Omnis quos iure
        error culpa maiores laboriosam, et mollitia eveniet, molestias,
        repudiandae alias dolorum expedita? Tempore expedita voluptatum velit
        recusandae quisquam atque sed.
      </p>
      <ul v-if="show">
        <li v-for="item in list" v-bind:key="item">{{ item }}</li>
      </ul>
      <p v-if="show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        tenetur incidunt enim ut inventore sint quas in libero, voluptates
        pariatur, sunt similique delectus accusamus magnam explicabo labore
        asperiores officia minus culpa facere porro. Illo id quae, aspernatur
        dicta labore ullam veniam obcaecati eos, esse consectetur ut culpa
        explicabo commodi libero, repudiandae perferendis? Repellat impedit
        nesciunt facere eius nemo velit iure, doloribus sint fugit cupiditate
        facilis tempore quia incidunt, vel suscipit nisi aliquam. At dicta fugit
        excepturi eum numquam consequatur hic dolore sit labore nobis quibusdam
        eligendi, tempora enim nisi voluptatibus et non est ea eaque aut optio
        vitae. Ratione, soluta!
      </p>
      <p v-on:click="show = true" v-if="!show">Show more</p>
      <p v-on:click="show = false" v-if="show">Show less</p>
    </div>
  </div>
</template>

<script>
let random = "korv";
export default {
  data() {
    return {
      show: false,
      list: [random, "glass", "banan"],
    };
  },
};
</script>

<style>
.wrapper {
  display: flex;
}
.showmore {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 1rem;
  background-color: aliceblue;
}
</style>