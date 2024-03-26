<script setup lang="ts">
import { ref } from 'vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const desktop = breakpoints.greaterOrEqual('xl')
const mobile = breakpoints.smaller('xl')

const selectedLanguages = ref<string[]>([])

const editProfile = defineModel()

function handleProfileInfoUpdate() {
  console.log('form submitted')
}
function handleProfileInfoReset() {
  console.log('form reset')
}
function closeEditProfileInfo() {
  editProfile.value = false
}

function addSelectedLanguage(event: Event) {
  if (
    !selectedLanguages.value.includes((event.target as HTMLInputElement).value)
  ) {
    selectedLanguages.value.push((event.target as HTMLInputElement).value)
  }
}

function removeSelectedLanguage(index: number) {
  selectedLanguages.value = selectedLanguages.value.filter(
    (item) => item != selectedLanguages.value[index]
  )
}

const languageList = ref([
  'Mandarin Chinese',
  'English',
  'Spanish',
  'Hindi',
  'Arabic',
  'Bengali',
  'Russian',
  'Portuguese',
  'Indonesian',
  'Urdu',
  'German',
  'Japanese',
  'French',
  'Punjabi',
  'Telugu',
  'Marathi',
  'Turkish',
  'Korean',
  'Cantonese Chinese',
  'Vietnamese',
  'Italian',
  'Persian',
  'Thai',
  'Gujarati',
  'Javanese',
  'Polish',
  'Ukrainian',
  'Malayalam',
  'Kannada',
  'Tamil',
  'Dutch',
  'Swedish',
  'Norwegian',
  'Danish',
  'Finnish',
  'Czech',
  'Hungarian',
  'Hebrew',
  'Greek',
  'Swahili',
  'Romanian',
  'Serbian',
  'Bulgarian',
  'Kazakh',
  'Belarusian',
  'Uzbek',
  'Azerbaijani',
  'Georgian',
  'Armenian',
  'Albanian',
  'Macedonian',
  'Slovak',
  'Slovenian',
  'Latvian',
  'Lithuanian',
  'Estonian',
  'Maltese',
  'Irish',
  'Welsh',
  'Basque',
  'Catalan',
  'Galician',
  'Quechua',
  'Aymara',
  'Guarani',
  'Nahuatl',
  'Yiddish',
  'Amharic',
  'Hausa',
  'Yoruba',
  'Igbo',
  'Zulu',
  'Xhosa',
  'Sotho',
  'Tswana',
  'Lingala',
  'Kinyarwanda',
  'Kirundi',
  'Malagasy',
  'Creole',
  'Pidgin',
])
</script>
<template>
  <div class="acc-edit-profile-main">
    <div class="acc-edit-profile-main__wrapper">
      <!-- Main Edit Section Mobile Header -->
      <div
        v-if="mobile"
        class="acc-edit-profile-main__mobile-header mobile-header"
      >
        <div class="mobile-header__wrapper">
          <button
            @click="closeEditProfileInfo"
            class="mobile-header__close-btn"
            type="button"
          >
            <i class="fa-solid fa-chevron-left"></i>
            <span class="mobile-header__close-btn-text">Back</span>
          </button>
        </div>
      </div>
      <!-- Main Edit Section Mobile Header -->

      <!-- Main Edit Section Desktop Header -->
      <div class="acc-edit-profile-main__desktop-header desktop-header">
        <div class="desktop-header__wrapper">
          <h2 class="desktop-header__title">Information</h2>
          <button
            v-if="desktop"
            @click="closeEditProfileInfo"
            class="desktop-header__close-btn"
            type="button"
          >
            <img
              class="desktop-header__close-btn-icon"
              src="../../../assets/icons/x-icon.svg"
              alt="Close button"
            />
          </button>
        </div>
      </div>
      <!-- Main Edit Section Desktop Header -->

      <!-- Main Edit Section Form Groups -->
      <form class="acc-edit-profile__form-groups form-groups">
        <div class="form-groups__wrapper">
          <!-- Main Edit Section Form Group First Column -->
          <div class="form-groups__form-col form-col">
            <div class="form-col__wrapper">
              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >First Name
                    <input
                      class="form-item__input"
                      type="text"
                      name="firstname"
                      placeholder="Robert"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Last Name
                    <input
                      class="form-item__input"
                      type="text"
                      name="lastname"
                      placeholder="Fox"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Date of Birth
                    <input
                      class="form-item__input"
                      type="text"
                      name="dateOfBirth"
                      placeholder="DD.MM.YYYY"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Marital Status
                    <select
                      class="form-item__input"
                      type="date"
                      name="maritalStatus"
                    >
                      <option selected value="Prefer not to say">
                        Prefer not to say
                      </option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Separated">Separated</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Children
                    <select
                      class="form-item__input"
                      type="date"
                      name="children"
                    >
                      <!-- <option selected value="Prefer not to say">
                        Prefer not to say
                      </option> -->
                      <option value="Prefer not to say" selected>
                        Prefer not to say
                      </option>
                      <option value="No children">No children</option>
                      <option value="1">1</option>
                      <option value="2-4">2-4</option>
                      <option value="5-7">5-7</option>
                      <option value="7+">7+</option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Religion
                    <select
                      class="form-item__input"
                      type="date"
                      name="religion"
                    >
                      <option selected value="Prefer not to say">
                        Prefer not to say
                      </option>
                      <option value="Islam">Islam</option>
                      <option value="Christianity">Christianity</option>
                      <option value="Atheist">Atheist</option>
                      <option value="Hinduism">Hinduism</option>
                      <option value="Buddhism">Buddhism</option>
                      <option value="Sikhism">Sikhism</option>
                      <option value="Judaism ">Judaism</option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->
            </div>
          </div>
          <!-- Main Edit Section Form Group First Column -->

          <!-- Main Edit Section Form Group Second Column -->
          <div class="form-groups__form-col form-col">
            <div class="form-col__wrapper">
              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Height
                    <input
                      class="form-item__input"
                      type="text"
                      name="height"
                      placeholder="180cm"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Weight
                    <input
                      class="form-item__input"
                      type="text"
                      name="weight"
                      placeholder="70kg"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Hair Colour
                    <input
                      class="form-item__input"
                      type="text"
                      name="hairColour"
                      placeholder="Grey"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Eyes Colour
                    <input
                      class="form-item__input"
                      type="text"
                      name="eyesColour"
                      placeholder="Blue"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Drinking
                    <select class="form-item__input" name="drinking">
                      <option selected value="Prefer not to say">
                        Prefer not to say
                      </option>
                      <option value="Always">Always</option>
                      <option value="Often">Often</option>
                      <option value="Sometimes">Sometimes</option>
                      <option value="Seldom">Seldom</option>
                      <option value="Never">Never</option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Smoking
                    <select class="form-item__input" name="smoking">
                      <option selected value="Prefer not to say">
                        Prefer not to say
                      </option>
                      <option value="Always">Always</option>
                      <option value="Often">Often</option>
                      <option value="Sometimes">Sometimes</option>
                      <option value="Seldom">Seldom</option>
                      <option value="Never">Never</option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->
            </div>
          </div>
          <!-- Main Edit Section Form Group Second Column -->

          <!-- Main Edit Section Form Group Third Column -->
          <div class="form-groups__form-col form-col">
            <div class="form-col__wrapper">
              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Country
                    <input
                      class="form-item__input"
                      type="text"
                      name="country"
                      placeholder="USA"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label">
                    City
                    <input
                      class="form-item__input"
                      type="text"
                      name="city"
                      placeholder="Los Angeles"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Languages

                    <div class="form-item__language-input language-input">
                      <div class="language-input__wrapper">
                        <div class="language-input__selected-languages">
                          <!-- Language Item -->
                          <div
                            v-if="selectedLanguages.length > 0"
                            class="language-input__selected-language-wrapper"
                            v-for="(
                              selectedLanguage, index
                            ) in selectedLanguages"
                            :key="index"
                          >
                            <div class="language-input__selected-language-item">
                              {{ selectedLanguage }}
                            </div>

                            <button
                              class="language-input__selected-language-item-remove-btn"
                              type="button"
                              @click="removeSelectedLanguage(index)"
                            >
                              <img
                                class="language-input__selected-language-item-remove-btn-icon"
                                src="../../../assets/icons/x-icon.svg"
                                alt="remove"
                              />
                            </button>
                          </div>

                          <p v-else class="language-input__selected-none">
                            Select language
                          </p>
                          <!-- Language Item -->
                        </div>
                        <select
                          @change="addSelectedLanguage($event)"
                          class="language-input__input-btn"
                          name="language"
                        >
                          <option
                            v-for="(language, index) in languageList"
                            :key="index"
                            :value="language"
                          >
                            {{ language }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Level of Education
                    <select class="form-item__input" name="smoking">
                      <option selected value="Prefer not to say">
                        Prefer not to say
                      </option>
                      <option value="Primary education	">
                        Primary education
                      </option>
                      <option value="Lower secondary education	">
                        Lower secondary education
                      </option>
                      <option value="Upper secondary education	">
                        Upper secondary education
                      </option>
                      <option value="Post-secondary non-tertiary education	">
                        Post-secondary non-tertiary education
                      </option>
                      <option value="Short-cycle tertiary education	">
                        Short-cycle tertiary education
                      </option>
                      <option value="Bachelor's or equivalent	">
                        Bachelor's or equivalent
                      </option>
                      <option value="Master's or equivalent	">
                        Master's or equivalent
                      </option>
                      <option value="Doctoral or equivalent	">
                        Doctoral or equivalent
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <!-- Column Item -->
              <div class="form-col__form-item form-item">
                <div class="form-item__wrapper">
                  <label class="form-item__label"
                    >Occupation
                    <input
                      class="form-item__input"
                      type="text"
                      name="occupation"
                      placeholder="Pensioner"
                    />
                  </label>
                </div>
              </div>
              <!-- Column Item -->

              <div class="form-groups__form-buttons form-buttons">
                <div class="form-buttons__wrapper">
                  <button
                    @click.prevent="handleProfileInfoReset"
                    class="form-buttons__reset-btn form-button"
                    type="button"
                  >
                    Reset
                  </button>

                  <button
                    @click.prevent="handleProfileInfoUpdate"
                    class="form-buttons__update-btn form-button"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Main Edit Section Form Group Third Column -->
        </div>
      </form>
      <!-- Main Edit Section Form Groups -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-edit-profile-main {
  @apply w-full xl:h-[776px] xl:rounded-[15px] bg-white;

  // .acc-edit-profile-main__wrapper
  &__wrapper {
    @apply flex flex-col gap-4 xl:gap-12 xl:px-6;
  }

  // .acc-edit-profile-main__mobile-header
  &__mobile-header {
  }

  // .acc-edit-profile-main__desktop-header
  &__desktop-header {
  }
}
.mobile-header {
  @apply w-max;

  // .mobile-header__wrapper
  &__wrapper {
  }

  // .mobile-header__close-btn
  &__close-btn {
    @apply flex items-center gap-2 text-primary;
  }

  // .mobile-header__close-btn-text
  &__close-btn-text {
    @apply font-sans text-sm font-medium leading-4;
  }
}
.fa-solid {
}
.fa-chevron-left {
}
.desktop-header {
  // .desktop-header__wrapper
  &__wrapper {
    @apply flex justify-between items-center xl:pt-14;
  }

  // .desktop-header__title
  &__title {
    @apply font-sans text-2xl xl:text-[40px] leading-[54px] font-bold text-dark;
  }

  // .desktop-header__close-btn
  &__close-btn {
    @apply h-6 w-6;
  }

  // .desktop-header__close-btn-icon
  &__close-btn-icon {
    @apply h-full w-full;
  }
}
.acc-edit-profile {
  // .acc-edit-profile__form-groups
  &__form-groups {
  }
}
.form-groups {
  // .form-groups__wrapper
  &__wrapper {
    // border: 1px solid rebeccapurple;
    @apply flex flex-col xl:flex-row gap-7 xl:gap-[86px];
  }

  // .form-groups__form-col
  &__form-col {
  }

  // .form-groups__form-buttons
  &__form-buttons {
  }
}
.form-col {
  @apply xl:w-64;

  // .form-col__wrapper
  &__wrapper {
    @apply flex flex-col gap-7;
  }

  // .form-col__form-item
  &__form-item {
  }
}

.form-item {
  @apply w-full;

  // .form-item__wrapper
  &__wrapper {
  }

  // .form-item__label
  &__label {
    @apply flex flex-col gap-1 font-sans text-xs font-normal;
  }

  // .form-item__input
  &__input {
    @apply w-full h-10 py-3 px-4 rounded-[10px] bg-[#f1f7ff] font-sans text-xs font-normal text-left outline-none;
  }

  // .form-item__language-input
  &__language-input {
  }
}

.language-input {
  @apply flex items-center w-full overflow-hidden h-10 rounded-[10px] bg-[#f1f7ff];

  // .language-input__wrapper
  &__wrapper {
    @apply flex items-center w-full h-full pl-4;
  }

  // .language-input__selected-languages
  &__selected-languages {
    @apply w-full h-full flex gap-[10px] overflow-x-scroll items-center;
  }

  // .language-input__selected-language-wrapper
  &__selected-language-wrapper {
    @apply bg-primary flex items-center justify-center gap-[10px] relative rounded-[5px];
  }

  &__selected-none {
    @apply font-sans text-[13px] font-normal text-[#8f90a6] leading-4;
  }

  // .language-input__selected-language-item
  &__selected-language-item {
    @apply font-sans text-[10px] font-normal text-white px-2 py-1;
  }

  // .language-input__selected-language-item-remove-btn
  &__selected-language-item-remove-btn {
    @apply bg-[#f1f7ff] w-[10px] h-[10px] absolute -top-[5px] -right-[5px] rounded-full outline-none;
  }

  // .language-input__selected-language-item-remove-btn-icon
  &__selected-language-item-remove-btn-icon {
  }

  // .language-input__input-btn
  &__input-btn {
    @apply w-5 h-full outline-none bg-[#f1f7ff];
  }
}

.form-buttons {
  @apply my-auto;

  // .form-buttons__wrapper
  &__wrapper {
    @apply flex justify-between h-[62px] items-end;

    .form-button {
      @apply w-[139px] xl:w-[123px] h-10 font-sans text-xs font-medium rounded-[10px];
    }
  }

  // .form-buttons__reset-btn
  &__reset-btn {
    @apply border border-primary text-primary;
  }

  // .form-buttons__update-btn
  &__update-btn {
    @apply bg-primary text-[#fffffb];
  }
}
</style>
