import { createStore } from 'vuex';

export default createStore({
  state: {
    articles: null,
    currentDetail: null,
    currentObj: null,
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
      console.log(payload);
    },
  },
  actions: {
    async getArticles({ state, commit }) {
      const articles = await fetch('/data/articles.json');
      const data = await articles.json();
      commit('setArticles', data);
    },
    // async getDetail({ getters }) {
    //   const data = getters.allArticles;
    //   console.log(data);
    // },
  },
  getters: {
    allArticles(state) {
      return state.articles?.allArticles;
    },
    topArticles(state) {
      return state.articles?.topArticles;
    },
  },
  modules: {
  },
});
