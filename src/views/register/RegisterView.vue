<script setup lang="ts">
import { z } from 'zod'
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import RegisterBanner from '../register/components/RegisterBanner.vue'
import RegisterFooter from '../register/components/RegisterFooter.vue'
import RegisterFormButtons from './components/RegisterFormButtons.vue'
import RegisterFormSteps from './components/RegisterFormSteps.vue'

import RegisterRadioTypeQuestion from './components/RegisterRadioTypeQuestion.vue'
import RegisterTextTypeQuestion from './components/RegisterTextTypeQuestion.vue'

interface IRegForm {
  userPreferredGender?: string | undefined
  userGender?: string | undefined
  userName?: string | undefined
  userBirthday?: string | undefined
  userEmail?: string | undefined
  userPassword?: string | undefined
}

const userPreferredGenderErrorBoolean = ref(false)
const userGenderErrorBoolean = ref(false)
const userNameErrorBoolean = ref(false)
const userBirthdayErrorBoolean = ref(false)
const userEmailErrorBoolean = ref(false)
const userPasswordErrorBoolean = ref(false)

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const currentDay = new Date().getDate()

// Schema for input validation.
const validationSchema = toTypedSchema(
  z
    .object({
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
      userBirthday: z.coerce
        .date({
          required_error: 'Date is required',
          invalid_type_error: 'Please enter a valid date',
        })
        .min(new Date(`${currentMonth}-${currentDay}-${currentYear - 100}`), {
          message: 'Sorry, you are too old for using the app',
        })
        .max(new Date(`${currentMonth}-${currentDay}-${currentYear}`), {
          message: 'You cannot input current or a future date',
        })
        .max(new Date(`${currentMonth}-${currentDay}-${currentYear - 18}`), {
          message: 'Sorry, you are too young for using the app',
        }),

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
    .required()
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

// Current form step tracker
const activeStepIndex = ref(1)
const regFormSteps = [1, 2, 3, 4, 5, 6]

// log the data to the console
const handleRegFormSubmit = handleSubmit((values: Record<string, any>) => {
  console.log('USER REGISTRATION DATA', JSON.stringify(values, null, 2))
  // Submit the form data to the server
})

// Resets input field when clicking the 'x' button
function clearCurrentRegFormInput() {
  switch (activeStepIndex.value) {
    case 3:
      userName.value = ''
      break
    case 4:
      userBirthday.value = ''
      break
    case 5:
      userEmail.value = ''
      break
    case 6:
      userPassword.value = ''
      break
  }
}

// Move to the next question if the current question is valid.
function nextQuestion() {
  switch (activeStepIndex.value) {
    case 1:
      if (Boolean(userPreferredGender.value)) {
        userPreferredGenderErrorBoolean.value = false
        activeStepIndex.value++
      } else {
        userPreferredGenderErrorBoolean.value = true
      }
      break
    case 2:
      if (Boolean(userGender.value)) {
        userGenderErrorBoolean.value = false
        activeStepIndex.value++
      } else {
        userGenderErrorBoolean.value = true
      }
      break
    case 3:
      if (Boolean(values.userName) && errors.value.userName === undefined) {
        userNameErrorBoolean.value = false
        activeStepIndex.value++
      } else {
        userNameErrorBoolean.value = true
      }

      break
    case 4:
      if (errors.value.userBirthday === undefined) {
        userBirthdayErrorBoolean.value = false
        activeStepIndex.value++
      } else {
        userBirthdayErrorBoolean.value = true
      }
      break
    case 5:
      if (errors.value.userEmail === undefined && Boolean(values.userEmail)) {
        userEmailErrorBoolean.value = false
        activeStepIndex.value++
      } else {
        userEmailErrorBoolean.value = true
      }
      break
    case 6:
      if (
        errors.value.userPassword === undefined &&
        Boolean(values.userPassword)
      ) {
        userPasswordErrorBoolean.value = false
        handleRegFormSubmit()
      } else {
        userPasswordErrorBoolean.value = true
      }
      break
    default:
      break
  }
}

// Move to the previous question.
function prevQuestion() {
  if (
    activeStepIndex.value <= regFormSteps.length &&
    activeStepIndex.value > regFormSteps[0]
  ) {
    activeStepIndex.value--
  }
}

// Radio type question data
const radioInputQuests = ref([
  {
    formStepNum: 1,
    title: 'Who are you looking for?',
    inputModel: userPreferredGender,
    inputBind: userPreferredGenderAttrs,
    genders: { men: 'men', women: 'women' },
  },
  {
    formStepNum: 2,
    title: 'Who are you?',
    inputModel: userGender,
    inputBind: userGenderAttrs,
    genders: { men: 'men', women: 'women' },
  },
])

// Text type question data
const textInputQuests = ref([
  {
    formStepNum: 3,
    title: 'What is your name?',
    inputModel: userName,
    inputBind: userNameAttrs,
    inputLabel: 'userName',
    placeholder: 'Enter your name',
    errorBoolean: userNameErrorBoolean,
  },
  {
    formStepNum: 4,
    title: 'When is your birthday',
    inputModel: userBirthday,
    inputBind: userBirthdayAttrs,
    inputLabel: 'userBirthday',
    placeholder: 'Enter your name',
    errorBoolean: userBirthdayErrorBoolean,
  },
  {
    formStepNum: 5,
    title: 'What is your email?',
    inputModel: userEmail,
    inputBind: userEmailAttrs,
    inputLabel: 'userEmail',
    placeholder: 'Enter your name',
    errorBoolean: userEmailErrorBoolean,
  },
  {
    formStepNum: 6,
    title: 'What is your password?',
    inputModel: userPassword,
    inputBind: userPasswordAttrs,
    inputLabel: 'userPassword',
    placeholder: 'Enter your name',
    errorBoolean: userPasswordErrorBoolean,
  },
])

// Input error tracker
const inputError = computed(() => {
  switch (activeStepIndex.value) {
    case 3:
      return errors.value.userName
    case 4:
      return errors.value.userBirthday
    case 5:
      return errors.value.userEmail
    case 6:
      return errors.value.userPassword
  }
})
</script>

<template>
  <main class="page">
    <RegisterBanner />
    <form @submit.prevent="nextQuestion" class="reg-form">
      <div class="reg-form__container">
        <div class="reg-form__wrapper">
          <!-- RADIO TYPE QUESTIONS  -->
          <RegisterRadioTypeQuestion
            v-if="activeStepIndex === 1 || activeStepIndex === 2"
            v-for="(radioInputQuest, index) in radioInputQuests"
            :key="index"
          >
            <template
              #title
              v-if="activeStepIndex === radioInputQuest.formStepNum"
            >
              <h3 class="reg-form-quest-radio__title">
                {{ radioInputQuest.title }}
              </h3>
            </template>

            <template
              #label
              v-if="activeStepIndex === radioInputQuest.formStepNum"
            >
              <label
                v-for="(gender, index) in radioInputQuest.genders"
                :key="index"
                :for="`${gender}-radio-input`"
                :class="`reg-form-quest-radio__${gender}-label`"
              >
                <input
                  v-model="radioInputQuest.inputModel"
                  :id="`${gender}-radio-input`"
                  :class="`reg-form-quest-radio__${gender}-radio-input`"
                  type="radio"
                  :value="`${gender}`"
                />

                {{ gender }}
              </label>
            </template>
          </RegisterRadioTypeQuestion>
          <!-- RADIO TYPE QUESTIONS  -->

          <!-- TEXT TYPE QUESTIONS  -->
          <RegisterTextTypeQuestion
            v-for="(textInputQuest, index) in textInputQuests"
            :v-if="activeStepIndex === textInputQuest.formStepNum"
            :key="index"
            :inputError="inputError"
            :textInputQuest="textInputQuest"
            :activeStepIndex="activeStepIndex"
            :clearCurrentRegFormInput="clearCurrentRegFormInput"
            v-model="textInputQuest.inputModel"
            v-bind="textInputQuest.inputBind"
          />
          <!-- TEXT TYPE QUESTIONS  -->

          <!-- FORM-NAV BUTTONS -->
          <RegisterFormButtons
            :activeStepIndex="activeStepIndex"
            :nextQuestion="nextQuestion"
            :prevQuestion="prevQuestion"
            :errors="errors"
            :values="values"
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
  // flex: 1 1 auto;
  @apply flex-auto;

  .reg-form {
    // .reg-form__nav-to-sign-in
    &__nav-to-sign-in {
      @apply mt-[39.5px];
    }
  }
  .nav-to-sign-in {
    // .nav-to-sign-in__wrapper
    &__wrapper {
      @apply flex items-center justify-center flex-col gap-[10px];
    }

    // .nav-to-sign-in__title
    &__title {
      @apply font-sans text-xs font-normal text-dark leading-[18px] -tracking-normal;
    }

    // .nav-to-sign-in__button
    &__button {
      @apply w-[86px] h-8 rounded-[10px] bg-[#f1f7ff] font-sans text-xs font-medium leading-4 text-center text-primary -tracking-tight;
    }
  }
}

.reg-form-quest-radio {
  // .reg-form-quest-radio__title
  &__title {
    @apply font-sans text-sm font-semibold leading-6 -tracking-normal text-center text-[#28293d] mt-2;
  }

  // .reg-form-quest-radio__men-radio-input
  &__men-radio-input {
    @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/male-white-icon.svg')] bg-[url(../../assets/icons/male-icon.svg)] appearance-none bg-[#f1f7ff] w-[55px] h-[55px] rounded-xl [background-size:20.13px] bg-no-repeat bg-center;
  }

  // .reg-form-quest-radio__men-label,
  // .reg-form-quest-radio__women-label
  &__women-label,
  &__men-label {
    @apply font-[Roboto] text-xs font-normal leading-4 -tracking-wide text-center flex flex-col gap-[6px] mt-2 mb-6;
  }

  // .reg-form-quest-radio__women-radio-input

  &__women-radio-input {
    @apply checked:bg-[#3568D4] checked:bg-[url('../../assets/icons/female-white-icon.svg')] appearance-none w-[55px] h-[55px] rounded-xl bg-[url(../../assets/icons/female-icon.svg)] [background-size:14.38px] bg-no-repeat bg-center bg-[#f1f7ff];
  }
}
</style>
