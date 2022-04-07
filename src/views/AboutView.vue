<template>
  <main>
<h1>exercises</h1>

<div class="postsList">
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.userId }}</h2>
    <p>{{ post.title }}</p>
  </div>
</div>
   
  </main>
</template>

<script>
import { mapState} from 'vuex'
export default {
  computed: {
   ...mapState('posts', ['posts'])
  },
  created() {
    this.$store.dispatch('posts/loadPosts')
  }

}
</script>



<style scoped>
main{
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

h1{
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: rgb(15, 14, 14);
}
</style>


