<template>
  <header class="header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')"><i class="linear-icon-menu"></i></button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <div class="user-info">
        <img :src="user.avatar" alt="avatar" />
        <span>{{ user.name }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  user: Object
})
</script>

<style scoped>
.header { display: flex; justify-content: space-between; align-items: center; background: #111827; color: white; padding: 10px 20px; }
.left button { background: none; border: none; color: white; cursor: pointer; margin-right: 10px; }
.user-info { display: flex; align-items: center; }
.user-info img { width: 32px; height: 32px; border-radius: 50%; margin-right: 8px; }
</style>
