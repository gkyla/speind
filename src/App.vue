<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :key="$route.fullPath" :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import $ from 'jquery';


export default {
  components: {
    Footer,
    Navbar,
  },
  created() {
    this.$store.dispatch('getArticles');
  },
  mounted() {
    $(window).ready(() => {
    // eslint-disable-next-line
      AOS.init();
    });

    // eslint-disable-next-line
    window.addEventListener("load", AOS.refresh)
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap");

.wrapper {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-in-out all;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  scroll-behavior: smooth;
}

body,
html {
  background-color: #18191c;
  /* height: 100%; */
  /* width: 100%; */
  /* overflow-x: hidden; */
  /* min-height: 100vh; */
  /* min-width: 100vw; */
  /* overflow-x: hidden; */
  overflow-x: hidden;
  width: 100vw;
}

#app {
  -webkit-font-smoothing: antialiased;
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  /* min-width: 100vw; */
  color: white;
}

.bg-speind-dark {
  background-color: #18191c;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.heading {
  margin: 2rem;
  padding-top: 6rem;
  display: inline-block;
  font-size: 2.5rem;
  color: #fff;
  position: relative;
  letter-spacing: 0.2rem;
}

.heading::before,
.heading::after {
  content: "";
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  border-top: 0.4rem solid #ec4357;
  border-left: 0.4rem solid white;
}

.heading::before {
  top: 5.8rem;
  left: -2rem;
}

.heading::after {
  bottom: -0.5rem;
  right: -2rem;
  transform: rotate(180deg);
}
</style>
