<template>
  <footer>
    &copy; {{ year }} Studio Async.
    <div class="space" />
    <!-- <a href="#">L'entreprise</a> -->
    <router-link to="medias">Médias</router-link>
    <router-link to="mentions-legales">Mentions légales</router-link>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  }
}
</script>

<style>
footer {
  background-color: #444;
  color: #fff;
  padding: 48px;
}

footer a {
  color: #fff;
}

@media (min-width: 768px) {
  footer .space {
    height: 10px;
  }
}
</style>
