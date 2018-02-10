<template>
  <header class="container">
      <img src="../assets/buckless.small.png" alt="Buckless Logo" height="47" width="30">
      <h1>Buckless</h1>
      <div class="space"></div>
      <a class="button" href="mailto:contact@buckless.com" target="_blank">Contact</a>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  height: 70px;
}

header > img {
  margin-right: 16px;
}

header > h1 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 300;
}

header > .space {
  flex: 1;
}

@media (min-width: 576px) {
  header {
    font-size: 2rem;
  }
}
</style>
