<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <router-link to="/home" class="navbar-brand">
      <img src="@/assets/images/mainlogo.png" height="70px" />
      <br />Wildlife Center
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-5 w-75">
        <li class="nav-item">
          <router-link to="/home" class="nav-link h4">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link h4">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/animals" class="nav-link h4">Animals</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education" class="nav-link h4">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/volunteer" class="nav-link h4">Volunteer</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/connect" class="nav-link h4">Connect</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 26px;
  color: #1d3a1c;
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
}

.nav-link {
  color: #333;
}
</style>