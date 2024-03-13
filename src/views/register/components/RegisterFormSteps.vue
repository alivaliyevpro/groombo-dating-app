<script setup lang="ts">
interface Props {
  regFormSteps: number[]
  activeStepIndex: number
}
const { regFormSteps, activeStepIndex } = defineProps<Props>()
</script>

<template>
  <div class="reg-form-steps">
    <div class="reg-form-steps__wrapper">
      <div
        v-for="regFormStep in regFormSteps"
        class="reg-form-steps__step"
        :class="{
          'reg-form-steps--active-step': activeStepIndex === regFormStep,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form-steps {
  // .reg-form-steps__wrapper

  &__wrapper {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // gap: 12px;
    // margin-top: 41.5px;

    @apply flex items-center justify-center gap-3 mt-10;
  }

  // .reg-form-steps__step

  &__step {
    // width: 8px;
    // height: 8px;
    // border-radius: 2px;
    // background-color: #cde3fd;

    @apply w-[8px] h-[8px] rounded-sm bg-[#cde3fd];
  }
}
.reg-form-steps--active-step {
  // width: 11px;
  // height: 11px;
  // border-radius: 3px;
  // background-color: #3e7bfa;

  @apply w-[11px] h-[11px] rounded-sm bg-[#3e7bfa];
}
</style>
