<template>
  <header class="header">
    <div class="logo">Youkyouk</div>
    <div class="actions">
      <button @click="$emit('toggle-sidebar')">
        <i class="youkyouk-icon-menu"></i>
      </button>
      <button @click="$emit('toggle-theme')">
        <i class="youkyouk-icon-sun"></i>
      </button>
      <div class="user-menu">
        <img :src="user.avatar" class="avatar"/>
        <span>{{ user.name }}</span>
      </div>
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
  align-items: center;
  background: #1f2937;
  color: white;
  padding: 10px 20px;
}
.avatar { width: 32px; border-radius: 50%; }
.actions button { background: none; border: none; color: white; margin-right: 10px; font-size: 18px; }
</style>
