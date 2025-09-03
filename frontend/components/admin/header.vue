<template>
  <header class="header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')"><i class="linear-icon-menu"></i></button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <span>{{ user.name }}</span>
      <img :src="user.avatar" alt="avatar" class="avatar"/>
      <button @click="$emit('toggle-theme')"><i class="linear-icon-sun"></i></button>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ title: String, user: Object })
</script>

<style scoped>
.header { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background: #2563eb; color: white; }
.header .left h1 { margin-left: 10px; }
.header .right { display: flex; align-items: center; }
.header .avatar { width: 32px; height: 32px; border-radius: 50%; margin-left: 10px; }
.header button { background: transparent; border: none; color: white; cursor: pointer; margin-left: 10px; }
</style>
