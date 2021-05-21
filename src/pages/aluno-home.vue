<template>
  <div class="card-wrapper">
    <MenuCards icon="calendar" label="Calendario" />
    <MenuCards icon="calendar" label="Calendario" />
    <MenuCards icon="calendar" label="Calendario" />
    <MenuCards icon="calendar" label="Calendario" />
    <MenuCards icon="calendar" label="Calendario" />
    <MenuCards icon="calendar" label="Calendario" />
  </div>
</template>

<script>
import MenuCards from "../components/menu-cards";
export default {
  name: "aluno-home",
  components: {
    MenuCards,
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