<template>
  <div class="users p-6">
    <h2 class="text-2xl font-bold mb-4">Users</h2>
    <ul class="space-y-3">
      <li v-for="user in users" :key="user.id" class="border p-3 rounded shadow hover:shadow-md transition">
        <h4 class="font-medium">{{ user.name }}</h4>
        <span class="text-sm text-gray-500 dark:text-gray-400">Role: {{ user.role }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alice', role: 'Admin' },
        { id: 2, name: 'Bob', role: 'Member' }
      ]
    }
  }
}
</script>
