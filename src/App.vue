<template>
  <Window />
  <body>
    <Login v-if="this.$store.state.currentScreen === 'login'" />
  </body>
</template>

<script>
import Login from "./pages/login";
import Window from "./components/window";
export default {
  name: "App",
  components: {
    Login,
    Window,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import "./style/style.css";
body {
  display: flex;
  flex-direction: column;
  background-color: var(--blueRegular);
  height: calc(100vh - 30px);
}

</style>

