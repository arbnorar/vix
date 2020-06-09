<template>
  <div>
    <Navbar />
    <h3 style="color: black">WE ARE A PRIVATE FACILITY. NO WALK-IN VISITORS ACCEPTED.</h3>
    <div class="container-fluid d-flex justify-content-center">
      <Carousel />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "../components/layout/Navbar";
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel
  },
  data() {
    return {
      slides: [
        {
          title: "I am Slide A",
          id: 1
        },
        {
          title: "I am Slide B",
          id: 2
        },
        {
          title: "I am Slide C",
          id: 3
        },
        {
          title: "I am Slide D",
          id: 4
        },
        {
          title: "I am Slide E",
          id: 5
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style>
</style>
