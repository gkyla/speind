<template>
  <div id="article" class="wrapper px-5 my-10 bg-speind-black">
    <h1 class="heading">ARTICLE</h1>

    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        bg-white
        gap-10
        my-10
        p-10
        rounded-md
        text-black
        items-center
        relative
        z-20
      "
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1250"
    >
      <img src="../assets/images/undraw_career_progress_ivdb.svg" alt="" />
      <div class="rounded-md">
        <h2 class="text-2xl text-left">SMK Masa Kini Dan Yang Akan Datang</h2>

        <p class="text-left mt-5">
          Pendidikan di Indonesia berawal dari pendidikan berbasis keagamaan
          yang di selenggarakan oleh para pemuka dan penyebar agama Hindu,
          Budha, dan Islam. Pada zamannya, mereka telah mengembangkan sistem
          pendidikan yang relatif terstruktur dari segi isi maupun tingkatannya.
        </p>

        <p class="text-left mt-5">
          Namun sistem pendidikan dalam bentuk sekolah atau menyerupai sekolah
          baru dimulai pada abad ke-16...
        </p>

        <router-link to="/article" class="intro-cta">
          Baca Selengkapnya
        </router-link>
      </div>
    </div>

    <div class="mt-5 px-2">
      <h2 class="text-left text-2xl">Article Informasi & Berita</h2>
      <div class="bg-speind-red w-20 h-1 mt-2 mb-5"></div>

      <div class="grid-week relative z-20" v-if="topArticles">
        <div
          v-for="(article, index) in topArticles"
          :key="article.id"
          :class="['box', `box${index + 1}`]"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <img class="rounded-md" :src="article.picture" :alt="article.name" />
          <div class="panel">
            <router-link
              :to="`/article/${article.id}`"
              class="
                panel-link
                hover:text-speind-red
                hover:bg-speind-white
                transition-all
                inline-block
                py-1
                px-2
                rounded-md
              "
              >{{ article.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="my-20">
      <div class="custom-shape-divider-bottom-1624739046">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="between-full-wave w-full bg-white">
        <div class="wrapper py-20">
          <h1 class="text-2xl text-left text-speind-black">
            Sudah mau memutuskan untuk masuk tapi masih bingung untuk masuk
            jurusan mana ?
          </h1>
          <div class="bg-speind-red w-10 h-1 mt-4"></div>

          <div class="grid grid-cols-1 md:grid-cols-2">
            <img src="/img/article/av.jpeg" class="rounded-md" alt="w" />
            <h1 class="text-2xl text-black">WKOWKO</h1>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1624739098">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// https://majalahsunday.com/lebih-baik-masuk-sma-atau-smk-ketahui-7-hal-ini-sebelum-memilih/

export default {
  data() {
    return {
      htmlTemplate: null,
      // topArticles: null,
    };
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'allArticles',
      'topArticles',
    ]),
  },
  mounted() {

  },
};
</script>

<style scoped>
.between-full-wave {
  min-height: 600px;
}

.custom-shape-divider-bottom-1624739046 {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1624739046 svg {
  position: relative;
  display: block;
  width: calc(122% + 1.3px);
  height: 76px;
}

.custom-shape-divider-bottom-1624739046 .shape-fill {
  fill: #ffffff;
}

/* sad */

.custom-shape-divider-top-1624739098 {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1624739098 svg {
  position: relative;
  display: block;
  width: calc(122% + 1.3px);
  height: 76px;
}

.custom-shape-divider-top-1624739098 .shape-fill {
  fill: #ffffff;
}
</style>


<style scoped>
.intro-cta {
  font-weight: 500;
  display: block;
  width: 100%;
  max-width: 200px;
  font-size: 1em;
  margin-top: 2em;
  padding: 1em;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  background: #ec4357;
  text-decoration: none;
}

.intro-cta:hover {
  background-color: #222831;
  transition: 0.5s;
}

.grid-week {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 13px;
  position: relative;
}

.grid-week img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.box {
  width: 100%;
  height: 100%;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.box .panel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.15)
  );
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  transform: translateY(0%);
  transition: transform 0.5s ease-in-out;
  text-align: left;
}

.box1 {
  grid-row: 1/3;
}

.box2 {
  grid-row: 1/2;
  grid-column: 2 / 4;
}

.box3 .panel,
.box4 .panel {
  font-size: 17px;
}

@media (max-width: 1090px) {
  .box {
    font-size: 16px;
    padding: 0;
  }

  .grid-week {
    grid-template-columns: 1fr 1fr;
  }

  .box1 {
    grid-row: 1;
  }

  .box4 {
    grid-column: 2/4;
  }
}
@media (max-width: 1024px) {
  .box .panel {
    height: 80px;
    font-size: 16px;
  }
}

@media (max-width: 650px) {
  .grid-week {
    grid-template-columns: 1fr;
  }

  .box1 {
    grid-row: unset;
  }

  .box2 {
    grid-row: unset;
    grid-column: unset;
  }

  .box4 {
    grid-column: unset;
  }
}

/* Image hero responsive */
</style>
