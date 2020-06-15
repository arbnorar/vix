<template>
  <div>
    <video
      src="../assets/videos/buddy.mp4"
      poster="images/snapshot.PNG"
      id="videoBackground"
      video
      loop
      muted
      autoplay
      controls
    >
      This is fallback content to display for user agents that do not support
      the video tag.
    </video>
    <div class="text">
      <h1>Vix Wildlife Center</h1>
      <p>There are no unwanted pets.. &nbsp; &nbsp; &nbsp;just unfound families.</p>
      <router-link to="/home" class="btn btn-success">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
body {
  margin: 0;
}

#videoBackground {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.4);
}

#videoBackground::-webkit-media-controls {
  display: none !important;
}

#videoBackground::-webkit-media-controls-enclosure {
  display: none !important;
}

h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 55px;
  color: white;
  text-shadow: 2px 2px black;
}

p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px black;
}

button {
  width: fit-content;
}

.text {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin-top: 250px;
  margin-right: 70px;
  margin-left: auto;
}
</style>