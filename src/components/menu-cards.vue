<template>
  <section v-if="icon == 'calendar'" class="card">
    <img src="../assets/calendar.svg" width="100" alt="" />
    <p>{{ label }}</p>
  </section>
</template>

<script>
export default {
  name: "menu-cards",
  props: ["icon", "label"],
  mounted: function () {
    setTimeout(() => {
      for (let index = 0; index < document.getElementsByClassName('card').length; index++) {
        const element = document.getElementsByClassName('card')[index];
        element.style.opacity = 1
      }
    }, 100);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.534) 2px 2px 5px;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  transition: ease-in, 500ms;
  opacity: 0;
  width: 250px;
  height: 170px;
  margin: 20px;
  border-radius: 15px;
}
.card:hover {
  cursor: pointer;
  transition: ease-in, 100ms;
  transform: translateY(-7px);
}
img {
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
}
p {
  font-size: 1.2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 18px;
}
</style>