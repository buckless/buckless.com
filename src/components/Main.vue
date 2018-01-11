<template>
  <div class="b-main">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300&text=%20lecashlibrtmpfé." rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:500&text=contact" rel="stylesheet">

    <h1>
      <img src="../assets/logo.png" alt="Buckless Logo" width="200" height="90">
      <br/>
      Le cashless
      <br/>
      libre et simplifié.
    </h1>

    <a href="mailto:contact@buckless.com">
      Contact
    </a>

    <img src="../assets/screen.png">
  </div>
</template>

<script>
export default {
  name: 'b-main'
}
</script>

<style>
.b-main {
  height: 100vh;
  width: 100vw;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
}

.b-main > h1 {
  position: absolute;
  top: 200px;
  left: 150px;
  font-size: 4rem;
  margin: 0;

  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #fff;
}

.b-main > a {
  position: absolute;
  top: 40px;
  right: 50px;

  padding: 10px 20px;
  border: 1px solid #fff;

  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
}

.b-main > img {
  position: absolute;
  right: 100px;
  top: calc(20vh - 20px);
  max-height: 80vh;
}

@media (max-width: 1150px) {
  .b-main > h1 {
    top: 120px;
    left: 90px;
  }

  .b-main > img {
    right: 50px;
  }
}

@media(max-width: 950px) {
  .b-main > img {
    height: 515px;
    left: 50%;
    right: unset;
    top: 440px;
    transform: translateX(-50%);
    width: 250px;
    margin-bottom: 20px;
    max-height: unset;
  }

  body {
    overflow: auto;
    overflow-x: none;
  }
}

@media (max-width: 648px) {
  .b-main > h1 {
    /* no transformX(-50%) because this would be after h1 being resized because of body's overflow */
    left: calc(50% - 234px);
  }
}

@media (max-width: 550px) {
  .b-main > h1 {
    font-size: 3rem;
    left: calc(50% - 175.5px);
  }

  .b-main > img {
    top: 400px;
  }
}

@media (max-width: 450px) {
  .b-main > h1 {
    font-size: 2rem;
    left: calc(50% - 117px);
  }

  .b-main > img {
    top: 350px;
  }
}
</style>
