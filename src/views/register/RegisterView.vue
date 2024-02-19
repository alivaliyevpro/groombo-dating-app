<script setup lang="ts">
import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'

// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

// interface Props {
//   desktopView: boolean
// }
// const { desktopView } = defineProps<Props>()

// const breakpoints = useBreakpoints(breakpointsTailwind)

// const desktop = breakpoints.greaterOrEqual('xl')
// const mobile = breakpoints.smaller('xl')
</script>

<template>
  <RegisterBanner />

  <form class="reg-form">
    <div class="reg-form__container">
      <div class="reg-form__wrapper">
        <!-- QUESTION FIRST -->
        <div class="reg-form-quest reg-form-quest--first">
          <h3 class="reg-form-quest__title">Who are you looking for?</h3>

          <div class="reg-form-quest-first__opts">
            <div class="reg-form-quest-first__opt-wrapper">
              <input
                class="reg-form-quest-first__male-radio"
                type="radio"
                name="gender"
                value="men"
              />
              <label for="men" class="reg-form-quest-first__male-label"
                >Men</label
              >
            </div>

            <div class="reg-form-quest-first__opt-wrapper">
              <input
                class="reg-form-quest-first__women-radio"
                type="radio"
                name="gender"
                value="women"
              />
              <label class="reg-form-quest-first__women-label" for="women"
                >Women</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <RegisterFooter />
</template>

<style scoped lang="scss"></style>
