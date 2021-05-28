<template>
  <section v-if="type == 'aluno'">
    <div class="card-wrapper">
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
    </div>
  </section>
  <section v-if="type == 'professor'">
    <div class="card-wrapper">
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
      <MenuCards icon="calendar" label="Calendario" />
    </div>
  </section>
</template>

<script>
import MenuCards from "../components/menu-cards";
export default {
  name: "aluno-home",
  components: {
    MenuCards,
  },
  data() {
    return {
      type: "",
    };
  },
  mounted() {
    this.type = this.$store.state.typeUser;
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
</style>