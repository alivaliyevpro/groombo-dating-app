<script setup lang="ts">
// interface Props {
//   desktopView: boolean
// }
// const { desktopView } = defineProps<Props>()

const desktopView = false
</script>

<template>
  <div class="reg-banner">
    <div class="reg-banner__container">
      <div class="reg-banner__wrapper">
        <div class="reg-banner__layer reg-banner__layer-first"></div>
        <div class="reg-banner__layer reg-banner__layer-second"></div>
        <div class="reg-banner__layer reg-banner__layer-cover reg-banner-cover">
          <div class="reg-banner-cover__wrapper">
            <!-- Desktop cover content-->
            <div
              v-if="desktopView"
              class="reg-banner-cover__desktop-content reg-banner-cover-content"
            >
              <img
                src="../../../assets/img/bruce-mars-AndE50aaHn4-unsplash 1.png"
                alt="cover-img"
                class="reg-banner-cover-content__img"
              />
            </div>

            <!-- Mobile cover content-->
            <div
              v-else
              class="reg-banner-cover__mobile-content reg-banner-cover-content"
            >
              <h1 class="reg-banner-cover-content__title">
                Make The First Move.
              </h1>
              <p class="reg-banner-cover-content__text">
                Start meeting new people <br />
                in your area!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-banner {
  @apply h-[395px] xl:h-[807px] xl:px-8;

  // border: 5px solid #04ee04;

  // .reg-banner__container
  &__container {
    @apply h-full w-full;
  }

  // .reg-banner__wrapper
  &__wrapper {
    @apply flex justify-center items-center xl:justify-start h-full w-full relative; // xl:ml-5
  }

  // .reg-banner__layer

  &__layer {
    @apply bg-primary rounded-2xl h-[366px] xl:h-[748px] w-[260px] xl:w-[573px] absolute;
  }

  // .reg-banner__layer-first

  &__layer-first {
    @apply -rotate-5 opacity-50;
  }

  // .reg-banner__layer-second

  &__layer-second {
    @apply -rotate-2 opacity-50;
  }

  // .reg-banner__layer-cover

  &__layer-cover {
    @apply rotate-1;
  }
}
.reg-banner-cover {
  @apply overflow-hidden;

  // .reg-banner-cover__wrapper

  &__wrapper {
    @apply h-full w-full;
  }

  // .reg-banner-cover__desktop-content

  &__desktop-content {
    @apply h-full w-full;
  }

  // .reg-banner-cover__mobile-content

  &__mobile-content {
  }
}
.reg-banner-cover-content {
  // border: 1px solid #04ee04;

  @apply -rotate-1 h-full;

  // .reg-banner-cover-content__imgS

  &__img {
    @apply h-full w-full scale-110 bg-cover;
  }

  // .reg-banner-cover-content__title

  &__title {
    @apply font-sans mt-[89px] ml-[17px] text-[40px] leading-[54px] font-bold text-white;
  }

  // .reg-banner-cover-content__text

  &__text {
    @apply font-sans ml-4 mt-11 text-white font-normal text-sm text-left leading-6;
  }
}
</style>
