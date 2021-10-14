import Vue from "vue";
import App from "./App.vue";
import wrap from "@vue/web-component-wrapper";
import WebCard from "./components/WebCard.vue";
import "../dist/dxc-components.min.js";

const CustomElement = wrap(Vue, WebCard);

window.customElements.define("my-web-card", CustomElement);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
