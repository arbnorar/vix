<template>
  <div id="footer" class="w-100">
    <h4>Keep up with our work in social media platforms</h4>
    <div id="socialMedia">
      <a href=""><i class="fab fa-facebook-f fa-2x"></i></a>
      <a href=""><i class="fab fa-youtube fa-2x"></i></a>
      <a href=""><i class="fab fa-reddit fa-2x"></i></a>
      <a href=""><i class="fab fa-twitter fa-2x"></i></a>
      <a href=""><i class="fab fa-instagram fa-2x"></i></a>
    </div>
    <p class="m-0">Vix - <em>Wildlife Center</em> &#169; (privately published, copyright 2020).</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer{
  height: 160px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#socialMedia{
  width: 200px;
  display: flex;
  justify-content: space-between
}

#socialMedia a{
 color: #AD7F3A
}
</style>