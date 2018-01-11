<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  background-color: #23262c;
  background-image: radial-gradient(
    circle at center,
    rgba(101, 117, 135, 0.9) 0%,
    rgba(101, 117, 135, 0) 100%
  );
  background-repeat: no-repeat;
}

body {
  font-size: 16px;
  margin: 0;
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 950px) {
  html {
    background-image: radial-gradient(
      circle at top center,
      rgba(101, 117, 135, 0.9) 0%,
      rgba(101, 117, 135, 0) 85%
    );
  }
}
</style>
