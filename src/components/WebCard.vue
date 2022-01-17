<template>
  <div class="web-card">
    <h3>{{ title }}</h3>
    <p>{{ sub }}</p>
    <b-button variant="success" @click="textStr = 'Clicked me'"
      >Submit</b-button
    >
    <p>heloo testing</p>
    <p>{{ textStr }}</p>
  </div>
</template>
<script src="https://unpkg.com/vue"></script>
<script>
import { BButton } from "bootstrap-vue";
export default {
  name: "WebCard",
  components: {
    BButton,
  },
  props: {
    title: { type: String, default: "Web component title from vue" },
    sub: { type: String, default: "Web component sub title" },
  },
  data() {
    return {
      textStr: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.web-card {
  border: 1px solid rebeccapurple;
}
</style>
