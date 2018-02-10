<template>
  <div class="hero container">
    <div class="row">
      <div class="cta md-5">
        <h1>Cashless simple et libre</h1>
        <div class="form">
          <input placeholder="Entrez votre adresse mail">
          <button class="button">
            <span class="validate">Valider</span>
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
      <div class="image md-7">
        <img src="https://picsum.photos/3000/2000">
      </div>
    </div>
  </div>
</template>

<style>
.hero .cta {
  margin-top: 12px;
}

.hero .cta h1 {
  font-weight: 500;
  margin: 12px 0;
}

.hero .form {
  display: flex;
  height: 44px;
}

.hero .cta input,
.hero .cta button {
  flex: 1;
  border-radius: 4px;
  font-size: 16px;
}

.hero .cta input {
  padding: 12px;
  min-width: 210px;
  margin-right: 16px;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}

.hero .cta input:focus {
  outline: 0;
  border: 1px solid #1abc9c;
}

.hero .cta button {
  height: 100%;
  color: #fff;
  cursor: pointer;
  border: 0;
  background-color: #1abc9c;
  font-weight: 500;
}

.hero .cta button:hover {
  background-color: #1bc9a6;
}

.hero .cta button:focus {
  outline: 0;
  background-color: #17a98c;
}

.hero .cta button:active {
  background-color: #14967c;
}

.hero .arrow {
  margin-left: 4px;
}

.hero .validate {
  display: none;
}

.hero .image {
  margin-top: 16px;
}

.hero .image img {
  width: 100%;
}

@media (min-width: 380px) {
  .hero .validate {
    display: inline;
  }
}

@media (min-width: 576px) {
  .hero .cta {
    margin-top: 100px;
  }

  .hero .image {
    margin-top: 40px;
  }
}
</style>
