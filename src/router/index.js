import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LandingPage from "../views/LandingPage.vue";
import About from "../views/About.vue";
import Animals from "../views/Animals.vue";
import Education from "../views/Education.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/animals",
    name: "Animals",
    component: Animals,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
