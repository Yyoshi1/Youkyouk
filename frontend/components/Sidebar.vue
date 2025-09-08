<template>
  <aside class="sidebar">
    <ul>
      <li>{{ $t('dashboard') }}</li>
      <li>{{ $t('projects') }}</li>
      <li>{{ $t('tasks') }}</li>
      <li>{{ $t('teams') }}</li>
      <li>{{ $t('users') }}</li>
      <li>{{ $t('reports') }}</li>
      <li>{{ $t('settings') }}</li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: { isDark: Boolean }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  padding: 1rem;
  background-color: #f3f4f6;
}

body.dark .sidebar {
  background-color: #1f2937;
  color: #f3f4f6;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 1rem 0;
  cursor: pointer;
}
</style>
