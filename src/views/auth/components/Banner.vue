<script setup lang="ts">
// interface Props {
//   desktopView: boolean
// }
// const { desktopView } = defineProps<Props>()

const desktopView = true
</script>

<template>
  <div class="auth-banner">
    <div class="auth-banner__container">
      <div class="auth-banner__wrapper">
        <div class="auth-banner__layer auth-banner__layer--first"></div>
        <div class="auth-banner__layer auth-banner__layer--second"></div>
        <div class="auth-banner__layer auth-banner__layer--cover cover">
          <div class="cover__wrapper">
            <div v-if="desktopView" class="cover__content desktop-content">
              <img
                src="../../../assets/img/bruce-mars-AndE50aaHn4-unsplash 1.png"
                alt="cover-img"
                class="desktop-content__img"
              />
            </div>
            <div v-else class="cover__content mobile-content">
              <h1 class="mobile-content__primary-text">Make The First Move.</h1>
              <p class="mobile-content__secondary-text">
                You can go to the search page and start looking for your love!
                We hope you enjoy our site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-banner {
  // .auth-banner__container

  &__container {
    // @apply w-full;
  }

  // .auth-banner__wrapper

  // xl:h-[90vh]

  &__wrapper {
    // @apply relative h-[395px] mt-6 xl:mt-0 flex justify-center items-center xl:justify-start xl:ml-5;
  }

  // .auth-banner__layer

  &__layer {
    // @apply bg-primary rounded-2xl w-[260px] xl:w-[573px] h-[366px] xl:h-[748px] absolute;
  }

  // .auth-banner__layer--first

  &__layer--first {
    // @apply -rotate-5 opacity-50;
  }

  // .auth-banner__layer--second

  &__layer--second {
    // @apply -rotate-2 opacity-50;
  }

  // .auth-banner__layer--cover

  &__layer--cover {
    // @apply rotate-1;
  }
}
.cover {
  // @apply overflow-hidden;

  // .cover__wrapper
  &__wrapper {
  }

  // .cover__content

  &__content {
  }
}
.mobile-content {
  // .mobile-content__primary-text

  &__primary-text {
    // @apply font-sans mt-24 ml-4 -rotate-1 text-[40px] font-bold text-white;
  }

  // .mobile-content__secondary-text

  &__secondary-text {
    // @apply font-sans ml-4 mr-3 mt-11 text-white -rotate-1 leading-6 font-normal text-sm;
  }
}
.desktop-content {
  // .desktop-content__img

  &__img {
    // @apply -rotate-1 scale-110;
  }
}

// WHAAAAT

.auth-banner {
  // .auth-banner__container

  &__container {
    @apply w-full;
  }

  // .auth-banner__wrapper

  &__wrapper {
    @apply relative h-[395px] mt-6 xl:mt-0 flex justify-center items-center xl:justify-start xl:ml-5;
  }

  // .auth-banner__layer

  &__layer {
    @apply bg-primary rounded-2xl w-[260px] xl:w-[573px] h-[366px] xl:h-[748px] absolute;
  }

  // .auth-banner__layer--first

  &__layer--first {
    @apply -rotate-5 opacity-50;
  }

  // .auth-banner__layer--second

  &__layer--second {
    @apply -rotate-2 opacity-50;
  }

  // .auth-banner__layer--cover

  &__layer--cover {
    @apply rotate-1;
  }
}
.cover {
  @apply overflow-hidden;

  // .cover__wrapper

  &__wrapper {
  }

  // .cover__content

  &__content {
  }
}
.desktop-content {
  // .desktop-content__img

  &__img {
    @apply -rotate-1 scale-110;
  }
}
.mobile-content {
  // .mobile-content__primary-text

  &__primary-text {
    @apply font-sans mt-24 ml-4 -rotate-1 text-[40px] font-bold text-white;
  }

  // .mobile-content__secondary-text

  &__secondary-text {
    @apply font-sans ml-4 mr-3 mt-11 text-white -rotate-1 leading-6 font-normal text-sm;
  }
}
</style>
