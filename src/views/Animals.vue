<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 my-3" v-for="a in animals" v-bind:key="a.name">
          <div class="card">
            <img v-bind:src="getImg(a.img)" class="card-img-top" />
            <div class="card-body">
              <h2>{{ a.name }}</h2>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aperiam placeat id, non error excepturi reprehenderit?
                Soluta asperiores voluptate beatae totam animi, laborum mollitia
                sequi natus, aut eligendi quos dignissimos.
              </h5>

              <!-- Modal trigger -->
              <button
                type="button"
                data-toggle="modal"
                data-target="#videoModal"
                class="btn btn-success mt-5"
                @click="setAnimal(a)"
              >
                Meet {{ a.name }}
              </button>
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
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                v-if="currentAnimal"
              >
                Meet {{ currentAnimal.name }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="stopVideo"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <video
                v-if="currentAnimal"
                id="videoElement"
                controls
                width="100%"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fire from '../firebase';

export default {
  data() {
    return {
      currentAnimal: null,
      animals: [],
      modalKey: 1,
    };
  },
  name: 'Animals',
  async created() {
    const db = fire.firestore();
    const that = this;

    db.collection('animals')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          that.animals.push(doc.data());
        });
      });
  },
  methods: {
    getImg(img) {
      return require('../assets/images/' + img);
    },
    async getVid(vidName) {
      const storage = fire.storage();
      const pathRef = storage.ref(vidName);

      const src = await pathRef.getDownloadURL();

      var video = document.getElementById('videoElement');
      var source = document.createElement('source');
      source.setAttribute('src', src);
      video.appendChild(source);
    },
    setAnimal(a) {
      this.currentAnimal = a;
      this.modalKey++;
      this.getVid(a.vid);
    },
    stopVideo() {
      var video = document.getElementById('videoElement');
      video.pause();
    },
  },
};
</script>

<style scoped>
#videoModal {
  overflow-y: scroll;
}

.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.02, 1.05);
}
</style>
