<template>
  <div>
    <div
      class="container-fluid d-flex flex-column  justify-content-center"
    >
      <div class="row">
        <img
          class="b-image"
          src="../assets/images/hedgehog.jpg"
          alt="hedgehog"
        />
        <span class="title">Wildlife Advice</span>
      </div>
      <div class="my-5">
        <h2 class="font-weight-bold">
          Sightings, sick, injured, or dead animals
        </h2>
        <h4 class="my-4 mx-5">
          Seeing wildlife can be incredible, but it can be hard to know what to
          do in certain situations. Maybe you have come across an injured or
          dead animal, or maybe you suspect that a crime has been committed. Our
          wildlife advice pages will help you know what to do and who to contact
          if you do find yourself in these situations.
        </h4>
      </div>
      <div class="container">
        <img
          src="../assets/images/holding-hedgehog.jpg"
          class="float-left"
        />
        <h4 class="my-5 mx-2 font-weight-bold">
          We do not offer a general service for the care and rehabilitation of
          wildlife. We also do not offer any services related to the discovery,
          reporting, or disposal of dead animals, but our advice pages will help
          you know what to do if you find one.
        </h4>
      </div>
      <div class="my-5 container">
        <h3 class="font-weight-bold" style="text-decoration:underline;">
          Quick contacts
        </h3>
        <h4 class="font-weight-bold my-4">Injured wildlife</h4>
        <h5>
          If you find an injured wild animal, watch it first to see how badly
          hurt it is. Then if possible take it to a nearby vet or wildlife
          rehabilitator (call first to make sure they can take and treat the
          animal). It's often faster to take an animal to a vet or wildlife
          rehabilitator yourself as our nearest officer may be out of the area
          attending other calls.
        </h5>
        <h4 class="font-weight-bold my-3">Caution!</h4>
        <h5 class="font-weight-bold my-3">
          Wild animals can scratch and bite when frightened, particularly if
          they are injured. If in doubt, keep a safe distance and call us.
        </h5>
        <h5 class="text-left my-4">
          Apply common sense when approaching an injured animal:
        </h5>
        <ul class="text-left">
          <li>
            <span class="font-weight-bold text-danger"
              >Do not attempt to handle or transport</span
            >
            an injured deer, seal, wild boar, otter, badger, fox, snake, bird of
            prey (including owls), swan, goose, heron or gull, keep a safe
            distance.
          </li>
          <li>
            <span class="font-weight-bold text-danger">Never</span> lift a wild
            animal, unless you are sure that you can do so without risk to
            yourself or others.
          </li>
          <li>
            <span class="font-weight-bold text-danger">Wear gloves</span> when
            handling all wild animals, especially oiled wildlife - pollutants
            like oil can be hazardous.
          </li>
          <li>
            <span class="font-weight-bold text-danger">Keep</span> the animal
            away from your face.
          </li>
          <li>
            <span class="font-weight-bold text-danger">Wash your hands</span>
            thoroughly after handling an animal.
          </li>
          <li>
            <span class="font-weight-bold text-danger">Take care</span> in
            dangerous locations, such as a busy road. Watch from a distance
            first to see whether the animal is still alive, call for help if you
            can't reach it safely.
          </li>
        </ul>
        <h4 class="font-weight-bold my-4">Wildlife crime</h4>
        <h5>
          If you witness a wildlife crime taking place, call 999. For a
          non-emergency, call 101. If you would like to give information
          regarding a crime anonymously,
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  components: {},
};
</script>

<style>
.b-image {
  width: 100%;
}

.row {
  position: relative;
}

.title {
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 8px;
  animation: 4s left 0s;
}

@media only screen and (min-width: 768px) {
  .title{
    font-size: 5rem;
  }
}

.container img {
  width: 450px;
}

li {
  font-size: 16px;
}

@keyframes left {
  0% {
    opacity: 0;
    left: 0px;
  }

  5% {
    opacity: 1;
    left: 50px;
  }
}
</style>
