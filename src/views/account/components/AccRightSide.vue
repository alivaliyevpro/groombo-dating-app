<script setup lang="ts">
import { ref } from 'vue'
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

// interface Props {
//   activeLink: number
// }

// const activeLink = defineModel<Props>()
const activeLink = defineModel()
// const { activeLink } = defineProps<Props>()

// const breakpoints = useBreakpoints(breakpointsTailwind)

// const desktop = breakpoints.greaterOrEqual('xl')
// const mobile = breakpoints.smaller('xl')

const navLinks = ref([
  {
    title: 'Chat',
    icon: 'comment',
  },
  {
    title: 'Mail',
    icon: 'envelope',
  },
  {
    title: 'Favorites',
    icon: 'heart',
  },
  {
    title: 'Search',
    icon: 'eye',
  },
  {
    title: 'Profile',
    icon: 'user',
  },
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
    border: 1px solid blue;
    @apply flex flex-col h-full w-[119px];
    border-left: 1px solid #c7c9d9;
  }

  // .acc-right-side__logo-wrapper

  &__logo-wrapper {
    // border: 1px solid rebeccapurple;
    display: flex;
    align-items: center;
    justify-content: center;
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
    // border: 1px solid rebeccapurple;
    margin-top: 140px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
}
.nav-link {
  // .nav-link__wrapper

  &__wrapper {
    padding-left: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
  &__title {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.005em;
    color: #28293d;
  }

  &__active-link {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.005em;
    color: #3e7bfa;
    border-left: 3px solid #3e7bfa;
    padding-left: 11px;
  }
  &__active-title {
    color: #3e7bfa;
  }
}

.footer-links {
  // margin-top: 162px;

  // .footer-links__wrapper

  &__wrapper {
    // border: 1px solid rebeccapurple;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 16px;
  }

  // .footer-links__link-item

  &__link-item {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #28293d;
  }
}
</style>
