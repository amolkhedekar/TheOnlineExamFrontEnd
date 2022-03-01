<template>
  <div id="app">
    <!-- <side-bar /> -->
    <responsive-side-bar />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
  </div>
</template>

<script>
// import SideBar from './components/SideBar.vue'
import ResponsiveSideBar from './components/ResponsiveSideBar/ResponsiveSideBar.vue'
export default {
  components: { 
    ResponsiveSideBar
   },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
