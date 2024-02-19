<script setup lang="ts"></script>

<template>
  <div class="buttons__wrapper">
    <button class="button auth-buttons__item button--my-profile">
      My Profile
    </button>
    <button class="button auth-buttons__item button--search">Search</button>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  // .auth-buttons__wrapper

  &__wrapper {
    @apply flex gap-4;
  }

  // .auth-buttons__item

  &__item {
  }
}
.button {
  @apply rounded-xl h-10 w-[136px] md:w-[85px]  text-center leading-[0.2px] font-medium text-xs font-sans;
}
.button--my-profile {
  @apply text-primary border border-primary;
}
.button--search {
  @apply bg-primary text-white;
}
</style>
