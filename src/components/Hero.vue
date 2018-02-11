<template>
  <div class="hero container">
    <div class="row">
      <div class="cta md-5">
        <h1>Cashless simple et libre</h1>
        <div class="form">
          <input placeholder="Entrez votre adresse mail" autofocus autocomplete="off">
          <button class="button">
            <span class="validate">Valider</span>
            <svg fill="#fff" height="13" viewBox="0 0 16 13" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41 0L8 1.41l4.17 4H0v2h12.17l-4.17 4 1.41 1.41L16 6.41z"/>
            </svg>
          </button>
        </div>
        <p>Envoyez-moi une plaquette</p>
      </div>
      <div class="image md-7">
        <img class="responsive-image" src="https://picsum.photos/1000/1000">
      </div>
    </div>
  </div>
</template>

<style>
.hero .cta {
  margin-top: 12px;
}

.hero .cta h1 {
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
  /* Remove shadow height */
  height: calc(100% - 3px);
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

@media (min-width: 380px) {
  .hero .validate {
    display: inline;
    margin-right: 8px;
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

@media (min-width: 992px) {
  .hero {
    height: calc(100vh - 80px - 70px);
    margin-top: 80px;
  }
}
</style>
