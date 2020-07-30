<template>
  <div id="carouselExampleControls" class="carousel slide my-4" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
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
</style>