<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Thank you for making a change!</h1>
      <p class="lead">
        The act of volunteering for our endagered center is highly welcomed and
        appreciated!
      </p>
      <hr class="my-4" />
      <p>
        Please fill out the information below and we'll reach out to you as soon
        as possible.
      </p>
    </div>
    <div id="contact">
      <div class="contact-form" style="min-width: 500px; max-width: 500px;">
        <h4>Volunteering Form</h4>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1" style="color: grey;"
              >Your email address</label
            >
            <input
              type=" email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" style="color: grey;"
              >Your name</label
            >
            <input
              type=" email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <label for="exampleFormControlInput1" style="color: grey;"
            >Your available days for volunteering</label
          >
          <br />
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">Monday</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Twosday</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Wednesday</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Thursday</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">Friday</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1"
              >Saturday</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">Sunday</label>
          </div>

          <br />

          <label for="exampleFormControlInput1" style="color: grey;"
            >Message</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button
            type="submit"
            class="btn"
            style="margin-top: 15px; width: 120px;"
          >
            SEND NOW
          </button>
        </form>
      </div>

      <div class="contact-info" style="max-width: 500px; margin-bottom: 50px;">
        <h4 style="margin-bottom: 25px;">Contact Information</h4>
        <div class="rows">
          <a href="#" class="cog"><i class="fa fa-envelope fa-2x"></i></a>
          <p>vix@wildlife-center.org</p>
        </div>
        <div class="rows">
          <a href="#" class="cog"><i class="fa fa-phone fa-2x"></i></a>
          <p>+383 (0) 45 123 456</p>
        </div>
        <div class="rows">
          <a href="#" class="cog"><i class="fa fa-address-card fa-2x"></i></a>
          <p>Prishtina, Kosovo</p>
        </div>

        <div class="rows">
          <a href="#" class="cog"><i class="fa fa-shipping-fast fa-2x"></i></a>
          <p>vix@wildlife-center.org</p>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h3 class="display-4">Why volunteering matters..</h3>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Volunteer',
};
</script>

<style scoped>
#contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.rows {
  display: flex;
  justify-content: space-between;
}

.contact-info {
  margin-top: 50px;
  align-self: center;
}

@media only screen and (min-width: 992px) {
  .contact-info {
    margin-top: 0;
  }

  .rows {
    justify-content: flex-start;
    align-items: center;
  }

  .rows p {
    margin-left: 15px;
  }
}
</style>
