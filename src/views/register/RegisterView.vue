<script setup lang="ts">
import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'
import RegisterFormButtons from './components/RegisterFormButtons.vue'
import RegisterFormSteps from './components/RegisterFormSteps.vue'

import RegisterQuestionOne from './components/RegisterQuestionOne.vue'
import RegisterQuestionTwo from './components/RegisterQuestionTwo.vue'

import { ref } from 'vue'
import { useForm } from 'vee-validate'

// import { toTypedSchema } from '@vee-validate/zod';
// import * as zod from 'zod';

// interface RegForm {
// email?: string | null;
// password?: string | null;
// }

// const schema = yup.object({
// email: yup.string().required().email(),
// });

//values, errors, <RegForm> defineField
const { handleSubmit, defineField } = useForm({
  // validationSchema: schema,
})

const [preferredGenderRadio, preferredGenderRadioAttrs] =
  defineField('preferred_gender')
const [userGenderRadio, userGenderRadioAttrs] = defineField('user_gender')

// console.log('BEFORE SUBMIT', preferredGenderRadioAttrs)

// console.log(
//   'dirty',
//   meta.value.dirty,
//   'pending',
//   meta.value.pending,
//   'touched',
//   meta.value.touched,
//   'valid',
//   meta.value.valid,
//   'initialValues',
//   meta.value.initialValues
// )

// const menRadio = defineModel()

// console.log("maleRadioAttrs", maleRadioAttrs);
// console.log("ERRORS", errors);
// console.log("initialValues", meta.value.initialValues);

const onRegFormChange = handleSubmit(async (values: string): Promise<void> => {
  console.log(JSON.stringify(values, null, 2))
  // console.log('handleSubmit data', values)

  // console.log('After submit', preferredGenderRadioAttrs)

  // console.log(
  //   'dirty',
  //   meta.value.dirty,
  //   'pending',
  //   meta.value.pending,
  //   'touched',
  //   meta.value.touched,
  //   'valid',
  //   meta.value.valid,
  //   'initialValues',
  //   meta.value.initialValues
  // )
})

const activeStepIndex = ref(1)
const regFormSteps = [1, 2, 3, 4, 5, 6]

function prevQuestion() {
  if (
    activeStepIndex.value <= regFormSteps.length &&
    activeStepIndex.value > regFormSteps[0]
  ) {
    activeStepIndex.value--
  }
}

function nextQuestion() {
  if (
    activeStepIndex.value < regFormSteps.length &&
    activeStepIndex.value >= regFormSteps[0]
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
          <!-- QUESTION ONE -->
          <RegisterQuestionOne
            v-if="activeStepIndex === 1"
            v-model="preferredGenderRadio"
            v-bind="preferredGenderRadioAttrs"
          />
          <!-- QUESTION ONE -->

          <!-- QUESTION TWO -->
          <RegisterQuestionTwo
            v-if="activeStepIndex === 2"
            v-model="userGenderRadio"
            v-bind="userGenderRadioAttrs"
          />
          <!-- QUESTION TWO -->

          <!-- FORM-NAV BUTTONS -->
          <RegisterFormButtons
            :preferredGenderRadio="preferredGenderRadio"
            :activeStepIndex="activeStepIndex"
            :nextQuestion="nextQuestion"
            :prevQuestion="prevQuestion"
          />
          <!-- FORM-NAV BUTTONS -->

          <!-- FORM STEP IDENTIFIER -->
          <RegisterFormSteps
            :regFormSteps="regFormSteps"
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
  // .reg-form-quest-first {
  //   // .reg-form-quest-first__title

  //   &__title {
  //     font-family: Inter;
  //     font-size: 14px;
  //     font-weight: 600;
  //     line-height: 24px;
  //     letter-spacing: 0em;
  //     text-align: center;

  //     margin-top: 5px;
  //   }

  //   // .reg-form-quest-first__opts-wrapper

  //   &__opts-wrapper {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     gap: 16px;

  //     margin-top: 8px;
  //   }

  //   // .reg-form-quest-first__opt-wrapper

  //   &__opt-wrapper {
  //   }

  //   // .reg-form-quest-first__men-label

  //   &__men-label {
  //     font-family: Roboto;
  //     font-size: 12px;
  //     font-weight: 400;
  //     line-height: 17px;
  //     text-align: center;

  //     display: flex;
  //     flex-direction: column;
  //     gap: 6px;
  //   }

  //   // .reg-form-quest-first__men-radio-input

  //   &__men-radio-input {
  //     -webkit-appearance: none;
  //     appearance: none;
  //     background-color: #f1f7ff;
  //     width: 55px;
  //     height: 55px;
  //     border-radius: 12px;
  //     background-image: url(../../assets/icons/male-icon.svg);
  //     background-size: 20.13px;
  //     background-repeat: no-repeat;
  //     background-position: center;

  //     @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/male-white-icon.svg')];
  //   }

  //   // .reg-form-quest-first__women-label

  //   &__women-label {
  //     font-family: Roboto;
  //     font-size: 12px;
  //     font-weight: 400;
  //     line-height: 17px;
  //     letter-spacing: 0em;
  //     text-align: center;

  //     display: flex;
  //     flex-direction: column;
  //     gap: 6px;
  //   }

  //   // .reg-form-quest-first__women-radio-input

  //   &__women-radio-input {
  //     -webkit-appearance: none;
  //     appearance: none;
  //     width: 55px;
  //     height: 55px;
  //     border-radius: 12px;
  //     background-image: url(../../assets/icons/female-icon.svg);

  //     background-size: 14.38px;
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     background-color: #f1f7ff;

  //     @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/female-white-icon.svg')];
  //   }
  // }

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
