<script setup lang="ts">
import type { IDetailsProps } from './types'

defineProps<IDetailsProps>()
</script>

<template>
  <div class="details">
    <div class="details__wrapper">
      <VRow
        v-for="item of items"
        :key="item.key"
        no-gutters
        class="details__row"
      >
        <VCol class="details__col" cols="12" sm="6">
          <div class="details__key">
            {{ item.key }}
          </div>
        </VCol>
        <VCol class="details__col" cols="12" sm="6">
          <div class="details__value">{{ item.value }}</div>
        </VCol>
      </VRow>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  // .details__wrapper

  &__wrapper {
    @apply flex flex-col gap-4;
  }

  // .details__row

  &__row {
    @apply pb-4 border-b border-gray-100 gap-y-4 last:border-0 last:pb-0;
  }

  // .details__col

  &__col {
    @apply text-base leading-none;
  }

  // .details__key

  &__key {
    @apply font-semibold;
  }

  // .details__value

  &__value {
  }
}
</style>
