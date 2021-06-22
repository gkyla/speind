<template>
  <div class="w-100 h-100 min-h-screen bg-speind-black">
    <h1 class="heading">ARTICLE</h1>

    <div class="container mx-auto mt-5 px-2">
      <div class="grid-week">
        <div
          class="box box1"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <img
            class="rounded-md"
            src="../assets/article/tkj.jpeg"
            alt=" Restaurant"
          />
          <div class="panel">
            <router-link to="/article/1" class="panel-link"
              >5 Alasan Mengapa Kamu Harus Masuk SMK</router-link
            >
          </div>
        </div>
        <div
          class="box box2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <img
            class="rounded-md"
            src="../assets/about/placeholder.jpg"
            alt=" Restaurant"
          />
          <div class="panel">
            <router-link to="/article/2" class="panel-link"
              >Lorem ipsum dolor sit amet.</router-link
            >
          </div>
        </div>
        <div
          class="box box3"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <img
            class="rounded-md"
            src="../assets/about/placeholder.jpg"
            alt=" Restaurant"
          />
          <div class="panel">
            <router-link to="/article/3" class="panel-link"
              >Lorem ipsum dolor sit amet.</router-link
            >
          </div>
        </div>
        <div
          class="box box4"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <img
            class="rounded-md"
            src="../assets/about/placeholder.jpg"
            alt=" Restaurant"
          />
          <div class="panel">
            <router-link to="/" class="panel-link"
              >Lorem ipsum dolor sit amet.</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div v-if="articles">
      asas
      <div v-for="article in articles" :key="article.id">
        {{ article }}
        <img :src="article.picture" alt="" />
        <p>{{ article.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// https://majalahsunday.com/lebih-baik-masuk-sma-atau-smk-ketahui-7-hal-ini-sebelum-memilih/

export default {
  data() {
    return {
      htmlTemplate: null,
      articles: null,
    };
  },
  methods: {
    async getData() {
      const res = await fetch('/data/article.json');
      const data = await res.json();
      this.articles = data.article;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.grid-week {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 17px;
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
  padding: 10px 10px 10px 20px;
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
