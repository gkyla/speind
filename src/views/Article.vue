<template>
  <div
    id="article"
    class="wrapper px-5 my-10 bg-speind-black"
    v-if="allArticles"
  >
    <h1 class="heading">ARTICLE</h1>
    <div class="mt-10">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :navigation="true"
        class="h-96 rounded-md"
      >
        <swiper-slide
          v-for="article in articlesData.allArticles"
          :key="article.id"
          class="relative"
        >
          <img
            :src="article.picture"
            class="w-full h-full object-cover"
            alt=""
          />
          <div
            class="
              md:w-96
              h-32
              bg-speind-gray
              rounded-r-md
              absolute
              md:bottom-5
              md:left-5
              bottom-0
              left-0
              right-0
              z-20
              grid
              place-items-center
            "
          >
            <h2 class="text-xl text-align">{{ article.name }}</h2>
            <router-link
              :to="`/article/${article.id}`"
              class="
                hover:bg-speind-white
                hover:text-speind-red
                p-1
                rounded-md
                transition-all
              "
              >See more</router-link
            >
          </div>
        </swiper-slide>
      </swiper>
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

        <router-link
          to="/article/smk-masa-kini-dan-yang-akan-datang"
          class="intro-cta"
        >
          Baca Selengkapnya
        </router-link>
      </div>
    </div>

    <div class="mt-5 px-2">
      <h2 class="text-left text-2xl">Article Pilihan</h2>
      <div class="bg-speind-red w-20 h-1 mt-2 mb-5"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="rounded-md">
          <img
            class="rounded-md"
            src="/img/article/tp.jpeg"
            alt="Kumpulan Jurusan SMK yang paling diminati"
          />

          <div class="rounded-md text-speind-white mt-2 py-1 relative z-10">
            <router-link
              to="/article/beragam-jurusan-smk-yang-paling-diminati"
              class="
                text-left
                panel-link
                hover:text-speind-red
                hover:bg-speind-white
                transition-all
                block
                py-1
                px-2
                rounded-md
                md:text-xl
              "
            >
              Beragam Jurusan SMK Yang Paling Diminati
            </router-link>
            <div class="bg-speind-red w-10 h-1 my-2"></div>
            <p class="text-left">
              Buat kamu yang sudah mau memutuskan untuk masuk SMK tapi masih
              bingung untuk masuk jurusan mana ? berikut adalah article tentang
              kumpulan jurusan SMK yang paling diminati
            </p>
          </div>
        </div>

        <div class="rounded-md">
          <img
            class="rounded-md"
            src="/img/article/kk-tkr.jpeg"
            alt="Kumpulan Jurusan SMK yang paling diminati"
          />

          <div class="rounded-md py-1 mt-2 text-speind-white relative z-10">
            <router-link
              to="/article/5-fakta-tentang-sekolah-menengah-kejuruan"
              class="
                block
                text-left
                panel-link
                hover:text-speind-red
                hover:bg-speind-white
                transition-all
                py-1
                px-2
                rounded-md
                md:text-xl
              "
            >
              5 Fakta Tentang Sekolah Menengah Kejuruan
            </router-link>
            <div class="bg-speind-red w-10 h-1 my-2"></div>
            <p class="text-left">
              Buat kamu yang sudah mau memutuskan untuk masuk SMK tapi masih
              bingung untuk masuk jurusan mana ? berikut adalah article tentang
              kumpulan jurusan SMK yang paling diminati
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';

import SwiperCore, {
  Navigation,
} from 'swiper/core';
import DATA from '../../public/data/articles.json';
import 'swiper/swiper.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper modules
SwiperCore.use([Navigation]);
// https://majalahsunday.com/lebih-baik-masuk-sma-atau-smk-ketahui-7-hal-ini-sebelum-memilih/

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      htmlTemplate: null,
      articlesData: DATA,
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
    console.log(this.articlesData);
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
