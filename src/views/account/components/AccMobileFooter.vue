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
  // border: 1px solid red;

  // .acc-mobile-footer__wrapper
  &__wrapper {
    // border: 1px solid green;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #c7c9d9;
    padding-top: 24px;
    // margin-bottom: 74px;
    margin-bottom: 50px;
  }

  // .acc-mobile-footer__link-item

  &__link-item {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #28293d;
  }
}
</style>
