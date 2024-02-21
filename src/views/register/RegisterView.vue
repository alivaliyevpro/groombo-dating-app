<script setup lang="ts">
import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'

import RegisterFormButtons from './components/RegisterFormButtons.vue'
import RegisterFormSteps from './components/RegisterFormSteps.vue'

import { useForm } from 'vee-validate'
// import { toTypedSchema } from '@vee-validate/zod';
// import * as zod from 'zod';

// interface RegForm {
// email?: string | null;
// password?: string | null;
// }

//values, errors, <RegForm>
const { defineField, handleSubmit } = useForm({
  // validationSchema: yup.object({
  //   radio: yup.string().required(),
  // }),
})

const [menRadio, menRadioAttrs] = defineField('radio')
const [womenRadio, womenRadioAttrs] = defineField('radio')

// console.log("values", values);
// console.log("maleRadioAttrs", maleRadioAttrs);
// console.log("ERRORS", errors);
// console.log("initialValues", meta.value.initialValues);

const onRegFormChange = handleSubmit(async (values: any): Promise<void> => {
  // console.log(JSON.stringify(values, null, 2));
  // console.log(womenRadio.value);
  console.log('User data', values)
})

import { ref } from 'vue'

const activeStepIndex = ref(1)
const steps = [1, 2, 3, 4, 5, 6]

function prevQuestion() {
  if (
    activeStepIndex.value <= steps.length &&
    activeStepIndex.value > steps[0]
  ) {
    activeStepIndex.value--
  }
}
function nextQuestion() {
  if (
    activeStepIndex.value < steps.length &&
    activeStepIndex.value >= steps[0]
  ) {
    activeStepIndex.value++
  }
}
</script>

<template>
  <main class="page">
    <RegisterBanner />
    <form @change.prevent="onRegFormChange" class="reg-form">
      <div class="reg-form__container">
        <div class="reg-form__wrapper">
          <!-- QUESTION FIRST -->
          <div class="reg-form__quest reg-form-quest-first">
            <h3 class="reg-form-quest-first__title">
              Who are you looking for?
            </h3>

            <div class="reg-form-quest-first__opts-wrapper">
              <div class="reg-form-quest-first__opt-wrapper">
                <label for="menRadio" class="reg-form-quest-first__men-label"
                  ><input
                    class="reg-form-quest-first__men-radio-input"
                    v-model="menRadio"
                    v-bind="menRadioAttrs"
                    type="radio"
                    value="men"
                  />
                  Men
                </label>
              </div>

              <div class="reg-form-quest-first__opt-wrapper">
                <label
                  for="womenRadio"
                  class="reg-form-quest-first__women-label"
                  ><input
                    class="reg-form-quest-first__women-radio-input"
                    v-model="womenRadio"
                    v-bind="womenRadioAttrs"
                    type="radio"
                    value="women"
                  />
                  Women
                </label>
              </div>
            </div>
          </div>
          <!-- QUESTION FIRST -->

          <!-- FORM-NAV BUTTONS -->
          <RegisterFormButtons
            :menRadio="menRadio"
            :womenRadio="womenRadio"
            :prevQuestion="prevQuestion"
            :nextQuestion="nextQuestion"
          />
          <!-- FORM-NAV BUTTONS -->

          <!-- FORM STEP IDENTIFIER -->
          <RegisterFormSteps
            :steps="steps"
            :activeStepIndex="activeStepIndex"
          />
          <!-- FORM STEP IDENTIFIER -->
        </div>
      </div>
    </form>

    <!-- NAV TO SIGNIN -->
    <div class="reg-form__nav-to-sign-in nav-to-sign-in">
      <div class="nav-to-sign-in__wrapper">
        <h3 class="nav-to-sign-in__title">Have an account?</h3>
        <button class="nav-to-sign-in__button">Sign In</button>
      </div>
    </div>
    <!-- NAV TO SIGNIN -->
  </main>

  <!-- FORM-FOOTER -->
  <RegisterFooter />
  <!-- FORM-FOOTER -->
</template>

<style scoped lang="scss">
.page {
  flex: 1 1 auto;

  .reg-form {
    // .reg-form__container

    &__container {
    }

    // .reg-form__wrapper

    &__wrapper {
    }
  }
  .reg-form-quest {
  }
  .reg-form-quest-first {
    // .reg-form-quest-first__title

    &__title {
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;

      margin-top: 5px;
    }

    // .reg-form-quest-first__opts-wrapper

    &__opts-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      margin-top: 8px;
    }

    // .reg-form-quest-first__opt-wrapper

    &__opt-wrapper {
    }

    // .reg-form-quest-first__men-label

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

    // .reg-form-quest-first__men-radio-input

    &__men-radio-input {
      -webkit-appearance: none;
      appearance: none;
      background-color: #f1f7ff;
      width: 55px;
      height: 55px;
      border-radius: 12px;
      background-image: url(../../assets/icons/male-icon.svg);
      background-size: 20.13px;
      background-repeat: no-repeat;
      background-position: center;

      @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/male-white-icon.svg')];
    }

    // .reg-form-quest-first__women-label

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

    // .reg-form-quest-first__women-radio-input

    &__women-radio-input {
      -webkit-appearance: none;
      appearance: none;
      width: 55px;
      height: 55px;
      border-radius: 12px;
      background-image: url(../../assets/icons/female-icon.svg);

      background-size: 14.38px;
      background-repeat: no-repeat;
      background-position: center;
      background-color: #f1f7ff;

      @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/female-white-icon.svg')];
    }
  }

  .reg-form {
    // .reg-form__nav-to-sign-in

    &__nav-to-sign-in {
      margin-top: 39.5px;
    }
  }
  .nav-to-sign-in {
    // .nav-to-sign-in__wrapper

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }

    // .nav-to-sign-in__title

    &__title {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;

      color: #28293d;
    }

    // .nav-to-sign-in__button

    &__button {
      width: 86px;
      height: 32px;
      border-radius: 10px;
      background-color: #f1f7ff;

      font-family: Inter;
      font-size: 13px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.20000000298023224px;
      text-align: center;

      color: #3e7bfa;
    }
  }
}
</style>
