<template>
  <div class="flex m-8">
    <button class="flex flex-row" @click="$router.back()">
      <img
        class="w-10 h-auto mr-8 back-button"
        src="../assets/buttons/icon_arrow_white.png"
        alt="arrow"
      />
      <span
        class="flex items-end text-3xl text-white whitespace-nowrap sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-xl"
      >
        返回
      </span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width: 320px) and (max-width: 1024px) {
  div {
    margin: 0.5rem !important;

    img {
      height: 2rem !important;
      margin-top: 1.5rem !important;
      margin-right: 0.5rem !important;
    }
  }
}
</style>
