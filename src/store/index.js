import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: null,
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    async getArticles({ commit }) {
      const articles = await fetch('/data/articles.json');
      commit('setArticle', articles);
    },
  },
  getters: {
    allArticles(state) {
      return state.articles.allArticles;
    },
    topArticles(state) {
      return state.articles.topArticles;
    },

  },
  modules: {
  },
});
