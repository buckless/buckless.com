<template>
  <div class="numbers">
    <div class="container">
      <div class="row">
        <div class="md-5">
          <div class="numbers__circle">+20%</div>
          <h3>Augmentation de la consommation</h3>
          <p>
            C'est l'augmentation moyenne de la consommation observée sur un évènement après la mise en place d'un système cashless.
          </p>
        </div>
        <div class="md-2"></div>
        <div class="md-5">
          <div class="numbers__circle">7-9s</div>
          <h3>Durée moyenne de transaction</h3>
          <p>
            Une transaction utilisant du liquide dure en moyenne 30 secondes. Accélérez vos flux avec le cashless. Plus besoin de monnaie, plus besoin de sortir son moyen de paiement.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="md-5">
          <div class="numbers__circle">&lt;1%</div>
          <h3>Taux d'erreur moyen</h3>
          <p>
            Une fois que le cashless est mis en place, il devient rare de faire une erreur involontaire de paiement. Impossible de se tromper en rendant la monnaie ou en choisissant le prix: ils sont calculés automatiquement (VIP, promotions, etc.) !
          </p>
        </div>
        <div class="md-2"></div>
        <div class="md-5">
          <div class="numbers__circle">1min</div>
          <h3>Temps de formation opérateur</h3>
          <p>
            L'interface a été pensée pour être la plus simple possible: il n'est pas nécessaire d'apporter plus d'une minute de formation aux opérateurs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.numbers {
  background-color: #f4f4f4;
  padding: 60px 0;
}

.numbers .row {
  margin: 0;
}

.numbers .md-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.numbers__circle {
  height: 85px;
  width: 85px;
  background-color: #444;
  border-radius: 50%;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

@media(min-width: 992px) {
  .numbers {
    overflow: hidden;
  }

  .numbers .row {
    margin: 60px -16px;
  }

  .numbers .md-5 {
    margin-bottom: 24px;
  }
}
</style>
