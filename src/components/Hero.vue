<template>
  <div class="hero container">
    <h1>Le cashless qui sécurise votre évènement</h1>
    <b-contact>
      <p slot="after">Je suis intéressé</p>
    </b-contact>
    <div class="image"></div>
  </div>
</template>

<script>
import Contact from './Contact'

export default {
  components: {
    'b-contact': Contact
  }
}
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 120px 0 60px 0;
  overflow: hidden;
  text-align: center;
}

.hero h1 {
  margin: 12px 0;
}

.hero .contact-wrapper {
  margin-bottom: 48px;
}

.hero .image {
  background-image: url("../assets/hero.png");
  flex: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
