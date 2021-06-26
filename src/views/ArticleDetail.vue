<template>
  <div class="min-h-screen bg-speind-black h-100 pt-40 my-10">
    <div class="wrapper mx-auto">
      <div class="grid-article-detail mx-4" v-if="articleObj">
        <div id="card-detail-article" class="flex flex-col">
          <img
            :src="articleObj.picture"
            class="rounded-md img-article"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1250"
          />
          <div>
            <h1 class="text-left text-2xl mt-3">
              {{articleObj.name}}
            </h1>
            <!-- <div class="bg-speind-red w-10 h-1 mt-4"></div> -->
            <div class="flex gap-2 my-5">
              <span class="p-2 bg-speind-white text-speind-red rounded-md"
                >SMK</span
              >
              <span class="p-2 bg-speind-white text-speind-red rounded-md"
                >FAQ</span
              >
            </div>
          </div>
          <div id="article-lainnya-top" class="mt-5">
            <h2 class="text-left text-2xl my-2">Article lain nya</h2>
            <!-- <div class="bg-speind-red w-10 h-1 my-4"></div> -->

            <div class="grid gap-3">
              <div class="grid gap-5 grid-cols-2 bg-speind-gray p-2 rounded-md"
                v-for="article in anotherArticle" :key="article.id"
              >
                <img
                  :src="article.picture"
                  class="rounded-md"
                  alt="article"
                />
                <h1 class="text-left text-lg">
                  <router-link :to="`/article/${article.id}`"
                    >{{article.name}}</router-link
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          class="text-left bg-speind-gray rounded-md text-speind-white p-4"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1250"
        >
          <h1 class="text-left text-2xl mt-3">
            {{articleObj.name}}
          </h1>
          <div class="bg-speind-red w-10 h-1 my-4"></div>

          <div class="w-full p-1 px-5 my-2 rounded-md bg-speind-black">
            <i class="fas fa-pencil-alt"></i>
            <span class="ml-4">Minggu, 20 Juni 2021</span>
          </div>

          <div v-html="description"></div>
        </div>
        <div class="mt-5" id="article-lainnya-bottom">
          <h2 class="text-left text-2xl my-2">Article lain nya</h2>
          <div class="bg-speind-red w-10 h-1 my-4"></div>

          <div id="article-lainnya-card-bottom" class="gap-3">
            <div
              class="grid gap-5 bg-speind-gray p-2 rounded-md"
              v-for="article in anotherArticle" :key="article.id"
            >
              <img
                  :src="article.picture"
                  class="rounded-md"
                  alt="article"
                />
                <h1 class="text-left text-lg">
                  <router-link :to="`/article/${article.id}`"
                    >{{article.name}}</router-link
                  >
                </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      description: '',
      articleObj: null,
      anotherArticle: null,
    };
  },
  computed: {
    ...mapGetters([
      'allArticles',
      'currentDetail',
    ]),
  },
  methods: {
    async getDetailObj() {
      const arr = this.allArticles;
      const currentObj = arr.find((arc) => arc.id === this.$route.params.id);
      this.articleObj = currentObj;

      // description
      const description = await fetch(this.articleObj.htmlTemplate);
      this.description = await description.text();

      console.log(this.articleObj);
    },
    async getAnotherArticle() {
      const anotherArticle = this.allArticles.filter((arc, index) => arc.id !== this.$route.params.id && index < 4);
      this.anotherArticle = anotherArticle;
      console.log(anotherArticle);
    },
  },
  mounted() {
    // this.$store.dispatch('getDetail');
    // this.articleObj = this.currentDetail;
    this.getDetailObj();
    this.getAnotherArticle();
  },
};
</script>

<style scoped>
.grid-article-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.img-article {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
}

#article-lainnya-top {
  display: none;
}

#article-lainnya-bottom {
  display: block;
}

#article-lainnya-card-bottom {
  display: grid;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 1200px) {
  #article-lainnya-top {
    display: block;
  }

  #article-lainnya-bottom {
    display: none;
  }

  .grid-article-detail {
    grid-template-columns: 1fr 1.9fr;
  }
}

@media screen and (min-width: 768px) {
  #article-lainnya-card-bottom {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
