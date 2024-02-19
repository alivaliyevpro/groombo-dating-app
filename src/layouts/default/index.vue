<script setup lang="ts">
import LayoutHeader from './header/index.vue'
import LayoutContent from './content/index.vue'
import LayoutFooter from './footer/index.vue'
</script>

<template>
  <div class="layout">
    <LayoutHeader class="layout__header" />
    <LayoutContent class="layout__content" />
    <LayoutFooter class="layout__footer" />
  </div>
</template>

<style lang="scss" scoped></style>
