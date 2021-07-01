<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :key="$route.fullPath" :is="Component" />
    </transition>
  </router-view>
  <Footer />

  <img class="blob1" src="./assets/patterns/blob1.svg" />
  <img class="blob2" src="./assets/patterns/blob2.svg" />
  <img class="blob3" src="./assets/patterns/blob3.svg" />
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
    // eslint-disable-next-line
    AOS.refresh()

    $(window).ready(() => {
    // eslint-disable-next-line
      AOS.init();
    });
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap");

.blob1 {
  width: 300px;
  position: absolute;
  top: 100px;
  right: -120px;
  z-index: 10;
}

.blob2 {
  width: 400px;
  position: absolute;
  top: 650px;
  left: -190px;
  z-index: 10;
}

.blob3 {
  width: 400px;
  position: absolute;
  top: 850px;
  right: -190px;
  z-index: 10;
}

@media (max-width: 1366px) {
  .blob1 {
    position: absolute;
    top: 100px;
    right: -160px;
  }

  .blob2 {
    position: absolute;
    top: 700px;
    left: -270px;
  }
}

@media (max-width: 670px) {
  .blob2 {
    top: 750px;
    left: -270px;
  }
}

@media (max-width: 650px) {
  .blob2 {
    top: 850px;
  }
}

@media (max-width: 540px) {
  .blob1 {
    display: none;
  }

  .blob2 {
    display: none;
  }

  .blob3 {
    display: none;
  }
}

.wrapper {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 10px;
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
  /* overflow: hidden; */
}

body {
  background-color: #18191c;
  min-height: 100%;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

/* Html harus overflow-x hidden biar scrollbar ilang */
/* Cons : Kalo overflow-x hidden sticky postiion ngga work */
html {
  width: 100%;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  position: relative;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  /* overflow-x: hidden; */
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

@media (max-width: 450px) {
  .heading {
    /* margin: 2rem; */
    padding-top: 6rem;
    display: inline-block;
    font-size: 1.5rem;
    color: #fff;
    position: relative;
    letter-spacing: 0.2rem;
  }

  .heading::before,
  .heading::after {
    content: "";
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
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
}
</style>
