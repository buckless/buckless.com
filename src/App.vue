<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./main.css"></style>

<style>
#app > .contact-wrapper {
  padding: 64px 10%;
}

#app > .contact-wrapper h2 {
  margin-top: 0;
  margin-bottom: 18px;
}
</style>
