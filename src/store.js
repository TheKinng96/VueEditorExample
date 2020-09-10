import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    singlePost: [],
  },
  mutations: {
    updateNewPost(state, newPost) {
      state.singlePost = newPost;
    },
    updateAllPosts(state, newPost) {
      state.articles = [...state.articles, newPost];
    },
  },
  actions: {
    gettingNewPost({ commit }, newPost) {
      commit("updateNewPost", newPost);
      commit("updateAllPost", newPost);
    },
  },
  getters: {
    showArticles(state) {
      return state.articles;
    },
    showSinglePost(state) {
      return state.singlePost;
    },
  },
});
