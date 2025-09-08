<template>
  <div class="notifications p-4 space-y-2">
    <div v-for="notification in notifications" :key="notification.id" class="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700">
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  { id: 1, message: 'New task assigned' },
  { id: 2, message: 'Project updated' },
  { id: 3, message: 'Team invitation received' }
])
</script>

<style scoped>
.notifications div {
  transition: all 0.2s ease-in-out;
}
</style>
