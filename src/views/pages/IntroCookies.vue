<script setup>
import SecondaryButton from '../../components/SecondaryButton.vue'
</script>

<template>
  <mian>
    <section
      class="w-full bg-repeat h-max white-background 2xl:h-screen 3xl:h-screen 4xl:h-screen 5xl:h-screen"
    >
      <nav class="flex p-12">
        <SecondaryButton />
        <span class="flex items-center justify-center flex-grow">
          <img class="w-24" src="../../assets/main/cookies.png" alt="cookies" />
          <h1 class="text-3xl text-primary">餅乾系列</h1>
        </span>
      </nav>
      <section class="flex flex-wrap items-center justify-center">
        <router-link
          to="/cookies/originalRoutBiscuit"
          class="flex flex-col items-center"
        >
          <img
            class="w-60"
            src="../../assets/cookies/original_rout_biscuit.png"
            alt="原味杏仁餅乾"
          />
          <span class="mb-16 -mt-16 text-3xl text-primary">原味杏仁餅乾</span>
        </router-link>
        <router-link
          to="/cookies/originalChocolate"
          class="flex flex-col items-center"
        >
          <img
            class="w-60"
            src="../../assets/cookies/original_chocolate.png"
            alt="原味可可豆餅乾"
          />
          <span class="mb-16 -mt-16 text-3xl text-primary">原味可可豆餅乾</span>
        </router-link>
        <router-link
          to="/cookies/chocolateRoutBiscuit"
          class="flex flex-col items-center"
        >
          <img
            class="w-60"
            src="../../assets/cookies/chocolate_rout_biscuit.png"
            alt="杏仁可可餅乾"
          />
          <span class="mb-16 -mt-16 text-3xl text-primary">杏仁可可餅乾</span>
        </router-link>
        <router-link to="/cookies/chocolate" class="flex flex-col items-center">
          <img
            class="w-60"
            src="../../assets/cookies/chocolate.png"
            alt="可可豆餅乾"
          />
          <span class="mb-16 -mt-16 text-3xl text-primary">可可豆餅乾</span>
        </router-link>
        <router-link to="/cookies/hedgehog" class="flex flex-col items-center">
          <img
            class="w-60"
            src="../../assets/cookies/hedgehog.png"
            alt="刺蝟餅乾"
          />
          <span class="mb-16 -mt-16 text-3xl text-primary">刺蝟餅乾</span>
        </router-link>
      </section>
    </section>
  </mian>
</template>

<style lang="scss" scoped>
.white-background {
  background-image: url('../../assets/main/white_bg.jpg');
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  nav {
    padding: 1rem !important;

    h1 {
      font-size: 1.125rem !important;
      line-height: 1.75rem !important;
    }
  }
  section {
    span {
      font-size: 1.125rem !important;
      line-height: 1.75rem !important;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  nav {
    padding: 0.5rem !important;

    h1 {
      font-size: 1.25rem !important;
      line-height: 1.75rem !important;
    }
  }
  section {
    span {
      font-size: 1.125rem !important;
      line-height: 1.75rem !important;
    }
  }
}
</style>
