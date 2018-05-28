<template>
  <div class="your-event container">
    <div class="row">
      <div class="image md-7">
        <img slot="image" class="responsive-image" alt="Votre évènement" src="../assets/yourevent.jpg">
      </div>
      <div class="md-5">
        <h2 style="margin-top: 0">Votre évènement</h2>
        <p>
          Arrêtez d'adapter votre évènement aux contraintes du paiement&nbsp;: le cashless s'adapte à vous.
          Finies les contraintes de délestage et les files d'attente interminables, nos terminaux mobiles possèdent une autonomie de plusieurs jours et se rechargent sans fil.
        </p>
        <h2>Votre monnaie</h2>
        <p>
          Profitez d'une monnaie dématerialisée sur laquelle vous avez un contrôle total.
          Oubliez l'obligation des prix ronds en jeton ou en ticket de consommation. Évitez les frais bancaires inutiles.
        </p>
        <h2>Votre cashless</h2>
        <p>
          Personnalisez votre cashless — Rendez l'expérience unique pour vos visiteurs.
          Nos solutions de marque blanche permettent l'intégration de votre charte graphique le plus fidèlement possible.
        </p>
      </div>
    </div>
    <div class="row partners">
      <div class="md-12">
        <h2>Partenaires</h2>
        <div class="imgs">
          <LazyImg :src="gala" />
          <LazyImg :src="grandest" />
          <LazyImg :src="adutt" />
          <LazyImg :src="tekliss" />
          <LazyImg :src="waycom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImg from './LazyImg'

import gala from '../assets/partner.gala.utt.png'
import grandest from '../assets/partner.grand.est.jpg'
import adutt from '../assets/partner.adutt.png'
import tekliss from '../assets/partner.tekliss.png'
import waycom from '../assets/partner.waycom.png'

export default {
  components: {
    LazyImg
  },

  data () {
    return {
      gala,
      grandest,
      adutt,
      tekliss,
      waycom
    }
  }
}
</script>

<style>
.your-event {
  margin: 60px auto;
}

.your-event .image {
  margin-bottom: 24px;
}

.partners {
  margin-top: 24px;
}

.partners .lazy-img {
  max-width: 120px;
  margin: 0 auto;
}

.partners .imgs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-column-gap: 16PX;
  grid-row-gap: 16px;
  align-items: center;
  margin: 16px;
}

@media (min-width: 992px) {
  .your-event .image {
    margin-bottom: 0;
  }
}
</style>
