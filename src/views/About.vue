<template>
  <div id="about" class="min-h-screen bg-speind-black">
    <div class="wrapper md:mx-auto p-5">
      <div id="meet-our-team">
        <div class="text-center flex flex-col items-center">
          <h1 class="heading">MEET THE TEAM</h1>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10 relative z-30"
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
            :imgSrc="require('../assets/images/steven.jpeg')"
            imgPosition="top"
            ig="https://www.instagram.com/steven_christian20"
          >
            <template #description>
              <p class="my-2 text-sm">Majoring in Software Engineering</p>
              <p>SMK 1 Perguruan Cikini</p>
            </template>
          </CardAbout>
        </div>
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
</style>
