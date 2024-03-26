<script setup lang="ts">
import AccProfileAside from '../../views/account//components/AccProfileAside.vue'
import AccDesktopRightSide from '../../views/account//components/AccDesktopRightSide.vue'
import AccMobileFooter from '../../views/account//components/AccMobileFooter.vue'
import AccMobileNavbar from '../../views/account//components/AccMobileNavbar.vue'
import AccEditLayout from '../../views/account//components/AccEditLayout.vue'
import AccProfileView from './AccProfileView.vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

// interface Props {}
// const {} = defineProps<Props>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const desktop = breakpoints.greaterOrEqual('xl')
const mobile = breakpoints.smaller('xl')

const activeLink = ref<number | undefined>(4)
let editProfile = ref<boolean>(true)
</script>

<template>
  <div class="account-container">
    <!-- Account Left-Side-->
    <div v-if="desktop || !editProfile" class="acc-left-side">
      <div class="acc-left-side__wrapper">
        <!-- Account Left-Side for PROFILE -->
        <AccProfileAside v-if="activeLink === 4" v-model="editProfile" />
        <!-- Account Left-Side for PROFILE -->
      </div>
    </div>
    <!-- Account Left-Side-->

    <!-- Account Main Section-->
    <main v-if="desktop || !editProfile" class="acc-page">
      <AccProfileView v-if="activeLink === 4" />
    </main>
    <!-- Account Main Section -->

    <!-- Account Desktop Right-Side -->
    <AccDesktopRightSide v-if="desktop" v-model="activeLink" />
    <!-- Account Desktop Right-Side -->

    <!-- Account Mobile Footer -->
    <AccMobileFooter v-if="mobile && !editProfile" />
    <!-- Account Mobile Footer -->

    <!-- Account Mobile Navbar -->
    <AccMobileNavbar v-if="mobile && !editProfile" v-model="activeLink" />
    <!-- Account Mobile Navbar -->

    <!-- Account Edit Layout -->
    <AccEditLayout v-if="editProfile" v-model="editProfile" />
    <!-- Account Edit Layout -->
  </div>
</template>

<style scoped lang="scss">
.account-container {
  // h-full
  @apply flex min-h-screen px-4 py-[15px] xl:py-6 flex-col xl:flex-row xl:gap-0 gap-3;
}

.acc-left-side {
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
