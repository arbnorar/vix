<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col col-4 my-3" v-for="a in animals" v-bind:key="a.name">
          <div class="card">
            <img v-bind:src="getImg(a.img)" class="card-img-top" />
            <div class="card-body">
              <h2>{{a.name}}</h2>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam placeat id,
                non error excepturi reprehenderit? Soluta asperiores voluptate beatae totam animi,
                laborum mollitia sequi natus, aut eligendi quos dignissimos.
              </h5>

              <!-- Modal trigger -->
              <button
                type="button"
                data-toggle="modal"
                data-target="#videoModal"
                class="btn btn-success mt-5"
                @click="setAnimal(a)"
              >Meet {{a.name}}</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal starts here -->
      <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        :key="modalKey"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                v-if="currentAnimal"
              >Meet {{currentAnimal.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <video v-if="currentAnimal" id="videoElement" controls width="100%">
                <source :src="getVid(currentAnimal.vid)" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";
// import $ from "jquery";

export default {
  data() {
    return {
      currentAnimal: null,
      animals: [
        {
          name: "Yuki",
          img: "yuki.jpg",
          vid: "yukivideo.mp4"
        },
        {
          name: "Khan",
          img: "khan.jpg",
          vid: "khan.mp4"
        },
        {
          name: "Bambi",
          img: "bambi.jpg"
        },
        {
          name: "locka jeme",
          img: "tara.jpg"
        }
      ],
      modalKey: 1
    };
  },
  name: "Animals",
  components: {
    Navbar
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    },
    getVid(vid) {
      return require("../assets/videos/" + vid);
    },
    setAnimal(a) {
      this.currentAnimal = a;
      this.modalKey++;
    }
  }
};
</script>

<style scoped>
</style>