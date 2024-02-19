<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/modules/counter'

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)

const { increment } = counterStore
</script>

<template>
  <v-container class="flex flex-col items-center py-20" fluid>
    <v-col justify="center" align="center" gap="20">
      <v-col>
        <span class="text-h4 font-weight-bold uppercase">
          {{ count }}
        </span>
      </v-col>
      <v-col>
        <v-btn @click="increment" class="btn-primary"> Increment </v-btn>
      </v-col>
    </v-col>
  </v-container>
</template>

<style lang="scss"></style>
