<template>
  <div id="sejarah" class="w-full h-full bg-speind-black my-20">
    <div class="sejarah">
      <div class="artikel">
        <h1
          class="heading"
          data-aos="zoom-out-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          SEJARAH
        </h1>
      </div>

      <section class="about" id="about">
        <div class="row">
          <div
            class="video-container"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div class="video">
              <video src="video/sejarah.mp4" muted></video>
            </div>
            <!-- Sumber : https://www.youtube.com/watch?v=Zw6DrK8jkAQ -->
          </div>

          <div class="content">
            <h3 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              Berikut Adalah Video Sejarah Pendidikan Indonesia
            </h3>
            <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
              Menampilkan video mengenai perjalanan Sejarah Pendidikan di
              Indonesia secara garis besar. Dari zaman sebelum merdeka hingga
              sekarang tentang istilah pendidikan
            </p>
            <!-- <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea est commodi incidunt magni quia molestias perspiciatis, unde repudiandae quidem.</p> -->
          </div>
        </div>
      </section>

      <div class="artikel1">
        <h3 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
          Sejarah Pendidikan Indonesia
        </h3>

        <p
          class="desksejarah"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Indonesia menjadi salah satu negara kepulauan terbesar di dunia.
          Indonesia memiliki lebih dari 17.000 pulau dan hanya sekitar 7.000
          pulau yang berpenghuni. Secara astronomi, letak Indonesia diapit oleh
          dua benua yaitu Benua Asia dan Australia serta dua samudra yaitu
          Samudra Hindia dan Pasifik. Indonesia terkenal dengan sumber daya alam
          (SDA) yang melimpah ruah di setiap wilayahnya. Oleh sebab itu, pada
          zaman dahulu Indonesia diincar oleh banyak bangsa barat hanya untuk
          menguasai hasil rempah dan memperbudak mereka, beberapa di antaranya
          yaitu Portugis, Belanda, Inggris, Jepang. Dari zaman sebelum merdeka
          hingga sekarang kita sudah mengenal tentang istilah pendidikan. Namun,
          pendidikan di Negara Indonesia pada zaman dahulu sangat buruk. Tidak
          semua rakyat Indonesia bisa menempuh jenjang pendidikan yang layak.
          Padahal pendidikan menjadi salah satu kebutuhan yang paling penting
          bagi individu untuk membentuk karakter suatu bangsa.

          <br /><br />
        </p>

        <p
          class="desksejarah"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Oleh sebab itu, kita sebagai bangsa Indonesia yang hidup di zaman
          modern ini wajib bersyukur karena semuanya sudah mengalami banyak
          perubahan. Beberapa catatan tentang sejarah pendidikan di Indonesia
          mulai dari pendidikan pada masa (penjajahan) Portugis, Belanda,
          Jepang; Masa Kemerdekaan; Orde Baru hingga Reformasi. Setiap masa
          pendidikan memiliki kesamaan tujuan tetapi dengan sistem penerapan
          yang berbeda-beda. Dalam artikel ini dibahas tentang bagaimana sejarah
          pendidikan dari masa ke masa mampu membentuk karakter suatu bangsa
          sehingga kita sebagai bangsa Indonesia yang hidup di zaman modern
          tidak lupa bersyukur dan mampu memanfaatkan kemajuan teknologi
          semaksimal mungkin ke arah yang lebih positif. Kita harus mampu
          memetik setiap pelajaran dan makna yang terkandung dari diciptakannya
          pendidikan di masa lalu.
        </p>
      </div>

      <br />

      <div class="popup-video">
        <span>&times;</span>
        <video src="video/sejarah.mp4" controls></video>
        <!-- Sumber : https://www.youtube.com/watch?v=Zw6DrK8jkAQ -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */

  mounted() {
    document.querySelectorAll('.video-container video').forEach((vid) => {
      vid.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
      };
    });

    document.querySelector('.popup-video span').onclick = () => {
      document.querySelector('.popup-video').style.display = 'none';
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

section {
  padding: 2rem 9%;
}

.sejarah {
  position: relative;
  min-height: 100vh;
  background: #18191c;
}

.artikel {
  text-align: center;
  margin: auto;
  width: 82%;
}

.artikel1 {
  margin: -5px auto;
  width: 82%;
}

.artikel1 h3 {
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 2.5em;
  color: #ec4357;
}

.heading {
  margin: -20px 2rem;
  padding-top: 6rem;
  display: inline-block;
  font-size: 3.5rem;
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

.desksejarah {
  color: #fff;
  font-size: 1.2em;
  line-height: 1.75em;
}

.about .row {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
  padding-bottom: 3rem;
}

.about .row .video-container {
  cursor: pointer;
  flex: 1 1 40rem;
  position: relative;
}

.about .row .video-container video {
  width: 100%;
  border: 3px solid #ec4357;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  height: 100%;
  object-fit: cover;
}

.sejarah .video-container .video video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s linear;
}

.sejarah .video-container .video:hover video {
  transform: scale(1.01);
}

.sejarah .popup-video {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: none;
}

.sejarah .popup-video video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  border-radius: 5px;
  border: 3px solid #ec4357;
  object-fit: cover;
}

.sejarah .popup-video span {
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 50px;
  color: #ec4357;
  font-weight: bolder;
  z-index: 100;
  cursor: pointer;
}

.about .row .content {
  font-family: "Rubik", cursive;
  flex: 1 1 40rem;
}

.about .row .content h3 {
  font-weight: bold;
  font-size: 2.5em;
  color: #ec4357;
}

.about .row .content p {
  font-size: 1.5em;
  color: white;
  padding: 0.5rem 0;
  padding-top: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  /* .sejarah {
        min-height: 400vh;
    } */

  .sejarah .artikel1 {
    text-align: center;
  }

  .sejarah .popup-video video {
    width: 95%;
  }

  .sejarah .content {
    text-align: center;
  }
}
</style>
