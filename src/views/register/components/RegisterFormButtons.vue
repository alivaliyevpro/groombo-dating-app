<script setup lang="ts">
interface Props {
  activeStepIndex: number
  prevQuestion: () => void
  nextQuestion: () => void
  errors: any
  values: Record<string, any>
}

const { prevQuestion, nextQuestion, errors, values } = defineProps<Props>()
</script>

<template>
  <div class="reg-form-buttons__wrapper">
    <button
      v-if="activeStepIndex > 1"
      type="button"
      @click.prevent="prevQuestion"
      class="reg-form-buttons__item reg-form-button button--back"
    >
      Back
    </button>

    <!-- :disabled="!values.userPreferredGender" -->

    <button
      type="button"
      @click.prevent="nextQuestion"
      :disabled="!values.userPreferredGender || errors.userPassword"
      class="reg-form-buttons__item reg-form-button button--next"
    >
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
.reg-form-buttons {
  // .reg-form-buttons__wrapper

  &__wrapper {
    @apply flex gap-4 items-center justify-center;
  }

  // .reg-form-buttons__item

  &__item {
  }
}
.reg-form-button {
  @apply rounded-xl h-10 w-[136px] md:w-[85px]  text-center leading-[0.2px] font-medium text-[13px] font-sans;
}
.button--back {
  @apply text-primary border border-primary;
}
.button--next {
  @apply bg-primary text-white disabled:bg-[#F2F2F5] disabled:text-[#C7C9D9];
}
</style>
