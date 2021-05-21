<template>
  <Window />
  <body>
    <Login v-if="this.$store.state.currentScreen === 'login'" />
    <AlunoHome v-if="this.$store.state.currentScreen === 'alunohome'"/>
  </body>
</template>

<script>
import Login from "./pages/login";
import Window from "./components/window";
import AlunoHome from "./pages/aluno-home"
export default {
  name: "App",
  components: {
    Login,
    Window,
    AlunoHome
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import "./style/style.css";
body {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--blueRegular);
  height: calc(100vh - 30px);
}

</style>

