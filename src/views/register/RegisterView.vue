<script setup lang="ts">
// TODOS

// Ask help for userBirthday validation
// Disable next button is input is not valid
// Add checkbox of Privacy Policy and Terms and Conditions acceptence
// Make mobile view pixel perfect
// Make the view desktop responsive
// Convert CSS to Tailwind
// Make one template component and use it for every question

import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'
import RegisterFormButtons from './components/RegisterFormButtons.vue'
import RegisterFormSteps from './components/RegisterFormSteps.vue'

import RegisterQuestionOne from './components/RegisterQuestionOne.vue'
import RegisterQuestionTwo from './components/RegisterQuestionTwo.vue'
import RegisterQuestionThree from './components/RegisterQuestionThree.vue'
import RegisterQuestionFour from './components/RegisterQuestionFour.vue'
import RegisterQuestionFive from './components/RegisterQuestionFive.vue'
import RegisterQuestionSix from './components/RegisterQuestionSix.vue'

import { z } from 'zod'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

interface IRegForm {
  userPreferredGender: string | undefined
  userGender: string | undefined
  userName: string | undefined
  userBirthday: string | undefined
  userEmail: string | undefined
  userPassword: string | undefined
}

const userNameErrorMsg = ref(false)
const userBirthdayErrorMsg = ref(false)
const userEmailErrorMsg = ref(false)
const userPasswordErrorMsg = ref(false)

// const currentYear = new Date().getFullYear()
// const currentMonth = new Date().getMonth()
// const currentDay = new Date().getDate()

const validationSchema = toTypedSchema(
  z.object({
    // Gender Preference Validation
    userPreferredGender: z.union([z.literal('men'), z.literal('women')]),

    // User's Gender Validation
    userGender: z.union([z.literal('men'), z.literal('women')]),

    // Name Validation
    userName: z
      .string()
      .trim()
      .min(2, {
        message: 'Name must be at least 2 characters',
      })
      .max(20, {
        message: 'Name cannot be more than 20 characters',
      })
      .regex(/^[a-zA-Z ]+$/, {
        message: 'Please use letters only',
      }),

    // Birth Date Validation
    // userBirthday: z
    //   .string()
    //   .and(
    //     z.coerce
    //       .date()
    //       .min(
    //         new Date(`${currentMonth}-${currentDay}-${currentYear - 100}`),
    //         {
    //           message: "Sorry, you are too old for using the app",
    //         }
    //       )
    //       .max(new Date(`${currentMonth}-${currentDay}-${currentYear}`), {
    //         message: 'You cannot input a future date',
    //       })
    //       .max(
    //         new Date(`${currentMonth}-${currentDay}-${currentYear - 18}`),
    //         {
    //           message: 'Sorry, you are too young for using the app',
    //         }
    //       )
    //   ),

    // userBirthday: z.coerce
    //   .date({
    //     format: 'MM.DD.YYYY',
    //     required_error: 'Date is required',
    //     invalidErrorMessage: 'Please enter a valid date',
    //   })
    //   .min(new Date(`${currentMonth}-${currentDay}-${currentYear - 100}`), {
    //     message: "Sorry, you are too old for using the app",
    //   })
    //   .max(new Date(`${currentMonth}-${currentDay}-${currentYear}`), {
    //     message: 'You cannot input a future date',
    //   })
    //   .max(new Date(`${currentMonth}-${currentDay}-${currentYear - 18}`), {
    //     message: 'Sorry, you are too young for using the app',
    //   })

    userBirthday: z.coerce.string().optional(), // Needs to be solved!!!

    // Email Validation
    userEmail: z.string().trim().email(),

    // Password Validation
    userPassword: z
      .string()
      .trim()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/, {
        message:
          'Password must be at least 8 characters, and must include at least one uppercase latter and a number',
      }),
  })
  // .required()
)

const { handleSubmit, defineField, errors, values } = useForm<IRegForm>({
  validationSchema: validationSchema,
})

const [userPreferredGender, userPreferredGenderAttrs] = defineField(
  'userPreferredGender'
)
const [userGender, userGenderAttrs] = defineField('userGender')
const [userName, userNameAttrs] = defineField('userName')
const [userBirthday, userBirthdayAttrs] = defineField('userBirthday')
const [userEmail, userEmailAttrs] = defineField('userEmail')
const [userPassword, userPasswordAttrs] = defineField('userPassword')

// Form submit handler
const handleRegFormSubmit = handleSubmit((values) => {
  console.log('USER REGISTRATION DATA', JSON.stringify(values, null, 2))
})

// Current form step identifier
const activeStepIndex = ref(1)
const regFormSteps = [1, 2, 3, 4, 5, 6]

function nextQuestion() {
  // Checks every form step and passes if data filled with no error
  if (activeStepIndex.value === 1 && Boolean(userPreferredGender.value)) {
    activeStepIndex.value = 2
  } else if (activeStepIndex.value === 2 && Boolean(userGender.value)) {
    // activeStepIndex.value = 3
    activeStepIndex.value++
  } else if (
    activeStepIndex.value === 3 &&
    Boolean(values.userName) &&
    errors.value.userName === undefined
  ) {
    activeStepIndex.value = 4
  } else if (
    activeStepIndex.value === 4 &&
    errors.value.userBirthday === undefined
  ) {
    activeStepIndex.value = 5
  } else if (
    activeStepIndex.value === 5 &&
    errors.value.userEmail === undefined &&
    Boolean(values.userEmail)
  ) {
    activeStepIndex.value = 6
  } else if (
    activeStepIndex.value === 6 &&
    errors.value.userPassword === undefined &&
    Boolean(values.userPassword)
  ) {
    // Handles form submit if there is no error in any input
    handleRegFormSubmit()
  } else {
    // lets Next buttons to trigger the error popups accordingly
    if (activeStepIndex.value === 3) {
      userNameErrorMsg.value = true
    }

    if (activeStepIndex.value === 4) {
      userBirthdayErrorMsg.value = true
    }

    if (activeStepIndex.value === 5) {
      userEmailErrorMsg.value = true
    }

    if (activeStepIndex.value === 6) {
      userPasswordErrorMsg.value = true
    }
  }
}

function prevQuestion() {
  if (
    activeStepIndex.value <= regFormSteps.length &&
    activeStepIndex.value > regFormSteps[0]
  ) {
    activeStepIndex.value--
  }
}
</script>

<template>
  <main class="page">
    <RegisterBanner />
    <form @submit.prevent="nextQuestion" class="reg-form">
      <div class="reg-form__container">
        <div class="reg-form__wrapper">
          <!-- QUESTION ONE -->
          <RegisterQuestionOne
            v-if="activeStepIndex === 1"
            v-model="userPreferredGender"
            v-bind="userPreferredGenderAttrs"
          />
          <!-- QUESTION ONE -->

          <!-- QUESTION TWO -->
          <RegisterQuestionTwo
            v-if="activeStepIndex === 2"
            v-model="userGender"
            v-bind="userGenderAttrs"
          />
          <!-- QUESTION TWO -->

          <!-- QUESTION THREE -->
          <RegisterQuestionThree
            v-if="activeStepIndex === 3"
            v-model="userName"
            v-bind="userNameAttrs"
            :userNameErrorMsg="userNameErrorMsg"
            :errors="errors"
            :values="values"
          />
          <!-- QUESTION THREE -->

          <!-- QUESTION FOUR -->
          <RegisterQuestionFour
            v-if="activeStepIndex === 4"
            v-model="userBirthday"
            v-bind="userBirthdayAttrs"
            :userBirthdayErrorMsg="userBirthdayErrorMsg"
            :errors="errors"
            :values="values"
          />
          <!-- QUESTION FOUR -->

          <!-- QUESTION FIVE -->
          <RegisterQuestionFive
            v-if="activeStepIndex === 5"
            v-model="userEmail"
            v-bind="userEmailAttrs"
            :userEmailErrorMsg="userEmailErrorMsg"
            :errors="errors"
            :values="values"
          />
          <!-- QUESTION FIVE -->

          <!-- QUESTION SIX -->
          <RegisterQuestionSix
            v-if="activeStepIndex === 6"
            v-model="userPassword"
            v-bind="userPasswordAttrs"
            :userPasswordErrorMsg="userPasswordErrorMsg"
            :errors="errors"
            :values="values"
          />
          <!-- QUESTION SIX -->

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
      letter-spacing: -0.1px;
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
      letter-spacing: -0.1px;

      text-align: center;
      color: #3e7bfa;
    }
  }
}
</style>
