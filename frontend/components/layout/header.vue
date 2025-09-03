<template>
  <header class="header">
    <div class="left">
      <slot name="logo">Youkyouk Admin</slot>
    </div>
    <div class="right">
      <button @click="$emit('toggleTheme')">Toggle Theme</button>
      <span>{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ user: Object })
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}
.dark .header { background: #111827; color: white; }
</style>
