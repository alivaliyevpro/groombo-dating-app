<script setup lang="ts">
interface Props {
  textInputQuest: {
    formStepNum: number | undefined
    title: string
    inputLabel: string
    placeholder: string
    errorBoolean: boolean
  }

  activeStepIndex: number
  inputError: string | undefined
  clearCurrentRegFormInput: () => void
}

const {
  inputError,
  activeStepIndex,
  textInputQuest,
  clearCurrentRegFormInput,
} = defineProps<Partial<Props>>()

const inputModel = defineModel()
</script>

<template>
  <div
    v-if="activeStepIndex === textInputQuest?.formStepNum"
    class="reg-form__quest reg-form-quest-text"
  >
    <h3 class="reg-form-quest-text__title">
      {{ textInputQuest?.title }}
    </h3>
    <div class="reg-form-quest-text__input-wrapper">
      <label
        :for="textInputQuest?.inputLabel"
        class="reg-form-quest-text__text-label"
      >
        <input
          v-model="inputModel"
          :id="textInputQuest?.inputLabel"
          class="reg-form-quest-text__text-input"
          :class="{
            error: textInputQuest?.errorBoolean && inputError,
          }"
          type="text"
          :placeholder="textInputQuest?.placeholder"
        />
        <button
          v-if="textInputQuest?.errorBoolean && inputError"
          @click="clearCurrentRegFormInput"
          type="button"
          class="reg-form-quest-text__clear-input-button"
        ></button>
      </label>

      <span
        v-if="textInputQuest?.errorBoolean && inputError"
        class="reg-form-quest-text__error-msg"
      >
        {{ inputError }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form {
  // .reg-form__quest
  &__quest {
  }
}
.reg-form-quest-text {
  // .reg-form-quest-text__title
  &__title {
    @apply font-sans text-sm font-semibold leading-6 -tracking-normal text-center mt-[30px];
  }

  // .reg-form-quest-text__input-wrapper
  &__input-wrapper {
    @apply flex flex-col items-center justify-center h-[68px] my-[10px];
  }

  // .reg-form-quest-text__text-label
  &__text-label {
    // position: relative;

    @apply relative;
  }

  // .reg-form-quest-text__text-input
  &__text-input {
    @apply font-sans w-[280px] h-10 rounded-[10px] bg-[rgba(241,_247,_255,_0.8)] text-xs font-normal leading-4 -tracking-wide text-left pl-4 pr-10 outline-none;
  }

  .error {
    // background-color: rgb(255, 229, 229);
    @apply bg-[rgb(255,_229,_229)];
  }

  &__clear-input-button {
    @apply absolute right-4 top-3 bg-no-repeat bg-[url(../../../assets/icons/x-icon.svg)] bg-center w-5 h-4;
  }

  // .reg-form-quest-text__error-msg
  &__error-msg {
    @apply mt-1 w-[280px] h-6 rounded-md flex items-center justify-center text-[10px] font-normal leading-3 text-[#ff3b3b] bg-[#ffe5e5];
  }
}
</style>
