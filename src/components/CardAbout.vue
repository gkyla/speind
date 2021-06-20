<template>
  <div
    id="card"
    class="h-full text-white inline-grid grid-cols-1 lg:grid-cols-1 gap-5"
  >
    <div id="card-ribbon" class="w-full bg-speind-gray p-4 rounded-2xl">
      <div class="relative">
        <img
          :src="imgSrc || require('../assets/about/placeholder.jpg')"
          alt="placeholder img"
          id="profile-picture"
          class="w-full"
          :class="parsePosition"
        />
        <h1
          class="
            text-sm
            bg-speind-red
            py-1
            px-3
            text-white
            font-semibold
            inline-block
            rounded-2xl
            absolute
            bottom-2
            right-2
          "
        >
          {{ name }}
        </h1>
        <div class="absolute bottom-1 left-2 grid gap-1 grid-cols-2">
          <a
            :href="ig || '#'"
            target="_blank"
            class="sosmed-link bg-speind-black p-3"
          >
            <img src="../assets/about/ig.png" class="social-logo" alt="Ig" />
          </a>
          <a
            :href="twitter || '#'"
            target="_blank"
            class="sosmed-link bg-speind-black p-3"
          >
            <img
              src="../assets/about/twitter.png"
              class="social-logo"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
      <div
        id="card-description"
        class="bg-speind-gray py-3 px-4 text-left rounded-2xl"
      >
        <h1 class="lg:text-2xl xl:text-3xl">{{ name }}</h1>

        <div>
          <slot name="description"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    imgPosition: {
      type: String,
    },
    ig: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  computed: {
    parsePosition() {
      switch (this.imgPosition) {
        case 'top':
          return 'object-top';
        case 'center':
          return 'object-center';
        case 'left':
          return 'object-left';
        case 'rigth':
          return 'object-right';
        case 'bottom':
          return 'object-bottom';
        default:
          return false;
      }
    },
  },

};
</script>

<style scoped>
.social-logo {
  display: block;
  width: 16px;
  height: 16px;
}

.sosmed-link {
  /* position: absolute; */
  bottom: 5px;
  left: 10px;
  display: inline-block;
  border-radius: 10px;
}

#card-ribbon #profile-picture {
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
}

@media screen (min-width: 1200px) {
  #card-ribbon #profile-picture {
    height: 400px;
    object-fit: cover;
  }
}
</style>
