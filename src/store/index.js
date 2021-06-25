import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: null,
  },
  mutations: {
    setArticle(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    async getArticles({ commit }) {
      const articles = await fetch('/data/articles.json');
      commit('setArticle', articles);
    },
  },
  modules: {
  },
});
