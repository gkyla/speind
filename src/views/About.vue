<template>
  <div id="about" class="min-h-screen bg-speind-black">
    <div class="wrapper md:mx-auto p-5">
      <div id="meet-our-team">
        <div class="text-center flex flex-col items-center">
          <h1 class="heading">MEET THE TEAM</h1>
        </div>

        <div
          id="card-about-container"
          class="gap-7 mt-10 relative z-30"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <CardAbout
            name="Agits Zakky A"
            :ig="'https://www.instagram.com/kagget_z'"
            :imgSrc="require('../assets/about/gitkyla.jpg')"
            imgPosition="bottom"
          >
            <template #description>
              <p class="my-2 text-sm">
                Majoring in Computer and Network Engineering
              </p>
              <p>SMK 1 Perguruan Cikini</p>
            </template>
          </CardAbout>
          <CardAbout
            name="M Asryad A"
            :imgSrc="require('../assets/about/arsd.jpg')"
            imgPosition="center"
            :ig="'https://www.instagram.com/mhammdarsyadd_'"
          >
            <template #description>
              <p class="my-2 text-sm">
                Majoring in Computer and Network Engineering
              </p>
              <p>SMK 1 Perguruan Cikini</p>
            </template>
          </CardAbout>
          <CardAbout
            name="Steven Christian"
            :imgSrc="require('../assets/about/steven.jpeg')"
            imgPosition="top"
            :ig="'https://www.instagram.com/steven_christian20'"
          >
            <template #description>
              <p class="my-2 text-sm">
                Majoring in Majoring in Software Engineering
              </p>
              <p>SMK 1 Perguruan Cikini</p>
            </template>
          </CardAbout>
        </div>
      </div>

      <div class="text-center flex flex-col items-center">
        <h1 class="heading">OUR SCHOOL</h1>

        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            mt-10
            gap-5
            place-content-center
          "
        >
          <img
            src="https://www.oasenews.com/wp-content/uploads/2019/09/IMG-20190909-WA0032.jpg"
            class="rounded-md h-72 w-full object-cover object-center"
            alt="cikini"
          />
          <div
            class="
              flex flex-col
              bg-speind-gray
              border-l-4 border-speind-red
              text-black
              rounded-md
              text-left
              p-5
              text-white
            "
          >
            <h2 class="text-xl md:text-2xl mb-4">SMK 1 Perguruan Cikini</h2>
            <q class="quote mb-auto my-auto" style="font-size: 1.2em"
              ><p class="inline text-white text-md">
                Sekolah teknologi unggul yang menghasilkan lulusan berakhlak
                mulia, cerdas, terampil dan berwawasan lingkungan
              </p></q
            >
            <a
              href="http://smkperguruancikini.sch.id/"
              class="intro-cta mt-8 mb-3"
            >
              Kunjungi Website
            </a>
          </div>
        </div>

        <iframe
          id="map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDCra_ia8_ucDUh2wFFWOzoGgsJetiCH7U&q=Jalan+Alur+Laut+Blok+NN+No.+1%2C+RT.05+%2F+RW.10%2C+Rawabadak+Utara%2C+Koja%2C+RT.5%2FRW.10%2C+Rawabadak+Utara%2C+Kec.+Koja%2C+Kota+Jkt+Utara%2C+Daerah+Khusus+Ibukota+Jakarta+14230"
          class="mt-5 rounded-md w-full relative z-20"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import CardAbout from '@/components/CardAbout.vue';

export default {
  components: {
    CardAbout,
  },
  mounted() {
    // eslint-disable-next-line
    AOS.init({
      once: false,
    });
  },
};
</script>

<style scoped>
.intro-cta {
  font-weight: 500;
  display: block;
  width: 100%;
  max-width: 200px;
  font-size: 1em;
  /* margin-top: 2em; */
  padding: 0.75em 1em;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  background: #ec4357;
  text-decoration: none;
}

.intro-cta:hover {
  background: #ec4357c5;
  transition: 0.5s;
}

.quote {
  color: rgb(226, 92, 92);
}

#card-about-container {
  display: grid;
  grid-template-columns: 1fr;
}

#map {
  height: 400px;
}

@media screen and (min-width: 1040px) {
  #card-about-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
