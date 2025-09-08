<template>
  <aside class="bg-white dark:bg-gray-900 w-64 min-h-screen shadow p-4 flex flex-col">
    <div class="mb-6">
      <img src="/logo.png" alt="Youkyouk Logo" class="h-10 w-10 mx-auto mb-2">
      <h2 class="text-center font-bold text-gray-900 dark:text-white">Youkyouk</h2>
    </div>
    <nav class="flex-1">
      <ul class="space-y-2">
        <li><a href="/dashboard" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Dashboard</a></li>
        <li><a href="/projects" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Projects</a></li>
        <li><a href="/tasks" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Tasks</a></li>
        <li><a href="/teams" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Teams</a></li>
        <li><a href="/users" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Users</a></li>
        <li><a href="/roles" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Roles</a></li>
        <li><a href="/notifications" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Notifications</a></li>
        <li><a href="/reports" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Reports</a></li>
        <li><a href="/settings" class="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">Settings</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
</script>

<style scoped>
aside {
  transition: all 0.2s ease-in-out;
}
</style>
