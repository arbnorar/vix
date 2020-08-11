<template>
  <div>
    <div
      class="container-fluid d-flex flex-column align-items-center justify-content-center my-4"
    >
      <h2 class="font-weight-bold">
        A safe haven for every animal in need of one
      </h2>
      <Carousel />
      <div>
        <h2 class="font-weight-bold">What is it that we do exactly?</h2>
        <h5>
          Simply put, we provide a home for endangered animals in our area,
          making it as comfortable as possible for each and every one of them.
          As an organization, we take care of finding the right animals that we
          believe need the extra care, but we believe that we can always do more
          as a community. Therefore we kindly suggest you give us a call
          whenever you see or hear about an animal in need, and our organization
          will make sure that they are able to be transferred in a safe space.
        </h5>
      </div>
    </div>
    <Socialmedia />
    <Volunteer />
  </div>
</template>
<script>
// @ is an alias to /src
import Carousel from '../components/Carousel';
import Socialmedia from '../components/layout/Socialmedia';
import Volunteer from './Volunteer';

export default {
  name: 'Home',
  components: {
    Carousel,
    Socialmedia,
    Volunteer,
  },
  data() {
    return {};
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 90%;
}
</style>
