<template>
  <header :class="isScrolling">
    <div class="container">
      <a href="/">
        <img src="../assets/buckless.small.png" alt="Buckless Logo" height="47" width="30">
        <h1>Buckless</h1>
      </a>
      <div class="space"></div>
      <a class="button" href="mailto:contact@buckless.com" target="_blank">Contact</a>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrolling: false
    }
  },

  computed: {
    isScrolling () {
      return { 'is-scrolling': this.scrolling }
    }
  },

  methods: {
    checkScrolling () {
      this.scrolling = window.scrollY > 0
      requestAnimationFrame(this.checkScrolling)
    }
  },

  mounted () {
    requestAnimationFrame(this.checkScrolling)
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  height: 70px;
  width: 100vw;
  z-index: 50;

  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.12);
}

header.is-scrolling {
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}

header .container {
  display: flex;
  height: 100%;
  align-items: center;
}

header img {
  margin-right: 16px !important;
}

header a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

header a:visited {
  color: inherit;
}

header h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 300;
}

header a.button {
  height: 36px;
}

header .space {
  flex: 1;
}

@media (min-width: 576px) {
  header {
    font-size: 2rem;
  }
}
</style>
