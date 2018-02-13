<template>
  <div id="app">
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

export default {
  name: 'app',

  components: {
    'b-header': Header,
    'b-hero': Hero,
    'b-yourevent': YourEvent,
    'b-flow': Flow
  }
}
</script>

<style src="./main.css"></style>
<style>
</style>
