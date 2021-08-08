<template>
  <div @click="logout()" class="logout">
    <p v-if="$store.state.loggedIn">Logout</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.logout {
  align-self: center;
  -webkit-app-region: no-drag;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
}
.logout:hover > p {
  color: var(--unipYellow);
}
.logout > p {
  color: rgb(88, 88, 88);
  font-style: italic;
  animation-name: animate;
  animation-duration: 0.5s;
}

@keyframes animate {
  from {
    transform: translateY(-30px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>