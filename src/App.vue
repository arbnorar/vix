<template>
  <div id="app">
    <Navbar v-if="this.$route.name !== 'LandingPage'" />
    <router-view />
    <Footer v-if="this.$route.name !== 'LandingPage'" />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";
import store from "./store";
import Footer from "./components/layout/Footer";

if (store.getters.darkTheme) {
  require("./assets/css/bootstrapDark.min.css");
} else {
  require("./assets/css/bootstrapLight.min.css");
}

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* @import "./assets/css/bootstrap.min.css"; */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
