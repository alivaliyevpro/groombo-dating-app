<script setup lang="ts"></script>

<template>
  <div class="footer__container">
    <div class="footer__wrapper">
      <div class="footer__links">
        <router-link to="/home" class="footer__link">Home</router-link> /
        <router-link to="/about" class="footer__link">About</router-link> /
        <router-link to="/contact" class="footer__link">Contact</router-link> /
        <router-link to="/faq" class="footer__link">FAQ</router-link> /
        <router-link to="/terms" class="footer__link">Terms</router-link> /
        <router-link to="/privacy" class="footer__link">Privacy</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  // .footer__container

  &__container {
  }

  // .footer__wrapper

  &__wrapper {
  }

  // .footer__links

  &__links {
    @apply font-sans font-normal text-xs text-[#28293d];
  }

  // .footer__link

  &__link {
  }
}
</style>
