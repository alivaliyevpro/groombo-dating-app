<script setup lang="ts">
import AccProfileAside from '../../views/account//components/AccProfileAside.vue'
import AccRightSide from '../../views/account//components/AccRightSide.vue'
// 372px
</script>
<template>
  <div class="account-container">
    <!-- Account Left-Side Container-->
    <div class="acc-left-side">
      <div class="acc-left-side__wrapper">
        <!-- Account Left-Side for PROFILE -->
        <AccProfileAside />
        <!-- Account Left-Side for PROFILE -->
      </div>
    </div>
    <!-- Account Left-Side Container-->

    <!-- Account Main Content-->
    <main class="acc-page">Maine</main>
    <!-- Account Main Content -->

    <!-- Account Right-Side Container -->
    <AccRightSide />
    <!-- Account Right-Side Container -->
  </div>
</template>

<style scoped lang="scss">
.account-container {
  border: 1px solid red;
  @apply flex h-[100vh];
}
.acc-left-side {
  // .acc-left-side__wrapper

  border: 1px solid green;
  @apply w-[372px] mx-auto;

  &__wrapper {
  }
}
.acc-page {
  border: 1px solid red;
  @apply flex-auto;
}
</style>
