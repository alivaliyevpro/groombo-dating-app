<script setup lang="ts">
import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'
import RegisterFormButtons from './components/RegisterFormButtons.vue'
import RegisterFormSteps from './components/RegisterFormSteps.vue'

// import RegisterQuestionOne from './components/RegisterQuestionOne.vue'
// import RegisterQuestionTwo from './components/RegisterQuestionTwo.vue'
// import RegisterQuestionThree from './components/RegisterQuestionThree.vue'
import RegisterQuestionFour from './components/RegisterQuestionFour.vue'

import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

interface IRegForm {
  userName: string | undefined
  userPreferredGender: string | undefined
  userGender: string | undefined
  userBirthday: string | Date | undefined
}

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const currentDay = new Date().getDay()

const validationSchema = toTypedSchema(
  z.object({
    userName: z.string().optional(),
    userPreferredGender: z.string().optional(),
    userGender: z.string().optional(),

    // 02.28.2009

    userBirthday: z.coerce
      .date()
      // MM.DD.YYYYY
      // consider the length of input when validate for next step

      // .min(new Date('02-28-2006'), {})

      // .min(new Date(`${currentMonth}-${currentDay}-${currentYear}`), {
      //   message: 'Sorry, you are too old for using the app',
      // })
      .max(new Date(`${currentMonth}-${currentDay}-${currentYear - 18}`), {
        message: 'Sorry, you are too young for using the app',
      }),
  })
)

const { handleSubmit, defineField, errors, values } = useForm<IRegForm>({
  validationSchema: validationSchema,
})

//  const [userPreferredGenderRadio, userPreferredGenderRadioAttrs] = defineField('userPreferredGender')
// const [userGenderRadio, userGenderRadioAttrs] = defineField('userGender')
// const [userNameRadio, userNameRadioAttrs] = defineField('userName')
const [userBirthdayRadio, userBirthdayRadioAttrs] = defineField('userBirthday')

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

const onRegFormChange = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
  console.log(values.userBirthday)
})

const activeStepIndex = ref(4)
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
          <!-- <RegisterQuestionOne
            v-if="activeStepIndex === 1"
            v-model="userPreferredGenderRadio"
            v-bind="userPreferredGenderRadioAttrs"
          /> -->
          <!-- QUESTION ONE -->

          <!-- QUESTION TWO -->
          <!-- <RegisterQuestionTwo
            v-if="activeStepIndex === 2"
            v-model="userGenderRadio"
            v-bind="userGenderRadioAttrs"
          /> -->
          <!-- QUESTION TWO -->

          <!-- QUESTION THREE -->
          <!-- <RegisterQuestionThree
            v-if="activeStepIndex === 3"
            v-model="userNameRadio"
            v-bind="userNameRadioAttrs"
          /> -->
          <!-- QUESTION THREE -->

          <!-- QUESTION FOUR -->
          <RegisterQuestionFour
            v-if="activeStepIndex === 4"
            v-model="userBirthdayRadio"
            v-bind="userBirthdayRadioAttrs"
            :errors="errors"
            :values="values"
          />
          <!-- QUESTION FOUR -->

          <!-- FORM-NAV BUTTONS -->
          <RegisterFormButtons
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
