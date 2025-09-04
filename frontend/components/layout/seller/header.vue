<template>
  <header class="youkyouk-header">
    <button @click="$emit('toggle-sidebar')"><i class="youkyouk-icon-menu"></i></button>
    <h1>{{ title }}</h1>
    <div class="user-info">
      <span>{{ user.name }}</span>
      <img :src="user.avatar" alt="Avatar" />
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ title: String, user: Object })
</script>

<style scoped>
.youkyouk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
  color: white;
  padding: 10px 20px;
}
.user-info { display: flex; align-items: center; gap: 10px; }
.user-info img { width: 32px; height: 32px; border-radius: 50%; }
button { background: none; border: none; color: white; cursor: pointer; }
</style>
