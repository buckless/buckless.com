<template>
  <div class="numbers">
    <div class="container">
      <div class="row">
        <div class="md-6">
          <div class="numbers__circle">+20%</div>
          <p>
            C'est l'augmentation moyenne de consommation observée sur un évènement après la mise en place d'un système cashless. C'est l'augmentation moyenne de consommation observée sur un évènement après la mise en place d'un système cashless. C'est l'augmentation moyenne de consommation observée sur un évènement après la mise en place d'un système cashless.
          </p>
        </div>
        <div class="md-6">
          <div class="numbers__circle">7-9s</div>
          <p>
            Foo bar foo bar
          </p>
        </div>
      </div>
      <div class="row">
        <div class="md-6">
          <div class="numbers__circle">&lt;1%</div>
          <p>
            Foo bar foo bar
          </p>
        </div>
        <div class="md-6">
          <div class="numbers__circle">1min</div>
          <p>
            Foo bar foo bar
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.numbers {
  background-color: #eaeaea;
}

.numbers .row {
  padding: 60px 0;
}

.numbers .md-6 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 0;
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
</style>
