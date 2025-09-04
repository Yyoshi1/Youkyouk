<template>
  <header class="youkyouk-header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')"><i class="yk-icon-menu"></i></button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <button @click="$emit('toggle-theme')"><i class="yk-icon-sun-moon"></i></button>
      <div class="user">
        <span>{{ user.name }}</span>
        <img :src="user.avatar || defaultAvatar" alt="avatar"/>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  user: Object,
})
const defaultAvatar = "/images/default-avatar.png"
</script>

<style scoped>
.youkyouk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #111827;
  color: white;
}
.youkyouk-header .left h1 { margin-left: 15px; }
.youkyouk-header .right { display: flex; align-items: center; gap: 15px; }
.youkyouk-header .user { display: flex; align-items: center; gap: 10px; }
.youkyouk-header .user img { width: 32px; height: 32px; border-radius: 50%; }
</style>
