<script setup lang="ts">
const userGender = defineModel();
// console.log(userGender.value)
</script>

<template>
  <div class="reg-form__quest reg-form-quest-two">
    <h3 class="reg-form-quest-two__title">Who are you?</h3>

    <div class="reg-form-quest-two__opts-wrapper">
      <div class="reg-form-quest-two__opt-wrapper">
        <label for="menRadio" class="reg-form-quest-two__men-label"
          ><input
            v-model="userGender"
            class="reg-form-quest-two__men-radio-input"
            type="radio"
            value="men"
          />
          Men
        </label>
      </div>

      <div class="reg-form-quest-two__opt-wrapper">
        <label for="womenRadio" class="reg-form-quest-two__women-label"
          ><input
            v-model="userGender"
            class="reg-form-quest-two__women-radio-input"
            type="radio"
            value="women"
          />
          Women
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form-quest-two {
  // .reg-form-quest-two__title

  &__title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;

    color: #28293d;
    margin-top: 8px;
  }

  // .reg-form-quest-two__opts-wrapper

  &__opts-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    margin-top: 8px;
    margin-bottom: 24px;
  }

  // .reg-form-quest-two__opt-wrapper

  &__opt-wrapper {
  }

  // .reg-form-quest-two__men-label

  &__men-label {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  // .reg-form-quest-two__men-radio-input

  &__men-radio-input {
    -webkit-appearance: none;
    appearance: none;
    background-color: #f1f7ff;
    width: 55px;
    height: 55px;
    border-radius: 12px;
    background-image: url(../../../assets/icons/male-icon.svg);
    background-size: 20.13px;
    background-repeat: no-repeat;
    background-position: center;

    @apply checked:bg-[#3568D4] checked:bg-[url('../../../assets/icons/male-white-icon.svg')];
  }

  // .reg-form-quest-two__women-label

  &__women-label {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  // .reg-form-quest-two__women-radio-input

  &__women-radio-input {
    -webkit-appearance: none;
    appearance: none;
    width: 55px;
    height: 55px;
    border-radius: 12px;
    background-image: url(../../../assets/icons/female-icon.svg);

    background-size: 14.38px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f1f7ff;

    @apply checked:bg-[#3568D4] checked:bg-[url('../../../assets/icons/female-white-icon.svg')];
  }
}
</style>
