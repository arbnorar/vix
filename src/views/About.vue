<template>
  <div>
    <Navbar />
    <img class="w-100" src="../assets/images/fantastic-four.jpg" alt />

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Our Vision</h1>
        <div class="heading-underline"></div>
        <p class="lead">
          Making the planet a better place by making a home for our wildlife and
          endangered species is our top mission here at Vix Wildlife Center.
          From endangered species to rescue animals, our furry, four-legged
          family members are slowly but surely settled in a safe space all the
          while having their natural ways of living practically intact.
          <br />Naturally, our staff, volunteers and supporters are
          fundamentally important to our organization, and we are extremely
          thankful to each and every individual that has helped and/or proceeds
          to help keep wildlife safe and sound.
        </p>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="../assets/images/deer.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";

export default {
  name: "About",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.jumbotron {
  background-color: white;
}

.lead {
  font-weight: 400;
}

.heading-underline {
  width: 16rem;
  height: 0.2rem;
  background-color: #1d3a1c;
  margin: 0 auto 2rem;
}
</style>
