<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <router-link to="/home" class="navbar-brand">
      <img src="@/assets/images/mainlogo.png" height="70px" />
      <br />
      <span>Wildlife Center</span>
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
        <li class="nav-item two">
          <router-link to="/about" class="nav-link h4">About</router-link>
        </li>
        <li class="nav-item three">
          <router-link to="/animals" class="nav-link h4">Animals</router-link>
        </li>
        <li class="nav-item four">
          <router-link to="/education" class="nav-link h4"
            >Education</router-link
          >
        </li>
        <li class="nav-item five">
          <router-link to="/volunteer" class="nav-link h4"
            >Volunteer</router-link
          >
        </li>
        <li class="nav-item six">
          <router-link to="/connect" class="nav-link h4">Connect</router-link>
        </li>
        <li class="nav-item">
          <div class="custom-control custom-switch nav-link">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              v-model="dark"
            />
            <label class="custom-control-label" for="customSwitch1"
              ><i :class="dark ? 'fas fa-sun' : 'fas fa-moon'"></i
            ></label>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['darkTheme']),
    dark: {
      get() {
        return this.darkTheme;
      },
      set(value) {
        return this.$store.commit('CHANGE_THEME', value);
      },
    },
  },
  methods: {
    ...mapActions(['changeTheme']),
  },
  watch: {
    dark: function() {
      this.changeTheme(this.dark);
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  font-size: 26px;
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
}
</style>
