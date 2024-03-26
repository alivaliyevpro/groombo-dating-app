<script setup lang="ts"></script>

<template>
  <div class="acc-mobile-footer">
    <div class="acc-mobile-footer__wrapper">
      <a href="#" class="acc-mobile-footer__link-item">About</a>
      <a href="#" class="acc-mobile-footer__link-item">Contact</a>
      <a href="#" class="acc-mobile-footer__link-item">FAQ</a>
      <a href="#" class="acc-mobile-footer__link-item">Terms</a>
      <a href="#" class="acc-mobile-footer__link-item">Privacy</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-mobile-footer {
  // .acc-mobile-footer__wrapper
  &__wrapper {
    @apply flex justify-around border-t border-[#c7c9d9] pt-6 pb-[50px];
  }

  // .acc-mobile-footer__link-item
  &__link-item {
    @apply font-sans text-xs leading-[18px] font-normal text-dark;
  }
}
</style>
