<template>
  <div id="app">
    <b-header />
    <b-hero />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default {
  name: 'app',

  components: {
    'b-header': Header,
    'b-hero': Hero
  }
}
</script>

<style src="./main.css"></style>
<style>
</style>
