<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <div class="actions">
      <button @click="$emit('toggle-sidebar')"><i class="linear-icon-menu"></i></button>
      <span>{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ title: String, user: Object })
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
  color: white;
  padding: 15px;
}
.actions button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}
</style>
