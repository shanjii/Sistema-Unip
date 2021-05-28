<template>
  <Window />
  <body>
    <Error :error="this.$store.state.error" id="error" />
    <Login v-if="this.$store.state.currentScreen === 'login'" />
    <Home v-if="this.$store.state.currentScreen === 'home'" />
  </body>
</template>

<script>
import Error from "./components/error";
import Login from "./pages/login";
import Window from "./components/window";
import Home from "./pages/home";
export default {
  name: "App",
  components: {
    Login,
    Window,
    Home,
    Error,
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
#error {
  position: absolute;
  transition: ease-in, 400ms;
  right: -300px;
  top: 40px;
}

#error.active {
  transform: translateX(-310px);
  transition: ease-in, 400ms;
}
</style>

