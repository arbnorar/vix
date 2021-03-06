import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LandingPage from '../views/LandingPage.vue';
import About from '../views/About.vue';
import Animals from '../views/Animals.vue';
import Education from '../views/Education.vue';
import Volunteer from '../views/Volunteer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
