<template>
  <div class="w-full h-full overflow-y-hidden py-20">
    <section id="faq" class="faq">
      <h1 class="heading mb-20">FAQ</h1>

      <div class="row custom-faq-wrapper">
        <div class="image">
          <img src="../assets/faq/Questions-pana.png" alt="Question" />
        </div>

        <div class="accordion-container">
          <div class="accordion">
            <div class="accordion-header">
              <span>-</span>
              <h3>Mengapa website ini dibuat?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Dibuatnya Website Ini, Untuk Memberikan Informasi Seputar
                Sejarah Pendidikan Indonesia Dan Smk Masa Kini Serta Yang Akan
                Datang Secara Digital.
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Apa tujuan website ini?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Tujuan Dari Website Ini Untuk Mengembangkan Potensi Manusia
                Khususnya Siswa/Siswi, Smk Dan Sma Agar Mempunyai Pengetahuan
                Yang Luas Akan Sejarah Pendidikan Indonesia Dan Agar Tau Gimana
                Sekolah Menengah Kejuruan Masa Kini Dan Yang Akan Datang.
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Apakah Website Ini PWA / Offline Support ?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Benar, kami menggunakan teknologi Workbox untuk menangani
                masalah caching
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Menggunakan Teknologi apa website ini dibuat ?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Untuk stack kami menggunakan Vue untuk framework front-end kami,
                di ikuti Library AOS untuk animasi , tailwind untuk CSS nya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $(document).ready(() => {
      $('.accordion-header').click(function () {
        if ($(this).children('span').text() === '-') {
          $(this).next('.accordion-body').slideUp();
          $(this).children('span').text('+');
        } else {
          $(this).next('.accordion-body').slideDown();
          $(this).children('span').text('-');
        }
      });
    });
  },
};
</script>

<style scoped>
.custom-faq-wrapper {
  width: 100%;
  max-width: 1300px;
  padding: 20px;
  margin: 0 auto;
}

.faq {
  background-color: #18191c;

  width: 100%;
  text-align: center;
  padding: 0 2rem;
}

.faq .row {
  /* margin-right: 5px; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-items: center;
  justify-content: center;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0 2rem;
}

@media (max-width: 1200px) {
  .faq .row {
    /* margin-right: 5px; */
    grid-template-columns: repeat(1, minmax(0, 1fr));

    /* align-items: center; */
    /* justify-content: center; */
    /* padding: 0 2rem; */
  }
}

.accordion {
  position: relative;
  z-index: 20;
}

.faq .row .image img {
  height: 100%;
  width: 500px;
  height: 500px;
}

.faq .row .accordion-container {
  width: 100%;
  text-align: left;
}

.faq .row .accordion-container .accordion .accordion-header {
  background-color: #ec4357;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.faq .row .accordion-container .accordion .accordion-header span {
  display: inline-block;
  text-align: center;
  height: 4rem;
  width: 5rem;
  line-height: 4rem;
  font-size: 2rem;
  background: #fff;
  color: #ec4357;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.faq .row .accordion-container .accordion .accordion-header h3 {
  display: inline;
  color: #fff;
  font-weight: 400;
  padding-left: 0.5rem;
  /* font-size: 1.5rem; */
}

.faq .row .accordion-container .accordion .accordion-body {
  padding: 1rem;
  color: #fff;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  display: none;
}

.faq .row .accordion-container .accordion:nth-child(1) .accordion-body {
  display: block;
}

@media (max-width: 768px) {
  .faq {
    padding: 0;
  }

  .faq .row {
    padding: 0 1rem;
    flex-flow: column;
  }

  .faq .row .image img {
    width: 100vw;
    height: 100%;
  }

  .faq .row .accordion-container {
    width: 100%;
  }
}
</style>
