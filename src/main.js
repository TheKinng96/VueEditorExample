import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import svgSpriteLoader from "./helpers/svg-sprite-loader";
import vuetify from "@/plugins/vuetify";
import router from "./routes";

const __svg__ = {
  path: "./assets/images/icons/*.svg",
  name: "assets/images/[hash].sprite.svg",
};
svgSpriteLoader(__svg__.filename);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
