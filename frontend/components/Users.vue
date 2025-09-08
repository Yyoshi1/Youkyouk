<template>
  <div class="users p-4 space-y-6">
    <h2 class="text-xl font-bold">Users</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="user in users" :key="user.id" class="user-card p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
        <h3 class="font-semibold">{{ user.name }}</h3>
        <p class="text-gray-600 dark:text-gray-300">Role: {{ user.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Member' },
  { id: 3, name: 'Charlie', role: 'Guest' }
])
</script>

<style scoped>
.user-card {
  transition: all 0.2s ease-in-out;
}
</style>
