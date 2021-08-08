<template>
  <div>
    <Header id="logo" />
    <section v-if="type == 'sky blue'">
      <div class="card-wrapper">
        <MenuCards
          @click="navigate('Matrícula')"
          icon="document"
          label="Matrícula"
        />
        <MenuCards
          @click="navigate('Calendário')"
          icon="calendar"
          label="Calendario"
        />
        <MenuCards @click="navigate('Notas')" icon="grades" label="Notas" />
      </div>
    </section>
    <section v-if="type == 'professor'">
      <div class="card-wrapper">
        <MenuCards icon="calendar" label="Calendário" />
      </div>
    </section>
  </div>
</template>

<script>
import MenuCards from "../components/menu-cards";
import Header from "../components/header";

export default {
  name: "aluno-home",
  components: {
    MenuCards,
    Header,
  },
  data() {
    return {
      type: this.$store.state.account.usertype,
    };
  },
  mounted() {
    if (this.$store.state.initialAcess)
      document.getElementById("logo").classList.add("animate");
  },
  methods: {
    navigate(location) {
      this.$store.state.currentScreen = location;
      this.$store.state.initialAccess = false;
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(290px, max-content));
  justify-content: center;
}
#logo.animate {
  animation-name: animate;
  animation-duration: 1s;
}

@keyframes animate {
  from {
    transform: translateY(-80px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>