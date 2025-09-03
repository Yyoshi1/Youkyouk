<template>
  <header class="header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')">☰</button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <button @click="$emit('toggle-theme')">🌓</button>
      <img :src="user.avatar" class="avatar" />
      <span>{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ title: String, user: Object })
</script>

<style scoped>
.header { display:flex; justify-content:space-between; padding:10px 20px; background:#f3f4f6; align-items:center; box-shadow:0 2px 4px rgba(0,0,0,0.1);}
.header .avatar { width:32px; height:32px; border-radius:50%; margin-left:8px; }
body.dark-mode .header { background:#1f2937; color:white; }
</style>
