<script setup lang="ts"></script>

<template>
  <div class="header__logo logo">
    <div class="logo__container">
      <div class="logo__wrapper">
        <img
          class="logo__wrapper--image"
          src="../../../assets/img/sample-logo.png"
          alt="logo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  // .header__logo

  &__logo {
  }
}
.logo {
  // .logo__container

  &__container {
    @apply w-full;
  }

  // .logo__wrapper

  &__wrapper {
    @apply flex justify-center mt-10 mb-6;
  }

  // .logo__wrapper--image

  &__wrapper--image {
  }
}
</style>
