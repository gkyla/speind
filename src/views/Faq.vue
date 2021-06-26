<template>
  <div class="wrapper">
    <section id="faq" class="faq">
      <h1 class="heading">FAQ</h1>

      <div class="row">
        <div class="image">
          <img src="../assets/faq/Questions-pana.png" alt="Question" />
        </div>

        <div class="accordion-container">
          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Apasih Pendidikan di Indonesia?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Pendidikan di Indonesia adalah seluruh pendidikan yang
                diselenggarakan di Indonesia, baik itu secara terstruktur maupun
                tidak terstruktur. Secara terstruktur, pendidikan di Indonesia
                menjadi tanggung jawab Kementerian Pendidikan dan Kebudayaan
                Republik Indonesia (Kemdikbud), dahulu bernama Departemen
                Pendidikan Nasional Republik Indonesia (Depdiknas). Di
                Indonesia, semua penduduk wajib mengikuti program wajib belajar
                pendidikan dasar selama sembilan tahun, enam tahun di sekolah
                dasar dan tiga tahun di sekolah menengah pertama. Saat ini,
                pendidikan di Indonesia diatur melalui Undang-Undang Nomor 20
                Tahun 2003 tentang Sistem Pendidikan Nasional. <br /><br />
                Pendidikan di Indonesia terbagi ke dalam tiga jalur utama, yaitu
                formal, nonformal, dan informal. Pendidikan juga dibagi ke dalam
                empat jenjang, yaitu anak usia dini, dasar, menengah, dan
                tinggi.
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Lorem ipsum dolor sit amet?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                atque possimus ipsum quae error ullam reiciendis in iste maiores
                nulla. Impedit nam praesentium omnis cupiditate excepturi natus
                magnam sunt deleniti!
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Lorem ipsum dolor sit amet?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                atque possimus ipsum quae error ullam reiciendis in iste maiores
                nulla. Impedit nam praesentium omnis cupiditate excepturi natus
                magnam sunt deleniti!
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Lorem ipsum dolor sit amet?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                atque possimus ipsum quae error ullam reiciendis in iste maiores
                nulla. Impedit nam praesentium omnis cupiditate excepturi natus
                magnam sunt deleniti!
              </p>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">
              <span>+</span>
              <h3>Lorem ipsum dolor sit amet?</h3>
            </div>
            <div class="accordion-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                atque possimus ipsum quae error ullam reiciendis in iste maiores
                nulla. Impedit nam praesentium omnis cupiditate excepturi natus
                magnam sunt deleniti!
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
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
      });
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.faq {
  background-color: #18191c;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  padding: 0 2rem;
}

.faq .row {
  /* margin-right: 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
}

.faq .row .image img {
  height: 100%;
  width: 40vw;
}

.faq .row .accordion-container {
  width: 50%;
  text-align: left;
}

.faq .row .accordion-container .accordion .accordion-header {
  background-color: #ec4357;
  margin: 1rem 0;
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
  font-size: 1.5rem;
}

.faq .row .accordion-container .accordion .accordion-body {
  padding: 1rem;
  color: #fff;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
  font-size: 1.3rem;
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
