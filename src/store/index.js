import { createStore } from 'vuex';
// const {route}  'vue-router';
// import { useRoute } from 'vue-router';


export default createStore({
  state: {
    articles: null,
    currentDetail: null,
    currentObj: null,
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    async getArticles({ commit }) {
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
      return state.articles.allArticles;
    },
    topArticles(state) {
      return state.articles.topArticles;
    },
    // getAnotherArticle(state) {
    //   return state.articles.allArticles.filter((arc, index) => arc.id !== router.currentRoute.params.id && index < 4);
    // },
  },
  modules: {
  },
});
