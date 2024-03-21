<script setup lang="ts"></script>

<template>
  <div class="acc-left-side__profile-aside profile-aside">
    <div class="profile-aside__wrapper">
      <!-- Profile Card -->
      <div class="profile-aside__profile-card profile-card">
        <div class="profile-card__wrapper">
          <img
            class="profile-card__user-img"
            src="../../../assets/img//robert-fox.png"
            alt="Robert Fox"
          />
          <h2 class="profile-card__user-name">Robert Fox</h2>
          <div class="profile-card__user-status--online">Online</div>
          <button class="profile-card__edit-profile" type="button">Edit Profile</button>
          <button class="profile-card__profile-settings" type="button">Settings</button>
        </div>
      </div>
      <!-- Profile Card -->

      <!-- User Credits Card -->
      <div class="profile-aside__user-credits-card user-credits-card">
        <div class="user-credits-card__wrapper">
          <h1 class="user-credits-card__credits-left">174</h1>
          <p class="user-credits-card__text">Credits Left</p>
          <div class="user-credits-card__nonsense-items">
            <div class="user-credits-card__nonsense-item">200</div>
            <div class="user-credits-card__nonsense-item">300</div>
          </div>

          <button class="user-credits-card__button--get-credits" type="button">
            Get Credits
          </button>
          <button class="user-credits-card__button--all-packages" type="button">
            All Packages
          </button>
        </div>
      </div>
      <!-- User Credits Card -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.acc-left-side {
  // .acc-left-side__profile-aside
  &__profile-aside {
  }
}
.profile-aside {
  @apply h-full;

  // .profile-aside__wrapper
  &__wrapper {
    @apply flex h-full flex-col gap-6 xl:gap-10 xl:w-[340px];
  }

  // .profile-aside__profile-card
  &__profile-card {
    @apply shadow-[0px_4px_15px_0px_#6061701A] w-full xl:w-[254px] h-[490px] mx-auto py-3 rounded-[15px] bg-white;
  }

  // .profile-aside__user-credits-card
  &__user-credits-card {
    // border: 1px solid red;
  }
}
.profile-card {
  // .profile-card__wrapper
  &__wrapper {
    @apply flex flex-col items-center;
  }

  // .profile-card__user-img
  &__user-img {
    @apply w-[256px] xl:w-[222px] h-[302px];
  }

  // .profile-card__user-name
  &__user-name {
    @apply font-sans font-bold text-xl mt-2;
  }

  &__user-status--online {
    @apply font-sans font-normal text-xs leading-[18px] mt-1 w-24 h-7 py-[5px]
    appearance-none rounded-[5px] cursor-pointer text-center bg-[#e3fff1] text-[#06c270];
  }

  &__edit-profile {
    @apply font-sans font-medium text-xs leading-4 cursor-pointer mt-4 text-white bg-primary w-[254px] xl:w-[222px] h-10 rounded-[10px] tracking-wider;
  }
  &__profile-settings {
    @apply font-sans font-medium text-xs leading-4 tracking-wider cursor-pointer mt-4 text-primary;
  }
}

.user-credits-card {
  // .user-credits-card__wrapper
  &__wrapper {
    @apply flex flex-col items-center  w-full xl:w-[254px] h-[246px] mx-auto text-center rounded-[15px] bg-white
    shadow-[0px_4px_15px_0px_#6061701a];
  }

  // .user-credits-card__credits-left
  &__credits-left {
    @apply font-sans text-[40px] xl:text-4xl font-bold leading-[54px] text-primary mt-2 xl:mt-4 xl:tracking-wider;
  }

  // .user-credits-card__text
  &__text {
    @apply font-sans text-sm font-normal leading-6 xl:mt-2;
  }

  // .user-credits-card__nonsense-items
  &__nonsense-items {
    @apply flex items-center justify-center gap-[7px] mt-4;
  }

  // .user-credits-card__nonsense-item
  &__nonsense-item {
    @apply bg-primary-50 w-[124.5px] xl:w-[108.5px] h-10 flex items-center justify-center rounded-[10px] text-primary font-sans text-[13px] leading-4 font-medium tracking-[0.2px];
  }

  &__button--get-credits {
    @apply font-sans text-[13px] leading-4 font-medium tracking-[0.2px] text-white mt-4 rounded-[10px] w-[256px] xl:w-[224px] h-10 bg-primary;
  }

  &__button--all-packages {
    @apply font-sans text-[13px] leading-4 font-medium tracking-[0.2px] text-primary mt-4;
  }
}
</style>
