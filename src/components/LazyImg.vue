<template>
  <div class="lazy-img">
    <div v-if="!loaded"></div>
    <img :src="src" v-if="loaded">
  </div>
</template>

<script>
export default {
  props: ['src'],

  data () {
    return {
      loaded: false
    }
  },

  mounted () {
    const img = new Image()
    img.src = this.src
    img.addEventListener('load', () => { this.loaded = true })
  }
}
</script>

<style>
.lazy-img > img {
  max-width: 100%;
}
</style>
