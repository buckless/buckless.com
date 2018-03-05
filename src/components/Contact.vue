<template>
  <div class="contact-wrapper">
    <slot name="before" />
    <form action="https://formspree.io/contact@buckless.com" method="post" class="contact">
      <input type="mail" name="email" placeholder="Entrez votre adresse mail" autofocus="autofocus" autocomplete="off">
      <input type="hidden" name="message" value="Demande de contact">
      <input type="hidden" name="_next" value="http://buckless.com/thanks" />
      <button class="button">
        Valider
        <svg fill="#fff" height="13" viewBox="0 0 16 13" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9.41 0L8 1.41l4.17 4H0v2h12.17l-4.17 4 1.41 1.41L16 6.41z"></path></svg>
      </button>
    </form>
    <slot name="after" />
  </div>
</template>

<style>
.contact-wrapper {
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
  width: 100%;
  max-width: 570px;
  padding: 48px 10%;
  margin: 24px auto;
  background-color: #fff;
}

.contact {
  display: flex;
  flex-direction: column;
}

.contact input,
.contact button {
  flex: 1;
  border-radius: 4px;
  font-size: 16px;
}

.contact input {
  flex: 2;
  padding: 12px;
  min-width: 210px;
  margin-bottom: 16px;
  border: 1px solid rgba(0,0,0,.12);
  box-shadow: 0 2px 4px rgba(0,0,0,.12);
}

.contact input:focus {
  outline: 0;
  border: 1px solid #1abc9c;
}

.contact button {
  /* Remove shadow height */
  color: #fff;
  cursor: pointer;
  border: 0;
  background-color: #1abc9c;
  font-weight: 500;
}

.contact button:hover {
  background-color: #1bc9a6;
}

.contact button:focus {
  outline: 0;
  background-color: #17a98c;
}

.contact button:active {
  background-color: #14967c;
}

.contact svg {
  margin-left: 4px;
}

@media (min-width: 768px) {
  .contact-wrapper {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .contact {
    flex-direction: row;
  }

  .contact input {
    margin-bottom: 0;
    margin-right: 16px;
  }
}
</style>
