<script setup lang="ts">
import RegisterBanner from "../register/components/RegisterBanner.vue";
import RegisterFooter from "../register/components/RegisterFooter.vue";

// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

// interface Props {
//   desktopView: boolean
// }
// const { desktopView } = defineProps<Props>()

// const breakpoints = useBreakpoints(breakpointsTailwind)

// const desktop = breakpoints.greaterOrEqual('xl')
// const mobile = breakpoints.smaller('xl')

// import { reactive } from 'vue'

// const user: User = reactive({ whoAreYou: '' })

// function submit() {
//   console.log(user)
// }

import { Form } from "vee-validate";
import { useForm } from "vee-validate";

// Validation, or use `yup` or `zod`
function required(value: string) {
  return value.length > 10 ? true : "This field is required";
}

function passwordRequired(value: string): string | boolean {
  if (!value) {
    return "Password is a required field";
  }
  if (value.length < 8) {
    return "Password is too short";
  }
  return true;
}

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    email: required,
    password: passwordRequired,
  },
});

// Define fields
const email = defineInputBinds("email");
const password = defineInputBinds("password");

// Submit handler
const onSubmit = handleSubmit(async (values: any) => {
  console.log(values);
  // router.push({ name: 'Expense' });
});

// Submit handler
// function onSubmit(values: any) {
//   console.log(values)
// }
</script>

<template>
  <RegisterBanner />

  <form class="reg-form" @submit.prevent="onSubmit">
    <div class="reg-form__container">
      <div class="reg-form__wrapper">
        <!-- QUESTION FIRST -->
        <div class="reg-form-quest reg-form-quest--first">
          <h3 class="reg-form-quest__title">Who are you looking for?</h3>

          <div class="reg-form-quest-first__opts">
            <div class="reg-form-quest-first__opt-wrapper">
              <div>
                <label for="password"> Password </label>
                <div>
                  <input
                    id="password"
                    v-bind="password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>

                <span>
                  {{ errors.password }}
                </span>
              </div>
              <!-- <Field
                name="gender"
                type="radio"
                value="Male"
                :rules="required"
              /> -->
              <!-- <input
                v-model="user.whoAreYou"
                class="reg-form-quest-first__male-radio"
                id="male"
                type="radio"
                name="gender"
                value="men"
              /> -->
              <!-- <label for="male" class="reg-form-quest-first__male-label"
                >Men</label
              > -->
            </div>

            <div class="reg-form-quest-first__opt-wrapper">
              <div>
                <label for="email"> Email </label>
                <div>
                  <input
                    id="email"
                    v-bind="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
                <span>
                  {{ errors.email }}
                </span>
              </div>
              <!-- <Field
                name="gender"
                type="radio"
                value="Woman"
                :rules="required"
              /> -->

              <!-- <input
                v-model="user.whoAreYou"
                class="reg-form-quest-first__women-radio"
                id="female"
                type="radio"
                name="gender"
                value="women"
              /> -->
              <!-- <label class="reg-form-quest-first__women-label" for="female"
                >Women</label
              > -->
            </div>
          </div>
        </div>

        <!-- QUESTION FIRST -->
      </div>
    </div>

    <button type="submit">Submit</button>
  </form>
  <RegisterFooter />
</template>

<style scoped lang="scss"></style>

<!-- <button
          @click.prevent="onClick"
          :disabled="!menRadio || !womenRadio"
          class="border bg-blue-400 disabled:bg-red-300"
        >
          Next
        </button> -->
