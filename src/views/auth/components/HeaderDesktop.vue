<template>
  <div class="header__wrapper">
    <div class="header__logo logo">
      <div class="logo__container">
        <div class="logo__wrapper">
          <img
            class="logo__img"
            src="../../../assets/img/sample-logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>

    <div class="header__question question">
      <div class="question__wrapper">
        <h3 class="question__text">Have an account?</h3>
        <div class="question__button button">
          <button class="button__sign-in">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  // .header__wrapper

  &__wrapper {
    @apply flex justify-between;
  }

  // .header__logo

  &__logo {
  }

  // .header__question

  &__question {
  }
}
.logo {
  // .logo__container

  &__container {
  }

  // .logo__wrapper

  &__wrapper {
  }

  // .logo__img

  &__img {
  }
}
.question {
  @apply flex;
  // .question__wrapper

  &__wrapper {
    @apply flex items-center gap-3;
  }

  // .question__text

  &__text {
    @apply font-sans text-xs font-normal text-left text-[rgb(40,41,61)];
  }

  // .question__button

  &__button {
  }
}
.button {
  // .button__sign-in

  &__sign-in {
    @apply rounded-xl h-10 w-[80px] text-center leading-[0.2px] font-medium text-xs font-sans  text-primary border border-primary;
  }
}
</style>
