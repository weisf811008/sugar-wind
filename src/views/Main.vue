<script setup>
const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>

<template>
  <mian class="w-full">
    <section class="w-full h-screen bg-cover main-background">
      <nav class="flex flex-row justify-between h-1/3">
        <ul class="flex">
          <li class="mt-12 ml-12 sm:m-3 md:m-3 lg:m-3 xl:m-3">
            <a href="https://lin.ee/XWJkxAo" target="blank">
              <img
                class="w-[36px] md:w-[40px] lg:w-[44px] xl:w-[48px] 2xl:w-[52px]"
                src="../assets/header/icon_line.svg"
                alt="line"
              />
            </a>
          </li>
          <li class="mt-12 ml-12 sm:m-3 md:m-3 lg:m-3 xl:m-3">
            <a
              href="https://www.instagram.com/sugarwind.dessert/"
              target="blank"
            >
              <img
                class="w-[36px] md:w-[40px] lg:w-[44px] xl:w-[48px] 2xl:w-[52px]"
                src="../assets/header/icon_instagram.svg"
                alt="instagram"
              />
            </a>
          </li>
          <li class="mt-12 ml-12 sm:m-3 md:m-3 lg:m-3 xl:m-3">
            <a href="https://pse.is/49xr33" target="blank">
              <img
                class="w-[36px] md:w-[40px] lg:w-[44px] xl:w-[48px] 2xl:w-[52px]"
                src="../assets/header/icon_facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
        </ul>
        <ul
          class="flex text-right text-[#a65f48] text-lg sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]"
        >
          <li
            class="my-12 mr-3 tracking-widest sm:mt-3 sm:mr-0 md:mt-3 md:mr-0 lg:mt-3 lg:mr-0 xl:mt-4 xl:mr-0"
          >
            <router-link to="/">系列菜單</router-link>
          </li>
          <li class="m-12 tracking-widest sm:m-3 md:m-3 lg:m-3 xl:m-4">
            <router-link to="/">聯絡我們</router-link>
          </li>
        </ul>
      </nav>
      <div class="w-full h-1/2">
        <div class="flex justify-center">
          <img src="../assets/logo.png" alt="logo" />
        </div>
      </div>
      <div class="flex justify-center mb-8 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4">
        <h3
          class="text-3xl tracking-widest text-[#6a6a6a] sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl"
        >
          糖風手作甜點，甜得輕飄飄的
        </h3>
      </div>
      <div class="flex justify-center">
        <img
          class="w-14 cursor-point hover:cursor-pointer sm:w-8 md:w-10 lg:w-12 xl:w-12"
          src="../assets/main/down_arrow.png"
          alt="down-arrow"
          @click="scrollDown()"
        />
      </div>
    </section>
    <section class="w-full h-screen bg-cover white-background">
      <div
        class="flex flex-wrap items-center justify-center h-screen text-center"
      >
        <span>
          <img
            class="w-80 sm:w-40 md:w-44 lg:w-44 xl:w-48 2xl:w-52 3xl:w-56"
            src="../assets/main/cakes.png"
            alt="cakes"
          />
          <span
            class="text-3xl text-primary sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl"
            >蛋糕系列</span
          >
        </span>
        <span>
          <img
            class="w-80 sm:w-40 md:w-44 lg:w-44 xl:w-48 2xl:w-52 3xl:w-56"
            src="../assets/main/sweetTart.png"
            alt="sweetTart"
          />
          <span
            class="text-3xl text-primary sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl"
            >甜塔系列</span
          >
        </span>
        <span>
          <router-link to="/cookies">
            <img
              class="w-80 sm:w-40 md:w-44 lg:w-44 xl:w-48 2xl:w-52 3xl:w-56"
              src="../assets/main/cookies.png"
              alt="cookies"
            />
            <span
              class="text-3xl text-primary sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl"
              >餅乾系列</span
            >
          </router-link>
        </span>
        <span>
          <img
            class="w-80 sm:w-40 md:w-44 lg:w-44 xl:w-48 2xl:w-52 3xl:w-56"
            src="../assets/main/others.png"
            alt="others"
          />
          <span
            class="text-3xl text-primary sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl"
            >其他系列</span
          >
        </span>
      </div>
      <section class="w-full footer-background">
        <p
          class="flex items-center justify-center tracking-widest text-white h-7 -mt-7 translay-y-[100%]"
        >
          Copyright © SugarWind.com
        </p>
      </section>
    </section>
  </mian>
</template>

<style scoped>
.main-background {
  background-image: url('../assets/main/main_bg.jpg');
}

.white-background {
  background-image: url('../assets/main/white_bg.jpg');
}

.footer-background {
  background-image: url('../assets/main/footer_bg.png');
}
</style>
