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

    <h1 class="display-4">Our Team</h1>
    <div class="heading-underline-team"></div>

    <div class="container my-4">
      <div class="row">
        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/rachel.jpg" alt="Rachel McAdams" />
            <div class="text-content">
              <h4>Rachel McAdams</h4>
              <h5>Founder and President of "VIX Wildlife Center"</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/joaquin.jpg" alt="Joaquin Phoenix" />
            <div class="text-content">
              <h4>Joaquin Phoenix</h4>
              <h5>Vice President</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/ricky.jpg" alt="Ricky Gervais" />
            <div class="text-content">
              <h4>Ricky Gervais</h4>
              <h5>Treasurer</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/frank.jpg" alt="Frank O'Hara" />
            <div class="text-content">
              <h4>Frank O'Hara</h4>
              <h5>Content Writer</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/david.jpg" alt="David Bowie" />
            <div class="text-content">
              <h4>David Bowie</h4>
              <h5>An Icon</h5>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 my-4">
          <div class="single-content">
            <img src="../assets/images/flavio.jpg" alt="Software Developer" />
            <div class="text-content">
              <h4>Flavio Copes</h4>
              <h5>Software Developer</h5>
            </div>
          </div>
        </div>
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

.heading-underline-team {
  width: 16rem;
  height: 0.2rem;
  background-color: #ad7f3a;
  margin: 0 auto 2rem;
}

body {
  background: #eee;
  font-family: "Lily Script One";
}

.single-content {
  position: relative;
  transition: 0.3s;
  box-shadow: 10px 20px 20px gray;
}

.single-content .text-content,
.single-content:after {
  position: absolute;
  left: 20px;
  right: 20px;
}

.single-content:after {
  content: "";
  display: block;
  background: #ad7f3a;
  top: 20px;
  bottom: 20px;
  opacity: 0;
  transform: rotate3d(-1, 1, 0, 100deg);
  transition: 0.4s;
}

.single-content:hover:after {
  opacity: 0.9;
  transform: rotate3d(0, 0, 0, 0deg);
}

.single-content img {
  width: 100%;
  height: auto;
}

.text-content {
  top: 45%;
  opacity: 0;
  z-index: 1;
  transform: translate(10%, -30%);
  transition: 0.3s;
  text-align: center;
  color: white;
}

.single-content:hover .text-content {
  opacity: 1;
  transform: translate(0, -50%);
  transition-delay: 0.3s;
}
.single-content .text-content h4 {
  font-weight: 700;
}
</style>
