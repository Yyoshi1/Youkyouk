<template>
  <header class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
    <h1 class="text-xl font-bold text-gray-900 dark:text-white">Youkyouk Dashboard</h1>
    <div class="flex items-center space-x-4">
      <button @click="$emit('toggleTheme')" class="text-gray-700 dark:text-gray-200">🌙</button>
      <img class="w-8 h-8 rounded-full" src="https://via.placeholder.com/32" alt="User Avatar"/>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['toggleTheme']
}
</script>
