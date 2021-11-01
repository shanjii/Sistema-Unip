<template>
  <div>
    <Header id="logo" />
    <Navbar />
    <section>
      <ul style="color: white" v-for="item in data" :key="item">
        <li>Matéria: {{ item.nome }}</li>
        <li>NP1: {{ item.np1 }}</li>
        <li>NP2: {{ item.np2 }}</li>
        <li>Trabalhos: {{ item.trabalhos }}</li>
        <li>Exame: {{ item.exame }}</li>
        <li>Sub: {{ item.sub }}</li>
        <li>Média: {{ item.media }}</li>

        <br />
      </ul>
    </section>
  </div>
</template>


<script>
import Header from "../components/header";
import Navbar from "../components/navbar";
import axios from "axios";

export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    Header,
    Navbar,
  },
  mounted() {
    this.getNotas();
  },
  methods: {
    async getNotas() {
      let temp;
      let response = await axios.get("http://localhost:3000/notas");
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].id_alunos == this.$store.state.account.id) {
          let response2 = await axios.get(
            "http://localhost:3000/materias/" + response.data[i].id_materias
          );
          temp = response.data[i];
          temp.nome = response2.data.nome;
          this.data.push(temp);
        }
      }
    },
  },
};
</script>

<style scoped>
</style>