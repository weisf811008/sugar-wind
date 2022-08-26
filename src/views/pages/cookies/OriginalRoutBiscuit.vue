<script setup>
import PrimaryButton from '../../../components/PrimaryButton.vue'
</script>

<template>
  <mian>
    <section class="w-full h-screen bg-local bg-cover white-background">
      <section class="w-1/2 h-screen bg-local bg-cover color-background">
        <nav class="flex p-12">
          <PrimaryButton />
        </nav>
        <div class="w-[200%] flex items-center justify-center flex-wrap info">
          <div>
            <img
              class="w-[500px] object-cover"
              src="../../../assets/cookies/original_rout_biscuit.png"
              alt="原味杏仁餅乾"
            />
          </div>
          <div class="-mt-24">
            <div
              class="flex items-center justify-center mb-12 text-5xl intro text-primary sm:text-4xl"
            >
              原味杏仁餅乾
            </div>
            <div
              class="flex items-center justify-center mb-12 text-2xl text-center intro text-primary sm:text-xl"
            >
              低筋麵粉、蛋、奶油、砂糖、杏仁角
            </div>
            <div
              class="flex items-center justify-center mb-12 text-center intro text-primary"
            >
              <span class="mr-4 text-4xl intro sm:text-3xl">180元</span>
              <span class="text-2xl intro sm:text-xl">(185g/包)</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  </mian>
</template>

<style scoped>
.white-background {
  background-image: url('../../../assets/main/white_bg.jpg');
}

.color-background {
  background-image: url('../../../assets/main/footer_bg.png');
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
  .color-background {
    width: 100% !important;
  }
  nav {
    padding: 1rem !important;
  }
  .info {
    width: 100% !important;
  }

  .intro {
    color: white !important;
  }
}
</style>
