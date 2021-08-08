<template>
  <Window />
  <body>
    <Error :error="$store.state.error" id="error" />
    <Login v-if="$store.state.currentScreen === 'login'" />
    <Home v-if="$store.state.currentScreen === 'home'" />
    <Matricula v-if="$store.state.currentScreen === 'Matrícula'" />
    <Calendario v-if="$store.state.currentScreen === 'Calendário'" />
    <Notas v-if="$store.state.currentScreen === 'Notas'" />
  </body>
</template>

<script>
import Error from "./components/error";
import Login from "./pages/login";
import Window from "./components/window";
import Home from "./pages/home";
import Calendario from "./pages/calendario";
import Matricula from "./pages/matricula";
import Notas from "./pages/notas";

export default {
  name: "App",
  components: {
    Login,
    Window,
    Home,
    Error,
    Calendario,
    Notas,
    Matricula,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import "./style/global.css";
body {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--blueRegular);
  height: calc(100vh - 30px);
}
#error {
  position: absolute;
  transition: ease-in, 400ms;
  z-index: 100;
  right: -300px;
  top: 40px;
}

#error.active {
  transform: translateX(-310px);
  transition: ease-in, 400ms;
}
</style>

