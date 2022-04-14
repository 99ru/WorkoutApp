<template>
  <div class="toggle-container">
    <button>Mens</button>
    <button>Womens</button>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.toggle-container {
  display: flex;
  justify-content: center;
  padding: 3rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 100%);
}

.toggle-container h2 {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
}

.toggle-container button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: transparent;
  color: rgb(251, 251, 251);
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  border: solid 1px rgb(255, 255, 255);
  width: 150px;
}

.toggle-container button:hover {
  cursor: pointer;
}

.toggle-container button.selected {
  background-color: #ffffff;
  color: #000;
}

</style>
