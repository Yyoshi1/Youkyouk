<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <div class="user-info">
      <span>{{ user.name }}</span>
      <button @click="$emit('toggle-sidebar')">☰</button>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({ title: String, user: Object })
</script>

<style scoped>
.header { display: flex; justify-content: space-between; padding: 10px; background: #111827; color: white; }
.user-info span { margin-right: 10px; }
</style>
