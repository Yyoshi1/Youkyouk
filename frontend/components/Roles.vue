<template>
  <div class="roles p-4 space-y-6">
    <h2 class="text-xl font-bold">Roles</h2>
    <ul class="space-y-2">
      <li v-for="role in roles" :key="role.id" class="role-item p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
        <span class="font-semibold">{{ role.name }}</span> - {{ role.permissions.join(', ') }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const roles = ref([
  { id: 1, name: 'Admin', permissions: ['manage_projects', 'manage_users'] },
  { id: 2, name: 'Member', permissions: ['view_projects', 'edit_tasks'] },
  { id: 3, name: 'Guest', permissions: ['view_projects'] }
])
</script>

<style scoped>
.role-item {
  transition: all 0.2s ease-in-out;
}
</style>
