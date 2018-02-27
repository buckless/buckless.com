<template>
  <footer>
    &copy; {{ year }} Studio Async.
    <div class="space" />
    <a href="#">L'entreprise</a>
    <a href="#">Médias</a>
    <a href="#">Mentions légales</a>
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
