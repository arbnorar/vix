<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/wolf.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/squirrel.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/deer.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/leopard.jpg" class="d-block w-100" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/lions.jpg" class="d-block w-100" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style scoped>
.carousel {
  width: 90%;
}
</style>