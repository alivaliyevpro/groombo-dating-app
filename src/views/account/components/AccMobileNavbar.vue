<script setup lang="ts">
import { ref } from 'vue'

const activeLink = defineModel()

const navLinks = ref([
  { icon: 'comment' },
  { icon: 'envelope' },
  { icon: 'heart' },
  { icon: 'eye' },
  { icon: 'user' },
])

function handleClick(index: number) {
  activeLink.value = index
  console.log(`${index} clicked`)
}
</script>

<template>
  <!-- Mobile Navbar -->
  <div class="acc-mobile-nav__nav-links mobile-nav-links">
    <div class="mobile-nav-links__wrapper">
      <!-- Nav Link -->
      <button
        v-for="(navLink, index) in navLinks"
        :key="index"
        class="mobile-nav-link__wrapper"
        :class="activeLink === index && 'mobile-nav-link__active-link'"
        @click="handleClick(index)"
      >
        <i
          v-if="activeLink === index"
          class="mobile-nav-link__icon"
          :class="`fa-solid fa-${navLink.icon}`"
        ></i>
        <i
          v-else
          :class="`mobile-nav-link__icon fa-regular fa-${navLink.icon}`"
        ></i>
      </button>
      <!-- Nav Link -->
    </div>
  </div>
  <!-- Mobile Navbar -->
</template>

<style scoped lang="scss">
.acc-mobile-nav {
  // .acc-mobile-nav__nav-links
  &__nav-links {
  }
}

.mobile-nav-links {
  @apply fixed bottom-0 left-0 right-0 min-w-[320px] h-[50px] bg-white overflow-hidden
  
   shadow-[0px_-4px_8px_0px_#6061701a] rounded-[15px_15px_0_0];

  // .mobile-nav-links__wrapper
  &__wrapper {
    @apply flex justify-evenly py-2;
  }
}
.mobile-nav-link {
  // .mobile-nav-link__wrapper
  &__wrapper {
  }

  &__active-link {
  }

  // .mobile-nav-link__icon
  &__icon {
    @apply w-5 h-5 text-primary;
  }
}
</style>
