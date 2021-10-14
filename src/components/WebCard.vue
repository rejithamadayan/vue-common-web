<template>
  <div class="web-card">
    <h3>{{ title }}</h3>
    <p>{{ sub }}</p>
  </div>
</template>

<script>
export default {
  name: "WebCard",
  props: {
    title: { type: String, default: "Web component title from vue" },
    sub: { type: String, default: "Web component sub title" },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.web-card {
  border: 1px solid rebeccapurple;
}
</style>
