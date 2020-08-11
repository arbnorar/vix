<template>
  <div>
    <h3>Keep up with our work in social media platforms</h3>
    <div class="social-media">
      <ul>
        <li>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-tumblr"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socialmedia",
};
</script>

<style scoped>
.social-media ul {
  display: flex;
  justify-content: center;
}

.social-media ul li {
  list-style: none;
  margin: 20px 20px;
  display: flex;
  justify-content: center;
}

.social-media ul li a {
  font-size: 30px;
  color: black;

  position: relative;
  border: 2px solid black;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: block;
  text-align: center;
  transition: 0.6s;
  box-shadow: 0 5px 4px rgb(138, 138, 138);
}
/*
.social-media ul li a {
  position: relative;
  border: 2px solid black;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: block;
  text-align: center;
  transition: 0.6s;
  box-shadow: 0 5px 4px rgb(138, 138, 138);
} */
</style>
