<template>
  <div class="web-card">
    <h3>{{ title }}</h3>
    <input type="text" v-model="searchTxt" />
    <p>Here is the string >> {{ searchTxt }}</p>
  </div>
</template>

<script>
export default {
  name: "WebSearch",
  props: {
    searchTitle: { type: String, default: "Search string" },
  },
  data() {
    return {
      searchTxt: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
