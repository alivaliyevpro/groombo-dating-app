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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
}
</style>
