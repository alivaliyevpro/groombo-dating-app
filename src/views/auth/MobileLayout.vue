<script setup lang="ts">
import Buttons from './components/Buttons.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'

interface Props {
  desktopView: boolean
}

const { desktopView } = defineProps<Props>()
</script>

<template>
  <main class="page">
    <div class="page__auth--mobile auth">
      <div class="auth__container">
        <div class="auth__wrapper">
          <div class="auth__banner auth-banner">
            <Banner :desktopView="desktopView" />
          </div>
          <div class="auth__text auth-text">
            <div class="auth-text__wrapper intro-text">
              <p class="intro-text__content">
                Shall we start a Search or fill out an account?
              </p>
            </div>
          </div>
          <div class="auth__buttons auth-buttons">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
.page {
  // @apply flex-auto;

  // .page__auth

  &__auth--mobile {
  }
}
.auth {
  // .auth__container

  &__container {
  }

  // .auth__wrapper

  &__wrapper {
  }

  // .auth__banner

  &__banner {
  }
}

.auth {
  // .auth__text

  &__text {
  }
}
.auth-text {
  // .auth-text__wrapper

  &__wrapper {
    // @apply mt-8;
  }
}
.intro-text {
  // .intro-text__content

  &__content {
    // @apply font-sans font-semibold text-center leading-6 text-dark;
  }
}

.auth {
  // .auth__buttons

  &__buttons {
    // @apply flex gap-4 items-center justify-center mt-16;
  }
}
.buttons {
}

// newwww

.page {
  @apply flex-auto;

  // .page__auth--mobile

  &__auth--mobile {
  }
}
.auth {
  // .auth__container

  &__container {
  }

  // .auth__wrapper

  &__wrapper {
  }

  // .auth__banner

  &__banner {
  }

  // .auth__text

  &__text {
  }

  // .auth__buttons

  &__buttons {
    @apply flex gap-4 items-center justify-center mt-16;
  }
}
.auth-banner {
}
.auth-text {
  // .auth-text__wrapper

  &__wrapper {
    @apply mt-8;
  }
}
.intro-text {
  // .intro-text__content

  &__content {
    @apply font-sans font-semibold text-center leading-6 text-dark;
  }
}
.auth-buttons {
}
</style>
