<template>
  <div class="thanks">
    <b-header />
    <main class="container">
      <h1>Nous avons bien reçu votre demande</h1>
      <p>Nous y répondrons le plus rapidement possible</p>
      <router-link to="/" class="button">Retour au site</router-link>
    </main>
    <b-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'b-header': Header,
    'b-footer': Footer
  }
}
</script>

<style>
.thanks {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.thanks main {
  flex: 1;
  padding-top: 100px;
  max-width: 320px;
  min-width: 170px;
  margin: 0 auto;
}
</style>
