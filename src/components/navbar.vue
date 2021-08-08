<template>
  <div id="navbar">
    <section class="title">
      <p>{{ title }}</p>
    </section>
    <section @click="goHome()" class="button">
      <p>Voltar</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.currentScreen,
    };
  },
  methods: {
    goHome() {
      this.$store.state.currentScreen = "home";
    },
  },
};
</script>

<style scoped>
@import "../style/global.css";
#navbar {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  transition: linear 200ms;
}
.title {
  display: flex;
  background-color: var(--blueLight);
  color: white;
  border-radius: 13px;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.151) 1px 3px 5px;
  width: 300px;
}
.title > p {
  margin: auto;
  font-size: 20px;
}

.button {
  cursor: pointer;
  transform: translateY(0px);
  transition: linear 200ms;
  display: flex;
  background-color: white;
  color: var(--blueRegular);
  border-radius: 13px;
  height: 40px;
  margin-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.151) 1px 3px 5px;
  width: 100px;
}
.button > p {
  margin: auto;
  font-size: 20px;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.822);
  transform: translateY(-3px);
}

#navbar {
  animation-name: animate;
  animation-duration: 0.5s;
}

@keyframes animate {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>