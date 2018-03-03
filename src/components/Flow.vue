<template>
  <div class="flow">
    <div class="flow__header" ref="container">
      <div class="flow__header__circles" ref="header">
        <div @click="changePage(0)">
          <div class="flow__header__circle">
            <svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
          </div>
          <div class="flow__header__title" :class="currentPage === 0 && 'flow__header__title--active'">Intégration</div>
        </div>
        <div @click="changePage(1)">
          <div class="flow__header__circle">
            <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          <div class="flow__header__title" :class="currentPage === 1 && 'flow__header__title--active'">Sécurité</div>
        </div>
        <div @click="changePage(2)">
          <div class="flow__header__circle">
            <svg viewBox="0 0 24 24"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>
          </div>
          <div class="flow__header__title" :class="currentPage === 2 && 'flow__header__title--active'">Robustesse</div>
        </div>
        <div @click="changePage(3)">
          <div class="flow__header__circle">
            <svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
          </div>
          <div class="flow__header__title" :class="currentPage === 3 && 'flow__header__title--active'">Trésorerie</div>
        </div>
      </div>
      <div class="flow__header__arrow" :style="arrowLeft"></div>
    </div>
    <div class="flow__content container">
      <transition name="fade" mode="out-in">
        <div class="flow__content__page flow__content__page-1" key="rebranding" v-if="currentPage === 0">
          <div class="container">
            <div class="row">
              <div class="md-7">
                <h2>Intégration</h2>
                <p>
                  Personnalisez l'apparence de vos cartes ou bracelets et créez des souvenirs pour vos participants.
                  Intégrez la gestion du compte cashless au sein de votre site internet pour une fluidité inégalée.
                </p>
                <b-image-comparator
                  darkMode
                  :initialValue="0.7"
                  :image1="before"
                  :image2="after"/>
              </div>
            </div>
          </div>
        </div>
        <div class="flow__content__page flow__content__page-2" key="security" v-if="currentPage === 1">
          <div class="container">
            <div class="row">
              <div class="md-7">
                <h2>Sécurité</h2>
                <p>
                  Prévenez vos vendeurs avec un système d’alerte en temps réel. Les conducteurs ou les mineurs peuvent avoir des prix personnalisés. Vos vendeurs peuvent même prévenir les équipes de secours en cas d’incident.
                </p>
                <b-alert />
              </div>
            </div>
          </div>
        </div>
        <div class="flow__content__page flow__content__page-3" key="offline" v-if="currentPage === 2">
          <div class="container">
            <div class="row">
              <div class="md-7">
                <h2>Robustesse</h2>
                <p>
                  Un problème de réseau ? Si une borne se déconnecte momentanément du serveur, elle continue de fonctionner. Elle se synchronise dès la reconnexion ou à la fin de l'évènement.
                </p>
                <img src="../assets/offline.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="flow__content__page flow__content__page-4" key="tresorerie" v-if="currentPage === 3">
          <div class="container">
            <div class="row">
              <div class="md-7">
                <h2>Trésorerie</h2>
                <p>
                  Graphiques intégrés à l'application. Vous avez vos propres outils de data vizualisation ou vos outils de trésorerie ? Nous exportons dans un format compatible.
                </p>
                <img src="../assets/charts.png">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Alert from './Flow-Alert'
import before from '../assets/before.jpg'
import after from '../assets/after.jpg'

export default {
  components: {
    'b-alert': Alert
  },

  data () {
    return {
      currentPage: null,
      arrowLeft: '',
      timeout: 0,
      before,
      after
    }
  },

  methods: {
    update () {
      if (this.currentPage === null) {
        return { transform: 'translateX(0)' }
      }

      const circle = this.$refs.header.children[this.currentPage].getBoundingClientRect()
      const container = this.$refs.container

      this.arrowLeft = {
        transform: `translateX(${container.scrollLeft + circle.x + circle.width / 2}px)`
      }
    },

    changePage (page) {
      this.currentPage = page
      this.update()
    }
  },

  mounted () {
    this.currentPage = 0
    this.update()

    window.addEventListener('resize', () => {
      cancelAnimationFrame(this.timeout)
      requestAnimationFrame(this.update)
    }, { passive: true })
  }
}
</script>

<style>
.flow__header {
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: overlay;
  height: 180px;
  background-color: #f4f4f4;
}

.flow__header__circles,
.flow__header__titles {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
}

.flow__header__circle {
  display: flex;
  position: relative;
  height: 80px;
  width: 80px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 3px 3px 0 #1abc9c;
  cursor: pointer;
}

.flow__header__circles > div:not(:last-child) {
  margin-right: 48px;
}

.flow__header__circle > svg {
  height: 36px;
  width: 36px;
}

.flow__header__circle > svg > path {
  fill: #444;
}

.flow__header__title {
  position: relative;
  margin-top: 10px;
  background-color: #444;
  padding: 3px 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
  border-radius: 2px;
  color: #fff;
}

.flow__header__title--active {
  background-color: #1abc9c;
  color: #fff;
}

.flow__header__arrow {
  position: absolute;
  bottom: 0;
  left: 0;
  will-change: transition;
  transition: .1s transform ease-out;
}

.flow__header__arrow:before {
  position: absolute;
  bottom: 100%;
  height: 0;
  width: 0;
  left: 50%;
  margin-left: -16px;

  border: solid transparent;
  content: '';
  pointer-events: none;
  border-color: transparent;
  border-bottom-color: #fff;
  border-width: 16px;
}

.flow__content__page {
  padding-top: 24px;
}

.flow__content__page-1 {
  padding-bottom: 24px;
}

.flow__content__page-2 {
  padding-bottom: 24px;
}

.flow__content__page-3 {
  min-height: 0;
  max-height: 379px;
  overflow: hidden;
}

.flow__content__page-3 img {
  max-width: 100%;
  transform: translateY(20px);
  transition: .1s ease-out transform;
}

.flow__content__page-3 img:hover {
  transform: translateY(0);
}

.flow__content__page .md-7 {
  margin: 0 auto;
}

.flow__content__page-4 {
  min-height: 0;
  overflow: hidden;
}

.flow__content__page-4 img {
  max-width: 100%;
  transform: translateY(20px);
  transition: .1s ease-out transform;
}

.flow__content__page-4 img:hover {
  transform: translateY(0);
}

@media(min-width: 568px) {
  .flow__header {
    justify-content: center;
  }
}
</style>
