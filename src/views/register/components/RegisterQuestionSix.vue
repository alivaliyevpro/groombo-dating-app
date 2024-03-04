<script setup lang="ts">
interface Props {
  userPasswordErrorBoolean: boolean
  clearCurrentRegFormInput: () => void
  errors: Record<string, string>
}
const { errors, userPasswordErrorBoolean, clearCurrentRegFormInput } =
  defineProps<Props>()

const userPassword = defineModel()
</script>

<template>
  <div class="reg-form__quest reg-form-quest-six">
    <h3 class="reg-form-quest-six__title">Create a password</h3>

    <div class="reg-form-quest-six__input-wrapper">
      <label for="userPassword" class="reg-form-quest-six__password-label">
        <input
          v-model="userPassword"
          id="userPassword"
          class="reg-form-quest-six__password-input"
          :class="{ error: userPasswordErrorBoolean && errors?.userPassword }"
          type="text"
          placeholder="Enter your password"
        />
        <button
          v-if="userPasswordErrorBoolean && errors?.userPassword"
          @click="clearCurrentRegFormInput"
          class="reg-form-quest-six__clear-input-button"
        ></button>
      </label>
      <span
        v-if="userPasswordErrorBoolean && errors?.userPassword"
        class="reg-form-quest-six__error-msg"
      >
        {{ errors?.userPassword }}
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
.reg-form-quest-six {
  // .reg-form-quest-six__title

  &__title {
    // border: 1px solid red;

    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    margin-top: 30px;
  }

  // .reg-form-quest-six__input-wrapper

  &__input-wrapper {
    // border: 1px solid red;

    margin-block: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // height: 68px;
    min-height: 68px;
    // border: 1px solid red;
  }

  // .reg-form-quest-six__password-label

  &__password-label {
    // border: 1px solid red;
    position: relative;
  }

  // .reg-form-quest-six__password-input

  &__password-input {
    // border: 1px solid red;

    width: 280px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(241, 247, 255, 0.8);

    @apply font-sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-align: left;
    // padding: 12px, 16px, 12px, 16px;
    padding-left: 16px;
    padding-right: 40px;
    outline: none;
  }

  .error {
    background-color: rgb(255, 229, 229);
  }

  &__clear-input-button {
    position: absolute;
    right: 16px;
    top: 12px;
    background-repeat: no-repeat;
    background-image: url(../../../assets/icons/x-icon.svg);
    background-position: center;
    width: 20px;
    height: 16px;
  }

  // .reg-form-quest-six__error-msg

  &__error-msg {
    // border: 1px solid red;

    margin-top: 5px;
    width: 280px;
    // Updated 3 lines below
    min-height: 24px;
    padding-inline: 16px;
    padding-block: 3px;

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
