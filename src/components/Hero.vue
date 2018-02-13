<template>
  <div class="hero container">
    <h1>Cashless simple et libre</h1>
    <div class="form">
      <input placeholder="Entrez votre adresse mail" autofocus autocomplete="off">
      <button class="button">
        Valider
        <svg fill="#fff" height="13" viewBox="0 0 16 13" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.41 0L8 1.41l4.17 4H0v2h12.17l-4.17 4 1.41 1.41L16 6.41z"/>
        </svg>
      </button>
    </div>
    <p>Envoyez-moi une plaquette</p>
    <div class="image"></div>
  </div>
</template>

<style>
.hero {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 120px 0 60px 0;
  overflow: hidden;
  text-align: center;
}

.hero h1 {
  margin: 12px 0;
}

.hero .form {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 24px auto 0 auto;
  max-width: 570px;
}

.hero input,
.hero button {
  flex: 1;
  border-radius: 4px;
  font-size: 16px;
}

.hero input {
  flex: 2;
  padding: 12px;
  min-width: 210px;
  margin-bottom: 16px;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}

.hero input:focus {
  outline: 0;
  border: 1px solid #1abc9c;
}

.hero button {
  /* Remove shadow height */
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

.hero svg {
  margin-left: 4px;
}

.hero p {
  margin-bottom: 48px;
}

.hero .image {
      background-image: url(/static/img/hero.0fdc275.jpg);
      flex: 1;
      background-size: cover;
}

@media (min-width: 768px) {
  .hero .form {
    flex-direction: row;
  }

  .hero input {
    margin-bottom: 0;
    margin-right: 16px;
  }
}
</style>
