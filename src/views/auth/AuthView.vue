<script setup lang="ts">
import { ref } from 'vue'
import MobileLayout from './MobileLayout.vue'
import DesktopLayout from './DesktopLayout.vue'

const desktopView = ref(true)
</script>

<template>
  <DesktopLayout v-if="desktopView" :desktopView="desktopView" />
  <MobileLayout v-else :desktopView="desktopView" />
</template>

<style scoped lang="scss"></style>
