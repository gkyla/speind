<template>
  <header class="header transition-all duration-200">
    <div class="wrapper">
      <router-link to="/" class="logo">SPEIND</router-link>

      <div class="fas fa-bars"></div>

      <nav class="navbar">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/sejarah">Sejarah</router-link>
          </li>
          <li>
            <router-link to="/article">Article</router-link>
          </li>
          <li>
            <router-link to="/about">About Us</router-link>
          </li>
          <li>
            <router-link to="/faq">FAQ</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $(document).ready(() => {
      $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      });

      $(window).on('load scroll', () => {
        // $('.fa-bars').removeClass('fa-times');
        // $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
          $('.header').css({
            background: '#222831',
            'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)',
          });
        } else {
          $('.header').css({ background: 'none', 'box-shadow': 'none' });
        }
      });
    });
  },
};
</script>

<style>
/* body {
  overflow-x: hidden;
} */
</style>

<style scoped>
.header {
  display: flex;
  margin: 0 auto !important;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.header .logo {
  font-size: 1.5rem;
  color: #fff;
}

.header .logo {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
}

.header .logo:hover {
  color: #ec4357;
  transition: 0.5s;
}

.header .navbar ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header .navbar ul li {
  margin: 0 1.2rem;
}

.header .navbar ul li a {
  font-size: 1.2rem; /* ini */
  text-transform: uppercase;
  color: #fff;
}

.header .navbar ul li a:hover {
  color: #ec4357;
  transition: 0.5s;
}

.header .fa-bars {
  color: #fff;
  cursor: pointer;
  font-size: 3rem;
  display: none;
}

@media (max-width: 768px) {
  /* html {
    font-size: 50%;
  } */

  .header .fa-bars {
    transition: 0.5s;
    display: block;
  }

  .header .navbar {
    transition: 0.3s;
    position: fixed;
    top: -100%;
    left: 0;
    height: auto;
    width: 100%;
    background-color: #18191c;
    z-index: 1001;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.3);
    margin-top: -6px;
  }

  .header .navbar ul {
    height: 100%;
    width: 100%;
    flex-flow: column;
  }

  .header .navbar ul li {
    margin: 1rem 0;
  }

  .header .navbar ul li a {
    color: #fff;
    font-size: 1.3rem;
  }

  .header .fa-times {
    transform: rotate(180deg);
  }

  .header .nav-toggle {
    top: 5rem;
  }
}
</style>
