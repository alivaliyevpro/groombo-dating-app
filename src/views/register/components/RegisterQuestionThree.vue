<script setup lang="ts">
interface Props {
  userNameErrorMsg: boolean
  errors: any
  values: any
}

const { errors, userNameErrorMsg } = defineProps<Props>()
const userName = defineModel()
</script>

<template>
  <div class="reg-form__quest reg-form-quest-three">
    <h3 class="reg-form-quest-three__title">What is your name?</h3>

    <div class="reg-form-quest-three__input-wrapper">
      <label for="userName" class="reg-form-quest-three__name-label">
        <input
          v-model="userName"
          id="userName"
          class="reg-form-quest-three__name-input"
          type="text"
          placeholder="Enter your name"
        />
        <button
          v-if="false"
          type="button"
          class="reg-form-quest-three__clear-input-button"
        ></button>
      </label>
      <span
        v-if="userNameErrorMsg && errors?.userName"
        class="reg-form-quest-three__error-msg"
      >
        {{ userNameErrorMsg && errors?.userName }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form {
  // .reg-form__quest

  &__quest {
  }
}
.reg-form-quest-three {
  // .reg-form-quest-three__title

  &__title {
    // border: 1px solid red;

    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    // letter-spacing: -0.01em;

    letter-spacing: -0.1px;

    text-align: center;
    margin-top: 30px;
  }

  // .reg-form-quest-three__input-wrapper

  &__input-wrapper {
    // border: 1px solid red;

    margin-block: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 68px;
    // border: 1px solid red;
  }

  // .reg-form-quest-three__name-label

  &__name-label {
    // border: 1px solid red;
    position: relative;
  }

  // .reg-form-quest-three__name-input

  &__name-input {
    // border: 1px solid red;

    width: 280px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(241, 247, 255, 0.8);

    @apply font-sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.1px;

    text-align: left;
    // padding: 12px, 16px, 12px, 16px;
    padding-left: 16px;
    padding-right: 40px;
    outline: none;
  }

  &__name-input .error {
    background-color: rgb(255, 229, 229);
  }

  &__clear-input-button {
    position: absolute;
    right: 16px;
    top: 12px;
    // border: 1px solid red;

    background-repeat: no-repeat;
    background-image: url(../../../assets/icons/x-icon.svg);
    background-position: center;
    width: 20px;
    height: 16px;
  }

  // .reg-form-quest-three__error-msg

  &__error-msg {
    // border: 1px solid red;

    // display: none;

    margin-top: 5px;
    width: 280px;
    height: 24px;
    padding-inline: 16px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;

    @apply font-sans;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    color: #ff3b3b;
    background-color: #ffe5e5;
  }
}
</style>
