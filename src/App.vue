<template>
 <NavBar/>
 <HeroBanner/>
</template>

<script>
import NavBar from './components/NavBar.vue' 
import HeroBanner from './components/HeroBanner.vue'

export default {
  name: 'App',
  components: {
    NavBar, HeroBanner
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
}

h1,
h2,
h3 {
  font-family: var(--brand-font-primary);
}

a {
  font-family: var(--brand-font-secondary);
}

b, strong {
  font-family: var(--brand-font-secondary);
  font-weight: 700;
}

.container {
  width: 100%;
  height: 100%;
  background-color: var(--brand-grey);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}

.container h2 {
  font-size: 2rem;
}

.error-message-container {
  padding-top: 300px;
  height: 100vh;
  color: #000000;
  text-align: center;
  width: 100%;
}
</style>
