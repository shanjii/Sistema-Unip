<template>
  <div>
    <section id="error-window">
      <p>{{ error }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "error",
  props: ["error"],
};
</script>

<style scoped>
#error-window {
  display: flex;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  height: 60px;
}
p {
  margin: auto;
  font-size: 1.2rem;
  color: var(--blueRegular);
}
</style>