<script setup lang="ts">
import AccProfileAside from '../../views/account//components/AccProfileAside.vue'
import AccRightSide from '../../views/account//components/AccRightSide.vue'
import AccMobileFooter from '../../views/account//components/AccMobileFooter.vue'
import AccMobileNavbar from '../../views/account//components/AccMobileNavbar.vue'
import AccProfileView from './AccProfileView.vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

// interface Props {}
// const {} = defineProps<Props>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const desktop = breakpoints.greaterOrEqual('xl')
const mobile = breakpoints.smaller('xl')

const activeLink = ref<number | undefined>(4)
</script>

<template>
  <div class="account-container">
    <!-- Account Left-Side-->
    <div class="acc-left-side">
      <div class="acc-left-side__wrapper">
        <!-- Account Left-Side for PROFILE -->
        <AccProfileAside v-if="activeLink === 4" />
        <!-- Account Left-Side for PROFILE -->
      </div>
    </div>
    <!-- Account Left-Side-->

    <!-- Account Main Content-->
    <main class="acc-page">
      <AccProfileView v-if="activeLink === 4" />
    </main>
    <!-- Account Main Content -->

    <!-- Account Right-Side -->
    <AccRightSide v-if="desktop" v-model="activeLink" />
    <!-- Account Right-Side -->

    <!-- Account Mobile Footer -->
    <AccMobileFooter v-if="mobile" />
    <!-- Account Mobile Footer -->

    <!-- Account Mobile Navbar -->
    <AccMobileNavbar v-if="mobile" v-model="activeLink" />
    <!-- Account Mobile Navbar -->
  </div>
</template>

<style scoped lang="scss">
.account-container {
  // border: 1px solid green;

  @apply flex min-h-screen px-4 py-[15px] xl:py-6 flex-col xl:flex-row xl:gap-0 gap-3;
}

.acc-left-side {
  // border: 1px solid green;

  // .acc-left-side__wrapper
  &__wrapper {
    // border: 1px solid green;

    @apply xl:w-[340px] w-full mx-auto h-full xl:mr-4;
  }
}

.acc-page {
  // border: 1px solid rebeccapurple;
  @apply flex-auto;
}
</style>
