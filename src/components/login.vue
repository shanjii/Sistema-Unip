<template>
  <body>
    <section id="login-container">
      <img src="../assets/logo-unip.svg" alt="" />
      <div class="input-container">
        <p>RA</p>
        <input type="text" />
      </div>
      <div class="input-container">
        <p>Senha</p>
        <input type="text" />
      </div>
      <button id="login-button">Login</button>
    </section>
    <section id="footer">

    </section>
  </body>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  background-color: var(--blueRegular);
  height: 100vh;
}
#login-container {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  width: 30%;
  margin: auto;
  background-color: var(--blueLight);
  padding-top: 3rem;
  padding-bottom: 3rem;
}
#login-container > img {
  margin-left: auto;
  margin-right: auto;
}
.input-container {
    color: white;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
}
#login-button {
    margin-top: 40px;
    margin-left: 10%;
    margin-right: 10%;
}
#footer {
    height: 15%;
    width: 100vw;
    background-color: var(--blueLight);
}
</style>
