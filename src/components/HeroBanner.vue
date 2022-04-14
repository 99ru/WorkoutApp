<template>
  <div class="hero-container">
    <section className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src=@/assets/legacy.mp4 type="video/mp4" />
      </video>
      <article className="hero-content">
        <h1>We're all gonna make it brah</h1>
        <h2>-Aziz Zyzz Shavershian</h2>
        <Button>Workouts</Button>
      </article>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
}

.hero-video {
  object-fit: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-content {
  padding: 0 100px 0 50px;
}

.hero-content > h1,
h2 {
  color: #ffffff;
  font-size: 2rem;
}

.hero-content > h1 {
  font-size: 4vw;
  margin-bottom: 10px;
  line-height: 1em;
}

.hero-content > h2 {
  font-size: 2vw;
  font-weight: 100;
  margin-bottom: 40px;
}

button{
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
}



@media screen and (min-width: 769px) {
  .hero-content > h2 {
    font-size: 3vw;
  }
}

</style>