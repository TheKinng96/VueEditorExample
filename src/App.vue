<template>
  <div id="app">
    <div class="buttons">
      <router-link to="/">
        <button>Home</button>
      </router-link>
      <router-link to="/editor">
        <button>Editor</button>
      </router-link>
    </div>

    <br />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.buttons button {
  margin: 15px;
  font-size: 2rem;
  border: none;
  text-decoration: underline;
  background: transparent;
  color: rgb(170, 166, 166);
  cursor: pointer;
}
</style>
