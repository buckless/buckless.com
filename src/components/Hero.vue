<template>
  <div class="hero container">
    <b-waves />
    <h1>Le cashless qui sécurise votre évènement</h1>
    <b-contact>
      <p slot="after">Je suis intéressé</p>
    </b-contact>
    <div class="image"></div>
  </div>
</template>

<script>
import Contact from './Contact'
import Waves from '@/components/Waves'

export default {
  components: {
    'b-waves': Waves,
    'b-contact': Contact
  }
}
</script>

<style>
.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  padding: 70px 0;
  text-align: center;
}

.hero h1 {
  padding: 0 4px;
  margin: 64px 0 40px 0;
  position: relative;
  z-index: 2;
}

.hero .contact-wrapper {
  position: relative;
  margin-bottom: 30px;
  z-index: 2;
}

.hero .image {
  position: relative;
  z-index: 2;
  min-height: 250px;
  background-image: url("../assets/hero.png");
  flex: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.hero .contact-wrapper p {
  margin-bottom: 0;
}

@media (min-width: 992px) {
  .hero {
    padding: 70px 0 20px 0;
  }
}
</style>
