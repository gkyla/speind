import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sejarah',
    name: 'Sejarah',
    component: () => import(/* webpackChunkName: "Sejarah" */ '../views/Sejarah.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue'),
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import(/* webpackChunkName: "ArticleDetail" */ '../views/ArticleDetail.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "About" */ '../views/Faq.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
