<template>
  <div class="bantuan-section d-flex">
    <section class="container">
      <p
        id="text-hub"
        style="font-size: 2.6rem; color: #ffffff; line-height: 150px; font-family: 'montserrat-light'; font-weight: 200; display: inline-block;"
      >
        Perlu <span class="font-weight-bold">BANTUAN?</span> Hubungi Kami :
        <span class="font-weight-bold">0274-5305505</span>
      </p>
      <Button
        classNameBtn="btn-standard"
        idBack="btn-hubungi"
        text="Live Chat"
        icon="chat"
      />
    </section>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Bantuan",
  components: {
    Button,
  },
};
</script>
