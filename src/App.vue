<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <!-- <page-home /> -->
    <!-- component that renders the active page based on the route the user's visiting. how to use VueRouter-->
    <router-view />
  </div>
</template>

<script>
import PageHome from "./components/PageHome";
export default {
  name: "App",
  // components: {
  //   PageHome,
  // },
};
</script>

<style>
@import "./assets/style.css";
</style>
