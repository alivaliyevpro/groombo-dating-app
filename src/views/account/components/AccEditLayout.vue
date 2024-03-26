<script setup lang="ts">
import AccProfileAside from '../components/AccProfileAside.vue'
import AccEditProfileInfo from '../components/AccEditProfileInfo.vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const desktop = breakpoints.greaterOrEqual('xl')
const mobile = breakpoints.smaller('xl')

const editProfile = defineModel()
</script>

<template>
  <div class="acc-edit-layout">
    <div class="acc-edit-layout__wrapper">
      <!-- Accout Desktop Edit Layout -->
      <div
        v-if="desktop"
        class="acc-edit-layout__desktop-layout desktop-layout"
      >
        <div class="desktop-layout__wrapper">
          <!-- Left Aside of Edit Layout -->
          <div class="acc-edit-layout__left-aside">
            <div class="acc-edit-layout__left-aside-wrapper">
              <AccProfileAside v-model="editProfile" />
            </div>
          </div>
          <!-- Left Aside of Edit Layout -->

          <!-- Main Edit Section -->
          <div class="acc-edit-layout__main-content main-content">
            <div class="main-content__wrapper">
              <AccEditProfileInfo v-model="editProfile" />
            </div>
          </div>
          <!-- Main Edit Section -->
        </div>
      </div>
      <!-- Accout Desktop Edit Layout -->

      <!-- Accout Mobile Edit Layout -->
      <div v-if="mobile" class="acc-edit-layout__mobile-layout mobile-layout">
        <div class="mobile-layout__wrapper">
          <!-- Main Mobile Edit  -->
          <AccEditProfileInfo v-model="editProfile" />
        </div>
      </div>
      <!-- Accout Mobile Edit Layout -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-edit-layout {
  // .acc-edit-layout__wrapper
  &__wrapper {
  }

  // .acc-edit-layout__desktop-layout
  &__desktop-layout {
    @apply absolute backdrop-blur-[25px] inset-0 bg-[#cde3fd]/80;
  }

  // .acc-edit-layout__left-aside
  &__left-aside {
  }

  // .acc-edit-layout__left-aside-wrapper
  &__left-aside-wrapper {
  }

  // .acc-edit-layout__main-content
  &__main-content {
    @apply flex-auto;
  }

  // .acc-edit-layout__mobile-layout
  &__mobile-layout {
  }
}
.desktop-layout {
  // .desktop-layout__wrapper

  @apply h-full;
  &__wrapper {
    @apply flex xl:py-6 xl:px-4 xl:gap-4;
  }
}
.main-content {
  // .main-content__wrapper
  &__wrapper {
  }
}
.mobile-layout {
  // .mobile-layout__wrapper
  &__wrapper {
  }
}
</style>
