import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Editor from "@/components/Editor";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/editor", component: Editor },
];

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});
