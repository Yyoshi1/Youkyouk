<template>
  <header class="header">
    <h1>Youkyouk Dashboard</h1>
    <button @click="$emit('toggle-dark')">{{ isDark ? 'Light' : 'Dark' }}</button>
  </header>
</template>

<script>
export default {
  props: { isDark: Boolean }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}

body.dark .header {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
