<template>
  <footer>
    <div class="wrapper footer-grid">
      <div class="footer-left">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="logospeind" />
        </router-link>

        <p class="footer-links">
          <router-link id="from-left" to="/">HOME</router-link>
          <router-link to="/sejarah">SEJARAH</router-link>
          <router-link to="/article">ARTICLE</router-link>
          <router-link to="/about">ABOUT US</router-link>
          <router-link to="/faq">FAQ</router-link>
        </p>

        <p class="footer-company-name">&copy; 2021 - <span>SPEIND</span></p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <p><span> Indonesia,</span>Jakarta</p>
        </div>

        <div>
          <i class="fas fa-phone"></i>
          <p><span> +62 1234-5678-10</span></p>
        </div>

        <div>
          <i class="fas fa-envelope"></i>
          <p><a href="#">infopendidikanindonesia@gmail.com</a></p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-connect">
          <span> Dibuatnya website ini, </span>
          Bertujuan untuk memberikan informasi seputar Sejarah Pendidikan
          Indonesia dan Smk Masa Kini Serta Yang Akan Datang secara digital.
        </p>

        <div class="footer-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped>
footer {
  background-color: #222831;
  width: 100%;
  text-align: left;
  padding: 50px 0;
  position: relative;
  z-index: 15;
}

/* footer .footer-left,
footer .footer-center,
footer .footer-right {
  display: inline-block;
  vertical-align: top;
} */

/* footer .footer-left {
  width: 40%;
} */

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1.3fr 1fr;
}

footer .footer-left img {
  width: 250px;
}

footer .footer-links {
  color: #fff;
  margin: 25px 0;
  font-size: 14px;
}

footer .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  padding-right: 2em;
}

footer .footer-links a:hover {
  transition: 0.5s;
  color: #ec4357;
}

footer .footer-company-name {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  margin-top: 30px;
}

footer .footer-company-name span {
  color: #ec4357;
}

/* footer .footer-center {
  width: 35%;
} */

footer .footer-center i {
  background-color: #fff;
  color: #ec4357;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

footer .footer-center p {
  display: inline-block;
  color: #fff;
  vertical-align: middle;
  margin: 0;
  font-size: 14px;
}

footer .footer-center p span {
  display: block;
  font-weight: normal;
  line-height: 2;
}

footer .footer-center p a {
  color: #fff;
  text-decoration: none;
}

/* footer .footer-right {
  width: 24%;
} */

footer .footer-connect {
  line-height: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: normal;
  margin: 0;
}

footer .footer-connect span {
  display: block;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

footer .footer-icons {
  margin-top: 25px;
  margin-left: -15px;
}

footer .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 2px;
  font-size: 20px;
  color: #ec4357;
  text-align: center;
  line-height: 35px;
  margin-left: 15px;
}

footer .footer-icons a:hover {
  color: #18191c;
  transition: 0.5s;
}

@media (min-width: 320px) and (max-width: 640px) {
  footer {
    font: bold 14px;
    padding: 20px 0 !important;
  }

  .footer-left a {
    display: none;
  }

  footer .footer-left,
  footer .footer-center,
  footer .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }

  footer .footer-links a {
    padding-right: 10px;
  }

  footer .footer-center i {
    display: none;
  }

  footer .footer-connect {
    display: none;
  }
}

@media (max-width: 1099px) {
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }

  footer .footer-left,
  footer .footer-center,
  footer .footer-right {
    text-align: center;
  }

  .footer-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer-center i {
    display: none;
  }

  .footer-connect {
    display: none;
  }

  .footer-center > div > span {
    display: block;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
