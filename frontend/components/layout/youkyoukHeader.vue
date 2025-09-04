<template>
  <header class="youkyouk-header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')"><i class="youkyouk-icon-menu"></i></button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <button @click="$emit('toggle-theme')"><i class="youkyouk-icon-theme"></i></button>
      <div class="user">{{ user.name }}</div>
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
  padding: 10px 20px;
  background: #111827;
  color: white;
}
.youkyouk-header .left h1 { margin-left: 10px; }
.youkyouk-header .right .user { margin-left: 15px; }
</style>
