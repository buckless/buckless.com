<template>
  <div class="home">
    <b-header />
    <b-hero />
    <b-yourevent />
    <b-flow />
    <b-numbers />
    <b-contact>
      <h2 slot="before">Je suis intéressé</h2>
    </b-contact>
    <b-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import YourEvent from '@/components/YourEvent'
import Flow from '@/components/Flow'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    'b-header': Header,
    'b-hero': Hero,
    'b-yourevent': YourEvent,
    'b-flow': Flow,
    'b-numbers': Numbers,
    'b-contact': Contact,
    'b-footer': Footer
  }
}
</script>

<style>
.home {
  overflow-x: hidden;
}

.home:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}

.home > .contact-wrapper {
  padding: 64px 10%;
  box-shadow: none;
}

.home > .contact-wrapper h2 {
  margin-top: 0;
  margin-bottom: 18px;
}
</style>
