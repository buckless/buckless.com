<template>
  <div id="app">
    <b-waves />
    <b-header />
    <b-hero />
    <b-yourevent />
    <b-flow />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import YourEvent from '@/components/YourEvent'
import Flow from '@/components/Flow'
import Waves from '@/components/Waves'

export default {
  name: 'app',

  components: {
    'b-header': Header,
    'b-hero': Hero,
    'b-yourevent': YourEvent,
    'b-flow': Flow,
    'b-waves': Waves
  }
}
</script>

<style src="./main.css"></style>
<style>
</style>
