<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col" v-for="a in animals" v-bind:key="a.name">
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
                :data-target="'#'+a.name"
                class="btn btn-success mt-5"
              >Meet {{a.name}}</button>

              <!-- Modal starts here -->
              <div
                class="modal fade"
                :id="a.name"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Meet {{a.name}}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <video controls width="100%">
                        <source src="../assets/videos/yukivideo.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
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
  data() {
    return {
      animals: [
        {
          name: "Yuki",
          img: "yuki.jpg"
        },
        {
          name: "Tara",
          img: "tara.jpg"
        },
        {
          name: "Bambi",
          img: "bambi.jpg"
        }
      ]
    };
  },
  name: "Animals",
  components: {
    Navbar
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    }
  }
};
</script>

<style scoped>
</style>