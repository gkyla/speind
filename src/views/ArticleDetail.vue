<template>
  <div
    class="bg-speind-black h-full pt-20 my-10"
    style="overflow: unset"
    v-if="$store.state.articles && articleObj"
  >
    <div class="wrapper mx-auto relative">
      <div class="grid-article-detail overflow-x-visible">
        <div id="card-detail-article" class="flex flex-col">
          <img
            :src="articleObj.picture"
            class="rounded-md img-article relative z-20"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1250"
          />
          <div>
            <h1 class="text-left text-2xl mt-3">
              {{ articleObj.name }}
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
          <div id="article-lainnya-top" class="mt-5 sticky top-16">
            <h2 class="text-left text-2xl my-2 sticky top-0 overflow-x-hidden">
              Article lain nya
            </h2>
            <!-- <div class="bg-speind-red w-10 h-1 my-4"></div> -->

            <div class="grid gap-3 sticky top-4 overflow-x-hidden">
              <div
                class="
                  grid
                  gap-5
                  grid-cols-2
                  bg-speind-gray
                  text-white
                  p-2
                  rounded-md
                "
                v-for="article in anotherArticle"
                :key="article.id"
              >
                <img
                  :src="article.picture"
                  class="rounded-md another-article-img"
                  alt="article"
                />
                <h1 class="text-left">
                  <router-link
                    :to="`/article/${article.id}`"
                    class="hover:text-speind-red transition-all"
                    >{{ article.name }}</router-link
                  >
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="
              overflow-x-hidden
              text-left
              bg-speind-gray
              rounded-md
              text-speind-white
              p-4
              relative
              z-20
            "
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1250"
          >
            <h1 class="text-left text-2xl mt-3">
              {{ articleObj.name }}
            </h1>
            <div class="bg-speind-red w-10 h-1 my-4 rounded"></div>

            <div
              class="
                w-full
                p-1
                px-5
                my-2
                rounded-md
                bg-speind-black
                flex
                justify-between
                flex-wrap
              "
            >
              <div>
                <i class="fas fa-pencil-alt"></i>
                <span class="ml-4">SPEIND Team</span>
              </div>
              <div>
                <i class="far fa-calendar-alt"></i>
                <span class="ml-4">Minggu, 20 Juni 2021</span>
              </div>
            </div>

            <div v-html="description"></div>
          </div>

          <div
            id="comment"
            class="bg-speind-gray w-full rounded-md mt-3 px-4 py-4"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1250"
          >
            <div class="bg-speind-black p-3 rounded-lg text-white">
              <h1 class="text-2xl text-left">Komentar</h1>
              <div class="bg-speind-red w-10 h-1 my-2 rounded"></div>

              <p class="py-2 text-left">
                Suka dengan article <b>{{ articleObj.name || "nya" }}</b> ? Yuk
                ramaikan Kolom komentar, jangan Spam ya 😁
              </p>
            </div>

            <div v-if="commentsPost">
              <div
                v-for="comment in commentsPost"
                class="mt-4"
                :key="comment.photoURL"
              >
                <div class="flex justify-between mt-2 gap-3">
                  <img
                    :src="comment.img"
                    class="
                      mt-1
                      rounded-full
                      w-12
                      h-12
                      object-center object-cover
                      border-2 border-white
                    "
                    :alt="comment.name"
                  />
                  <div
                    class="
                      flex flex-col
                      bg-speind-black
                      rounded-xl
                      w-full
                      text-left
                      py-3
                      px-3
                    "
                  >
                    <div class="flex justify-between flex-wrap gap-1">
                      <span class="text-gray-400">{{ comment.name }}</span>
                      <span class="text-gray-400">{{ comment.createdAt }}</span>
                    </div>
                    <p class="mt-1">
                      {{ comment.comment }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <div
                v-if="!commentsPost"
                class="flex justify-center items-center my-5"
              >
                <img
                  src="../assets/images/loading.svg"
                  class="w-16 h-16"
                  alt="Loading"
                />
              </div>
            </transition>

            <form
              id="box-form"
              class="flex flex-col mt-3"
              @submit.prevent="submitComment"
            >
              <div class="input-group flex flex-col">
                <label for="komentar" class="text-left my-2"
                  >Kamu mau Komentar apa nih ?</label
                >
                <div class="photo-and-input flex gap-2">
                  <img
                    v-if="imgDefault && !user"
                    :src="imgDefault"
                    alt="img-picture"
                    class="
                      w-10
                      h-10
                      rounded-full
                      object-center object-cover
                      inline-block
                      border-2 border-speind-white
                    "
                  />
                  <img
                    v-if="imgDefault && user?.photoURL"
                    :src="user?.photoURL"
                    alt="img-picture"
                    class="
                      w-10
                      h-10
                      rounded-full
                      object-center object-cover
                      inline-block
                      border-2 border-speind-white
                    "
                  />
                  <input
                    type="text"
                    placeholder="Tulis komentar..."
                    v-model="comment"
                    class="
                      text-white
                      rounded-xl
                      py-2
                      px-2
                      w-full
                      bg-speind-black
                    "
                    id="komentar"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="
                  self-end
                  my-2
                  py-2
                  px-3
                  bg-speind-black
                  rounded-xl
                  transition-all
                  hover:bg-gray-600
                "
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div class="mt-5 overflow-x-hidden" id="article-lainnya-bottom">
          <h2 class="text-left text-2xl my-2">Article lain nya</h2>
          <div class="bg-speind-red w-10 h-1 my-4 rounded"></div>

          <div id="article-lainnya-card-bottom" class="gap-3">
            <div
              class="grid gap-5 bg-speind-gray p-2 rounded-md"
              v-for="article in anotherArticle"
              :key="article.id"
            >
              <img
                :src="article.picture"
                class="rounded-md another-article-img-mobile"
                alt="article"
              />
              <h1 class="text-left hover:text-speind-red transition-all">
                <router-link
                  :to="`/article/${article.id}`"
                  class="hover:text-speind-red transition-all"
                  >{{ article.name }}</router-link
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div
        id="modal-wrapper"
        v-if="!isLogin && modalOpened"
        @click.stop="closeModal"
      >
        <!-- if not signin -->
        <div id="modal-content" @click.stop>
          <button
            id="close-modal-content"
            class="
              bg-speind-red
              py-1
              px-4
              rounded-full
              text-white
              border-white border-2
            "
            @click.stop="closeModal"
          >
            x
          </button>

          <div class="bg-speind-black rounded-lg p-4 text-white">
            <h1 class="text-lg">Seperti nya kamu belum login 🤔</h1>
            <div class="mt-2">
              <p>Agar kamu bisa berkomentar kamu harus login terlebih dahulu</p>
              <p>Yuk login dengan akun gmail kamu</p>
            </div>
          </div>

          <button
            class="
              google-social-login
              p-2
              flex
              gap-3
              items-center
              justify-center
              mt-4
            "
            @click.stop="googleLogin"
          >
            <div class="bg-white inline-block rounded p-1">
              <img
                src="../assets/images/google.png"
                width="30"
                height="30"
                alt="google social login"
                class="inline-block"
              />
            </div>
            <span class="text-white">Sign in with Google</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import { useAuth,PostsComments } from '../firebase';

const { signInGoogle, user,unsubscribe,isLogin } = useAuth();


export default {
  data() {
    return {
      description: '',
      articleObj: null,
      anotherArticle: null,
      modalOpened: false,
      comment: '',
      imgDefault: require('../assets/images/placeholder-profile.png'),
      user,
      isLogin,
      commentsPost: null,
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
    },
    async getAnotherArticle() {
      const anotherArticle = this.allArticles.filter((arc, index) => arc.id !== this.$route.params.id && index <= 4);
      this.anotherArticle = anotherArticle;
      console.log(anotherArticle);
    },
    async googleLogin() {
      await signInGoogle();
      this.modalOpened = false;
    },
    async submitComment() {
      if (!isLogin.value) {
        this.modalOpened = true;
        return
      }

      if(this.comment.trim() === ''|| this.comment === ""){
        return 
      }

      console.log(this.user)
      
      await PostsComments.add(this.$route.params.id, {
        name : this.user.displayName,
        img : this.user.photoURL,
        comment : this.comment
      })

      this.loadComments()
    },
    closeModal() {
      this.modalOpened = false;
    },
    doNothing() {
      console.log('Do Nothing :)');
    },
    async loadComments(){
      this.commentsPost = await PostsComments.load(this.$route.params.id)
    }
  },
  async created() {
    if (!this.$store.state.articles) {
      await this.$store.dispatch('getArticles');
    }
    this.getDetailObj();
    this.getAnotherArticle();
  },
  async mounted(){
    this.loadComments()
  },
  unmounted(){
    unsubscribe()
  }

};
</script>

<style scoped>
#modal-wrapper {
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

#modal-content {
  background: white;
  border-radius: 10px;
  color: black;
  padding: 1rem;
  max-width: 470px;
  position: relative;
  z-index: 210;
}

#close-modal-content {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 210;
}

.google-social-login {
  border-radius: 10px;
  background-color: #4185f4;
  width: 100%;
  height: 100%;
}
</style>


<style scoped>
.grid-article-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.img-article {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.another-article-img-mobile {
  height: 190px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.another-article-img {
  height: 100px;
  width: 100%;
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
  .img-article {
    height: 390px;
  }

  #article-lainnya-card-bottom {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
