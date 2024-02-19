<script setup lang="ts">
import Buttons from './components/Buttons.vue'
import Banner from './components/Banner.vue'
import FooterDesktop from './components/FooterDesktop.vue'
import HeaderDesktop from './components/HeaderDesktop.vue'

interface Props {
  desktopView: boolean
}

const { desktopView } = defineProps<Props>()
</script>

<template>
  <main class="page">
    <div class="page__auth--desktop auth">
      <div class="auth__container">
        <div class="auth__wrapper">
          <div class="auth__intro intro">
            <div class="intro__wrapper">
              <div class="intro-content left-side">
                <div class="left-side__wrapper left-side-content">
                  <div class="left-side-content__header">
                    <HeaderDesktop />
                  </div>
                  <div class="left-side-content__texts">
                    <h1 class="left-side-content__main-text">
                      Make The First Move.
                    </h1>
                    <p class="left-side-content__secondary-text">
                      You can go to the search page and start looking for your
                      love! We hope you enjoy our site..
                    </p>

                    <div class="left-side-content__buttons buttons">
                      <Buttons />
                    </div>
                  </div>

                  <div class="footer">
                    <FooterDesktop />
                  </div>
                </div>
              </div>
              <div class="intro-content right-side">
                <div class="right-side__wrapper auth__banner banner--desktop">
                  <Banner :desktopView="desktopView" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  // .page__auth--desktop

  &__auth--desktop {
  }
}
.auth {
  // .auth__container

  &__container {
  }

  // .auth__wrapper

  &__wrapper {
    @apply h-screen w-full px-[6.25rem] items-center flex;
  }
}
.intro {
}
.intro-content {
}
.left-side {
  @apply w-full;

  // .left-side__wrapper

  &__wrapper {
    @apply min-h-[90vh] pr-20 justify-between flex-col flex;
  }
}
.left-side-content {
  @apply flex flex-col justify-between;

  // .left-side-content__header

  &__header {
  }

  // .left-side-content__texts

  &__texts {
  }

  // .left-side-content__main-text

  &__main-text {
    @apply text-primary font-sans text-[90px] leading-[5.625rem] font-bold;
  }

  &__secondary-text {
    // @apply font-sans mt-10 text-lg font-normal;

    // font-family: Inter;
    // font-size: 18px;
    // font-weight: 400;
    // line-height: 30px;
    // letter-spacing: 0em;
    // text-align: left;
  }

  // .left-side-content__buttons

  &__buttons {
    @apply mt-10;
  }
}
// .left-side-content-secondary-text {
// }
.buttons {
}
.footer {
}
.right-side {
  @apply w-full;

  // 50%

  // .right-side__wrapper

  &__wrapper {
    @apply min-h-[90vh] items-center flex;
  }
}
.banner {
  @apply md:min-w-full;
}
.banner--desktop {
}
</style>
