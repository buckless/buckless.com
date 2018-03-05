<template>
  <div class="medias">
    <b-header />
    <main class="container">
      <h1>Médias</h1>
      <h2>Logos</h2>
      <img class="white" src="/static/logos/logo.full.black.transparent.svg">
      <div class="links">
        <a href="/static/logos/logo.full.black.transparent.svg">SVG</a>
        <a href="/static/logos/logo.full.black.transparent.png">PNG</a>
        <a href="/static/logos/logo.full.black.transparent@2x.png">PNG (x2)</a>
      </div>
      <img class="white" src="/static/logos/logo.full.black.white.svg">
      <div class="links">
        <a href="/static/logos/logo.full.black.white.svg">SVG</a>
        <a href="/static/logos/logo.full.black.white.png">PNG</a>
        <a href="/static/logos/logo.full.black.white@2x.png">PNG (x2)</a>
      </div>
      <img src="/static/logos/logo.full.white.black.svg">
      <div class="links">
        <a href="/static/logos/logo.full.white.black.svg">SVG</a>
        <a href="/static/logos/logo.full.white.black.png">PNG</a>
        <a href="/static/logos/logo.full.white.black@2x.png">PNG (x2)</a>
      </div>
      <img src="/static/logos/logo.full.white.blue.svg">
      <div class="links">
        <a href="/static/logos/logo.full.white.blue.svg">SVG</a>
        <a href="/static/logos/logo.full.white.blue.png">PNG</a>
        <a href="/static/logos/logo.full.white.blue@2x.png">PNG (x2)</a>
      </div>
      <img class="white" src="/static/logos/logo.black.transparent.svg">
      <div class="links">
        <a href="/static/logos/logo.black.transparent.svg">SVG</a>
        <a href="/static/logos/logo.black.transparent.png">PNG</a>
        <a href="/static/logos/logo.black.transparent@2x.png">PNG (x2)</a>
      </div>
      <img class="white" src="/static/logos/logo.black.white.svg">
      <div class="links">
        <a href="/static/logos/logo.black.white.svg">SVG</a>
        <a href="/static/logos/logo.black.white.png">PNG</a>
        <a href="/static/logos/logo.black.white@2x.png">PNG (x2)</a>
      </div>
      <img src="/static/logos/logo.white.black.svg">
      <div class="links">
        <a href="/static/logos/logo.white.black.svg">SVG</a>
        <a href="/static/logos/logo.white.black.png">PNG</a>
        <a href="/static/logos/logo.white.black@2x.png">PNG (x2)</a>
      </div>
      <img src="/static/logos/logo.white.blue.svg">
      <div class="links">
        <a href="/static/logos/logo.white.blue.svg">SVG</a>
        <a href="/static/logos/logo.white.blue.png">PNG</a>
        <a href="/static/logos/logo.white.blue@2x.png">PNG (x2)</a>
      </div>
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
.medias main {
  text-align: center;
  padding-top: 100px;
}

.medias img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.medias img.white {
  border: 1px solid #afafaf;
}

.medias .links {
  margin: 12px 0 48px 0;
  text-align: center;
}

.medias .links a,
.medias .links a:visited {
  position: relative;
  color: #1abc9c;
  text-decoration: none;
}

.medias .links a:after {
  content: '';
  position: absolute;
  opacity: 0.5;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background-color: #1abc9c;
  transition: .2s ease-out opacity;
}

.medias .links a:hover:after {
  opacity: 1;
}

.medias .links a:not(:last-child) {
  margin-right: 5px;
}
</style>
