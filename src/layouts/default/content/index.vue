<script setup lang="ts"></script>

<template>
  <v-main>
    <div class="layout-content">
      <RouterView v-slot="{ Component, route }">
        <KeepAlive>
          <component :is="Component" :key="route.fullPath" />
        </KeepAlive>
      </RouterView>
    </div>
  </v-main>
</template>

<style lang="scss" scoped></style>
