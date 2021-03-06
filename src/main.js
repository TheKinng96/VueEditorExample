import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";

Vue.use(CKEditor);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
