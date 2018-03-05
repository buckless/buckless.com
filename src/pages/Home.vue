<template>
  <div>
    <b-waves />
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
import Waves from '@/components/Waves'
import Numbers from '@/components/Numbers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
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
