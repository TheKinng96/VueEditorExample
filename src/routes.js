import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Editor from "@/components/Editor";
import HomePage from "@/components/PostBlogHome";
import SinglePost from "@/components/SinglePost";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/editor", component: Editor },
  { path: "/posts", component: HomePage },
  { path: "/posts/:id", component: SinglePost },
];

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});
