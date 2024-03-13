<script setup lang="ts"></script>

<template>
  <div class="reg-form__quest reg-form-quest-radio">
    <slot name="title"></slot>

    <div class="reg-form-quest-radio__opts-wrapper">
      <div class="reg-form-quest-radio__opt-wrapper">
        <slot name="label"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form-quest-radio {
  // .reg-form-quest-radio__opt-wrapper
  &__opt-wrapper {
    @apply flex items-center justify-center gap-4;
  }
}
</style>
