<template>
  <div id="app">
    <b-header />
    <b-hero />
    <b-yourevent />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import YourEvent from '@/components/YourEvent'

export default {
  name: 'app',

  components: {
    'b-header': Header,
    'b-hero': Hero,
    'b-yourevent': YourEvent
  }
}
</script>

<style src="./main.css"></style>
<style>
</style>
