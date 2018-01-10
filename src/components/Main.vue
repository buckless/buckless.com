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

    <img src="../assets/screen.png" width="352" height="725">
  </div>
</template>

<script>
export default {
  name: 'b-main'
}
</script>

<style scoped>
.b-main {
  height: 100vh;
  width: 100vw;

  background-color: #23262c;
  background-image: radial-gradient(
    circle at center,
    rgba(101, 117, 135, 0.9) 0%,
    rgba(79, 92, 106, 0) 100%
  );
}

.b-main > h1 {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: 10%;
  font-size: 4rem;
  margin: 0;

  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #fff;
}

.b-main > a {
  position: absolute;
  top: 5%;
  right: 5%;

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
  right: 12.5%;
  bottom: 5%;
}
</style>
