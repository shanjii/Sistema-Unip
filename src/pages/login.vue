<template>
  <section id="log-container">
    <img src="../assets/logo-unip.svg" alt="" />
    <div class="input-container">
      <input type="text" placeholder="RA" />
    </div>
    <div class="input-container">
      <input type="password" placeholder="Senha" />
    </div>
    <button @click="login()" id="login-button">Login</button>
  </section>
  <section id="welcome" v-if="showWelcome">
    <p>Bem vindo,</p>
    <p>Felipe Tadeu.</p>
  </section>
  <section id="footer">
    <p>
      Copyright © 1997-2021 UNIP - Universidade Paulista. Todos os direitos
      reservados.
    </p>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showWelcome: false,
    };
  },
  methods: {
    login: function () {
      this.animate();
      setTimeout(() => (this.showWelcome = true), 100);
      setTimeout(() => (this.$store.state.currentScreen = "alunohome"), 2500);
    },
    animate: function () {
      document.getElementById("log-container").classList.add("animation-one");
      setTimeout(function () {
        document.getElementById("welcome").classList.add("animation-one");
        document.getElementById("log-container").classList.add("animation-two");
        document.getElementById("footer").classList.add("animation-one");
      }, 2000);
    },
  },
};
</script>

<style scoped>
#welcome {
  position: absolute;
  right: 380px;
  top: 300px;
  font-size: 40px;
  color: white;
}
#log-container {
  display: flex;
  z-index: 0;
  flex-direction: column;
  border-radius: 1rem;
  width: 30%;
  margin: auto;
  background-color: var(--blueLight);
  padding-top: 3rem;
  padding-bottom: 3rem;
}
#log-container > img {
  margin-left: auto;
  margin-right: auto;
}
.input-container {
  color: white;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 40px;
}
#login-button {
  margin-top: 40px;
  margin-left: 10%;
  margin-right: 10%;
}
#footer {
  display: flex;
  height: 10%;
  width: 100vw;
  background-color: var(--blueLight);
}
#footer > p {
  margin: auto;
  color: rgb(228, 228, 228);
}
input {
  border-style: solid;
  border-width: 0;
  border-color: white;
  border-bottom-width: 2px;
  color: white;
  font-size: 15px;
  height: 25px;
  background: none;
  padding-left: 5px;
  padding-right: 5px;
}
input:focus {
  outline: none;
  border-color: var(--unipYellow);
}
::placeholder {
  color: white;
}
button {
  border-style: none;
  height: 35px;
  border-radius: 8px;
  font-size: 17px;
  background-color: white;
  cursor: pointer;
}
button:focus {
  outline: none;
}
button:hover {
  background-color: var(--unipYellow);
}
#footer.animation-one {
  transition: linear, 1s;
  transform: translateY(200px);
}
#log-container.animation-one {
  transition: linear, 200ms;
  transform: translateX(-300px);
}
#log-container.animation-two {
  transition: linear, 1s;
  transform: translateX(-1300px);
}
#welcome.animation-one {
  transition: linear, 1s;
  transform: translateX(-1000px);
}
</style>
