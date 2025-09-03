<template>
  <header class="header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <button @click="$emit('toggle-theme')">
        🌙
      </button>
      <div class="profile">
        <img :src="user.avatar" alt="Avatar"/>
        <span>{{ user.name }}</span>
      </div>
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
  background-color: var(--color-card-bg);
  padding: 10px 20px;
  box-shadow: var(--shadow-card);
}
body.dark-mode .header {
  background-color: var(--color-card-bg-dark);
}
.left { display: flex; align-items: center; gap: 10px; }
.right { display: flex; align-items: center; gap: 20px; }
.profile { display: flex; align-items: center; gap: 10px; }
.profile img { width: 32px; height: 32px; border-radius: 50%; }
.icon { width: 24px; height: 24px; cursor: pointer; }
</style>
