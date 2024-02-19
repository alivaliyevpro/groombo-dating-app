<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__links">
          <routerLink to="/home" class="footer__link">Home</routerLink>
          <routerLink to="/about" class="footer__link">About</routerLink>
          <routerLink to="/contact" class="footer__link">Contact</routerLink>
          <routerLink to="/faq" class="footer__link">FAQ</routerLink>
          <routerLink to="/terms" class="footer__link">Terms</routerLink>
          <routerLink to="/privacy" class="footer__link">Privacy</routerLink>
        </div>

        <div class="footer__logo">
          <img
            class="logo"
            src="../../../assets/img/sample-logo.png"
            alt="logo"
          />
        </div>

        <p class="footer__copyright">&copy; Name 2024. We love our users!</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  // .footer__container

  &__container {
  }

  // .footer__wrapper

  &__wrapper {
    @apply mx-4 mb-4 border-t-gray border-t mt-6;
  }

  // .footer__links

  &__links {
    @apply mt-4 font-sans font-normal text-xs flex items-center justify-center gap-3;
  }

  // .footer__link

  &__link {
  }

  // .footer__logo

  &__logo {
    @apply flex items-center justify-center mt-4 mb-3;
  }

  // .footer__copyright

  &__copyright {
    @apply font-sans text-xs font-normal text-center text-dark;
  }
}
.logo {
}
</style>
