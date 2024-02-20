<script setup lang="ts">
import RegisterBanner from "../register/components/RegisterBanner.vue";
import RegisterFooter from "../register/components/RegisterFooter.vue";
import { useForm } from "vee-validate";
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
});

const [menRadio, menRadioAttrs] = defineField("radio");
const [womenRadio, womenRadioAttrs] = defineField("radio");

// console.log("values", values);
// console.log("maleRadioAttrs", maleRadioAttrs);
// console.log("ERRORS", errors);
// console.log("initialValues", meta.value.initialValues);

const onClick = handleSubmit(
  async (values: any): Promise<void> => {
    // console.log(JSON.stringify(values, null, 2));
    // console.log(womenRadio.value);
    console.log("User data", values);
  }
);
</script>

<template>
  <main class="page">
    <RegisterBanner />
    <form class="reg-form">
      <div class="reg-form__container">
        <div class="reg-form__wrapper">
          <!-- QUESTION FIRST -->
          <div class="reg-form-quest reg-form-quest--first">
            <h3 class="reg-form-quest__title">Who are you looking for?</h3>

            <div class="reg-form-quest-first__opts">
              <div class="reg-form-quest-first__opt-wrapper">
                <label for="menRadio" class="reg-form-quest-first__men-label"
                  ><input
                    class="reg-form-quest-first__men-radio-input"
                    v-model="menRadio"
                    v-bind="menRadioAttrs"
                    type="radio"
                    value="menRadio"
                  />
                  Men
                </label>
              </div>

              <div class="reg-form-quest-first__opt-wrapper">
                <label for="womenRadio" class="reg-form-quest-first__women-label"
                  ><input
                    class="reg-form-quest-first__women-radio-input"
                    v-model="womenRadio"
                    v-bind="womenRadioAttrs"
                    type="radio"
                    value="womenRadio"
                  />
                  Women
                </label>
              </div>
            </div>
          </div>

          <!-- QUESTION FIRST -->

          <!-- FORM-NAV BUTTONS -->
          <div class="reg-form-btns">
            <div class="reg-form-btns__wrapper">
              <button class="reg-form-btns__back-btn">Back</button>
              <button
                @click.prevent="onClick"
                :disabled="!menRadio || !womenRadio"
                class="reg-form-btns__next-btn"
              >
                Next
              </button>
            </div>
          </div>
          <!-- FORM-NAV BUTTONS -->
        </div>
      </div>
    </form>
  </main>
  <RegisterFooter />
</template>

<style scoped lang="scss">
.page {
  // display: flex;
  // flex-direction: column;
  flex: 1 1 auto;
}
</style>
