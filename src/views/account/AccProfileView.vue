<script setup lang="ts">
import { ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const desktop = breakpoints.greaterOrEqual('xl')
const mobile = breakpoints.smaller('xl')

// Use API Endpoint for User Profile Info
const UserInfoAll = ref([
  { Age: 26 },
  { 'Date of Birth': '09/18/1995' },
  { 'Marital Status': 'Not married' },
  { Children: 'No children' },
  { Occupation: 'Model' },
  { Religion: 'Christianity' },
  { Languages: 'Russian, English' },
  { Height: '5’4 (1.67m)' },
  { Weight: '114 lbs (52kg)' },
  { 'Hair colour': '114 lbs (52kg)' },
  { 'Eyes colour': 'Brown' },
  { Smoking: 'Never' },
  { Drinking: 'Sometimes' },
  { 'Level of education': 'High school' },
])

// Use API Endpoint for User Profile Images
const userImageGallery = ref([
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
  { img: '../src/assets/img/gallery-image.png' },
])
</script>

<template>
  <div class="acc-profile">
    <div class="acc-profile__wrapper">
      <!-- User Info -->
      <div class="acc-profile__user-profile-info profile-info">
        <div class="profile-info__wrapper">
          <!-- User Main Info -->
          <div class="profile-info__user-main-info">
            <p class="profile-info__user-location">Kyiv, Ukraine</p>

            <div class="profile-info__user-member-id-wrapper">
              <p class="profile-info__user-member-id-title">Members ID:</p>
              <span class="profile-info__user-member-id">461227</span>
            </div>
          </div>
          <!-- User Main Info -->

          <!-- User Physical Info -->
          <div class="profile-info__user-physical-info user-physical-info">
            <div class="user-physical-info__wrapper">
              <!-- User Physical Info Left Column-->
              <div class="user-physical-info__left-col user-data">
                <div
                  v-for="userInfo in UserInfoAll.slice(0, 7)"
                  class="user-data__wrapper"
                >
                  <p class="user-data__data-keys">
                    {{ Object.keys(userInfo).join() }}:
                  </p>
                  <span class="user-data__data-values">{{
                    Object.values(userInfo).join()
                  }}</span>
                </div>
              </div>
              <!-- User Physical Info Left Column-->

              <!-- User Physical Info Right Column-->
              <div class="user-physical-info__right-col">
                <div
                  v-for="userInfo in UserInfoAll.slice(7)"
                  class="user-data__wrapper"
                >
                  <p class="user-data__data-keys">
                    {{ Object.keys(userInfo).join() }}:
                  </p>
                  <span class="user-data__data-values">{{
                    Object.values(userInfo).join()
                  }}</span>
                </div>
              </div>
              <!-- User Physical Info Right Column-->
            </div>
          </div>
        </div>
        <!-- User Physical Info -->

        <!-- Log Out Btn for Desktop -->
        <div v-if="desktop" class="acc-profile__log-out-btn">
          <a href="#">Log Out</a>
        </div>
        <!-- Log Out Btn for Desktop -->
      </div>
      <!-- User Info -->

      <!-- User Images -->
      <div class="acc-profile__user-profile-images profile-images">
        <div class="profile-images__wrapper">
          <!-- User Images Header -->
          <div class="profile-images__header-wrapper">
            <h3 class="profile-images__title">Photos</h3>
            <button class="profile-images__edit-images-btn">Edit Photos</button>
          </div>
          <!-- User Images Header -->

          <!-- User Images Gallery -->
          <div class="profile-images__gallery-wrapper">
            <!-- User Image Item -->
            <div
              v-for="userImage in userImageGallery"
              class="profile-images__image-wrapper"
            >
              <img
                class="profile-images__image-item"
                :src="userImage.img"
                alt="User gallery image"
              />
            </div>

            <!-- User Image Item -->
          </div>
          <!-- User Images Gallery -->
        </div>

        <!-- Log Out Btn for Mobile -->
        <div v-if="mobile" class="acc-profile__log-out-btn">
          <a href="#">Log Out</a>
        </div>
        <!-- Log Out Btn for Mobile -->
      </div>
      <!-- User Images -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-profile {
  // .acc-profile__wrapper
  &__wrapper {
  }

  // .acc-profile__user-profile-info
  &__user-profile-info {
    @apply flex flex-col xl:flex-row;
  }

  // .acc-profile__log-out-btn
  &__log-out-btn {
    @apply font-sans text-[13px] font-medium leading-4 text-primary mb-4 mt-10 xl:mt-5 text-center;
  }

  // .acc-profile__user-profile-images
  &__user-profile-images {
  }
}
.profile-info {
  // .profile-info__wrapper
  &__wrapper {
    @apply xl:px-6 pt-10 xl:pt-0;
  }

  // .profile-info__user-main-info
  &__user-main-info {
    @apply flex flex-row-reverse justify-end xl:flex-col xl:gap-1 gap-[77px];
  }

  // .profile-info__user-location
  &__user-location {
    @apply font-sans text-xs font-normal leading-[18px] text-[#1f1f1f];
  }

  // .profile-info__user-member-id-wrapper
  &__user-member-id-wrapper {
    @apply flex xl:flex-row flex-col gap-2 xl:gap-1;
  }

  // .profile-info__user-member-id-title
  &__user-member-id-title {
    @apply font-sans text-xs font-normal leading-[18px] text-[#1f1f1f];
  }

  // .profile-info__user-member-id
  &__user-member-id {
    @apply font-sans text-xs font-semibold leading-[18px] text-[#1f1f1f];
  }
}

// .profile-info__user-physical-info
.user-physical-info {
  @apply xl:mt-[60px] xl:h-[270px] xl:w-[783px] mt-6;

  // .user-physical-info__wrapper
  &__wrapper {
    @apply flex gap-14 xl:gap-10;
  }

  // .user-physical-info__left-col
  &__left-col {
    @apply flex flex-col xl:w-1/2 gap-6;
  }

  &__right-col {
    @apply flex flex-col gap-x-6 xl:w-1/2 gap-6;
  }
}
.user-data {
  // .user-data__wrapper
  &__wrapper {
    @apply flex flex-wrap gap-2 flex-col xl:flex-row;
  }

  // .user-data__data-keys
  &__data-keys {
    @apply font-sans text-xs font-normal leading-[18px] text-[#1f1f1f];
  }

  // .user-data__data-values
  &__data-values {
    @apply font-sans text-xs font-normal leading-[18px] text-[#1f1f1f];
  }
}

// GALLERY

.acc-profile {
  // .acc-profile__user-profile-images
  &__user-profile-images {
  }
}
.profile-images {
  // .profile-images__wrapper
  &__wrapper {
    @apply pt-[35px] xl:pt-[80px] xl:px-6;
  }

  // .profile-images__header-wrapper
  &__header-wrapper {
    @apply flex justify-between;
  }

  // .profile-images__title
  &__title {
    @apply font-sans text-sm font-bold leading-6 text-dark;
  }

  &__edit-images-btn {
    @apply font-sans text-[13px] font-medium leading-4 text-primary;
  }

  // .profile-images__gallery-wrapper
  &__gallery-wrapper {
    @apply flex flex-wrap justify-start gap-x-6 gap-y-4 xl:gap-x-[27px] xl:gap-y-6 mt-2;
  }

  // .profile-images__image-wrapper
  &__image-wrapper {
    @apply w-max h-max border-none;
  }

  &__image-item {
    @apply w-[131px] h-[175px] xl:w-[155px] xl:h-[190px] rounded-[10px] bg-contain;
  }
}
</style>
