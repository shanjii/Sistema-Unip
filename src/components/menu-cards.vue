<template>
  <section class="card">
    <img :src="require(`../assets/${icon}.svg`)" width="100" alt="" />
    <p>{{ label }}</p>
  </section>
</template>

<script>
export default {
  name: "menu-cards",
  props: ["icon", "label"],
  mounted: async function () {
    var animate = this.$store.state.initialAccess ? "regular" : "fast";
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    for (
      let index = 0;
      index < document.getElementsByClassName("card").length;
      index++
    ) {
      const element = document.getElementsByClassName("card")[index];
      element.classList.add(animate);
      await timer(50);
    }
  },
};
</script>

<style scoped>
.card {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.534) 2px 2px 5px;
  flex-direction: column;
  opacity: 0;
  transition: ease-in, 200ms;
  background-color: rgb(238, 238, 238);
  width: 250px;
  height: 170px;
  margin: 20px;
  border-radius: 15px;
}
.card.regular {
  opacity: 1;
  animation-name: animate;
  animation-duration: 1.2s;
}

.card.fast {
  opacity: 1;
  animation-name: animate;
  animation-duration: 0.3s;
}

.card:hover {
  cursor: pointer;
}
img {
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
}
p {
  color: var(--blueRegular);
  font-size: 1.2rem;
  margin-right: auto;
  font-weight: 600;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 18px;
}

@keyframes animate {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  50% {
    transform: translateY(-5px);
    opacity: 1;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>