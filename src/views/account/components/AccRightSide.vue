<script setup lang="ts">
import { ref } from 'vue'

const activeLink = defineModel()

const navLinks = ref([
  { title: 'Chat', icon: 'comment' },
  { title: 'Mail', icon: 'envelope' },
  { title: 'Favorites', icon: 'heart' },
  { title: 'Search', icon: 'eye' },
  { title: 'Profile', icon: 'user' },
])

function handleClick(index: number) {
  activeLink.value = index
  console.log(`${index} clicked`)
}
</script>

<template>
  <div class="acc-right-side">
    <div class="acc-right-side__wrapper">
      <!-- Right-Side Logo -->
      <div class="acc-right-side__logo-wrapper">
        <img
          class="acc-right-side__logo"
          src="../../../assets/img/sample-logo.png"
          alt="logo"
        />
      </div>
      <!-- Right-Side Logo -->

      <!-- Right-Side Navbar -->
      <div class="acc-right-side__nav-links nav-links">
        <div class="nav-links__wrapper">
          <!-- Nav Link -->
          <button
            v-for="(navLink, index) in navLinks"
            :key="index"
            class="nav-link__wrapper"
            :class="activeLink === index && 'nav-link__active-link'"
            @click="handleClick(index)"
          >
            <i
              v-if="activeLink === index"
              class="nav-link__icon"
              :class="`fa-solid fa-${navLink.icon}`"
            ></i>
            <i
              v-else
              :class="`nav-link__icon fa-regular fa-${navLink.icon}`"
            ></i>
            <span
              class="nav-link__title"
              :class="activeLink === index && 'nav-link__active-title'"
              >{{ navLink.title }}</span
            >
          </button>
          <!-- Nav Link -->
        </div>
      </div>
      <!-- Right-Side Navbar -->

      <!--  Footer-Links -->
      <footer class="acc-right-side__footer-links footer-links">
        <div class="footer-links__wrapper">
          <a href="#" class="footer-links__link-item">About</a>
          <a href="#" class="footer-links__link-item">Contact</a>
          <a href="#" class="footer-links__link-item">FAQ</a>
          <a href="#" class="footer-links__link-item">Terms</a>
          <a href="#" class="footer-links__link-item">Privacy</a>
        </div>
      </footer>
      <!--  Footer-Links -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-right-side {
  // .acc-right-side__wrapper
  &__wrapper {
    @apply flex flex-col h-full w-[119px] border-l-[#c7c9d9] border-l border-solid;
  }

  // .acc-right-side__logo-wrapper
  &__logo-wrapper {
    @apply flex items-center justify-center;
  }

  // .acc-right-side__logo
  &__logo {
  }

  // .acc-right-side__nav-links
  &__nav-links {
  }

  // .acc-right-side__footer-links
  &__footer-links {
  }
}
.nav-links {
  @apply flex-auto;

  // .nav-links__wrapper
  &__wrapper {
    @apply flex items-start flex-col gap-4 mt-36;
  }
}
.nav-link {
  // .nav-link__wrapper
  &__wrapper {
    @apply flex items-center gap-[10px] pl-[14px];
  }

  &__icon {
    @apply w-5 h-5;
  }

  &__title {
    @apply font-sans text-base leading-[18px] font-medium text-dark;
  }

  &__active-link {
    @apply text-primary font-sans text-base font-medium leading-[18px] pl-[11px] border-l-[3px] border-l-primary border-solid;
  }

  &__active-title {
    @apply text-primary;
  }
}

.footer-links {
  // .footer-links__wrapper
  &__wrapper {
    @apply flex flex-col gap-1 pl-4;
  }

  // .footer-links__link-item
  &__link-item {
    @apply font-sans text-xs leading-[18px] font-normal text-dark;
  }
}
</style>
