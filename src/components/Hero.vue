<template>
  <b-part class="hero" contentPadding="100">
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
    <img slot="image" class="responsive-image" src="https://picsum.photos/1000/1000">
  </b-part>
</template>

<style>
.hero h1 {
  margin: 12px 0;
}

.hero .form {
  display: flex;
  height: 44px;
}

.hero input,
.hero button {
  flex: 1;
  border-radius: 4px;
  font-size: 16px;
}

.hero input {
  padding: 12px;
  min-width: 210px;
  margin-right: 16px;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}

.hero input:focus {
  outline: 0;
  border: 1px solid #1abc9c;
}

.hero button {
  /* Remove shadow height */
  height: calc(100% - 3px);
  color: #fff;
  cursor: pointer;
  border: 0;
  background-color: #1abc9c;
  font-weight: 500;
}

.hero button:hover {
  background-color: #1bc9a6;
}

.hero button:focus {
  outline: 0;
  background-color: #17a98c;
}

.hero button:active {
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
</style>
