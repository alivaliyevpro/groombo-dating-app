<script setup lang="ts">
interface Props {
  userBirthdayErrorBoolean: boolean
  clearCurrentRegFormInput: () => void
  errors: Record<string, string>
}

const { errors, userBirthdayErrorBoolean, clearCurrentRegFormInput } =
  defineProps<Props>()

const userBirthday = defineModel()
</script>

<template>
  <div class="reg-form__quest reg-form-quest-four">
    <h3 class="reg-form-quest-four__title">When is your birthday?</h3>

    <div class="reg-form-quest-four__input-wrapper">
      <label for="userBirthday" class="reg-form-quest-four__birtday-label">
        <input
          v-model="userBirthday"
          id="userBirthday"
          class="reg-form-quest-four__birtday-input"
          :class="{ error: userBirthdayErrorBoolean && errors?.userBirthday }"
          type="text"
          maxlength="10"
          placeholder="MM.DD.YYYYY"
        />
        <button
          v-if="userBirthdayErrorBoolean && errors?.userBirthday"
          @click="clearCurrentRegFormInput"
          type="button"
          class="reg-form-quest-four__clear-input-button"
        ></button>
      </label>

      <span
        v-if="userBirthdayErrorBoolean && errors?.userBirthday"
        class="reg-form-quest-four__error-msg"
      >
        {{ errors?.userBirthday }}
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
.reg-form-quest-four {
  // .reg-form-quest-four__title

  &__title {
    // border: 1px solid red;

    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 30px;
  }

  // .reg-form-quest-four__input-wrapper

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

  // .reg-form-quest-four__birtday-label

  &__birtday-label {
    // border: 1px solid red;
    position: relative;
  }

  // .reg-form-quest-four__birtday-input

  &__birtday-input {
    // border: 1px solid red;

    width: 280px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(241, 247, 255, 0.8);

    @apply font-sans;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.20000000298023224px;
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

  // .reg-form-quest-four__error-msg

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

    @apply font-sans; // hidden
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    color: #ff3b3b;
    background-color: #ffe5e5;
  }
}
</style>
