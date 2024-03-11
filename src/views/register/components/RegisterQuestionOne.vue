<script setup lang="ts">
const preferredGender = defineModel()
</script>

<template>
  <div class="reg-form__quest reg-form-quest-one">
    <h3 class="reg-form-quest-one__title">Who are you looking for?</h3>

    <div class="reg-form-quest-one__opts-wrapper">
      <!-- <div class="reg-form-quest-one__opt-wrapper">
        <label for="preferredGender" class="reg-form-quest-one__men-label">
          <input
            v-model="preferredGender"
            id="men-radio-input"
            class="reg-form-quest-one__men-radio-input"
            type="radio"
            value="men"
          />

          Men
        </label>
      </div> -->

      <slot name="input"></slot>
      <!-- 
      <div class="reg-form-quest-one__opt-wrapper">
        <label for="preferredGender" class="reg-form-quest-one__women-label"
          ><input
            v-model="preferredGender"
            id="men-radio-input"
            class="reg-form-quest-one__women-radio-input"
            type="radio"
            value="women"
          />
          Women
        </label>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.reg-form-quest-one {
  // .reg-form-quest-one__title

  &__title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.1px;
    text-align: center;
    color: #28293d;
    margin-top: 8px;
  }

  // .reg-form-quest-one__opts-wrapper

  &__opts-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    margin-top: 8px;

    margin-bottom: 24px;
  }

  // .reg-form-quest-one__opt-wrapper

  &__opt-wrapper {
  }

  // .reg-form-quest-one__men-label

  &__men-label {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.1px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  // .reg-form-quest-one__men-radio-input

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

  // .reg-form-quest-one__women-label

  &__women-label {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.1px;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  // .reg-form-quest-one__women-radio-input

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
