<template>
  <div id="app">
    <b-waves />
    <b-header />
    <b-hero />
    <b-yourevent />
    <b-flow />
    <b-numbers />
    <b-contact>
      <h2 slot="before">Envoyez-moi un devis</h2>
    </b-contact>
    <b-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import YourEvent from '@/components/YourEvent'
import Flow from '@/components/Flow'
import Waves from '@/components/Waves'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  name: 'app',

  components: {
    'b-header': Header,
    'b-hero': Hero,
    'b-yourevent': YourEvent,
    'b-flow': Flow,
    'b-waves': Waves,
    'b-numbers': Numbers,
    'b-contact': Contact,
    'b-footer': Footer
  }
}
</script>

<style src="./main.css"></style>

<style>
#app > .contact-wrapper {
  padding: 64px 0;
}

#app > .contact-wrapper h2 {
  margin-top: 0;
  margin-bottom: 18px;
}
</style>
