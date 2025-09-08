<template>
  <aside :class="['sidebar', { dark: isDark }]">
    <div class="logo">Youkyouk</div>
    <nav>
      <ul>
        <li>{{ $t('dashboard') }}</li>
        <li>{{ $t('projects') }}</li>
        <li>{{ $t('tasks') }}</li>
        <li>{{ $t('teams') }}</li>
        <li>{{ $t('users') }}</li>
        <li>{{ $t('roles') }}</li>
        <li>{{ $t('reports') }}</li>
        <li>{{ $t('settings') }}</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isDark: Boolean
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 1rem;
  height: 100vh;
}
.sidebar.dark {
  background-color: #1f2937;
  color: #f3f4f6;
}
.sidebar .logo {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 0.5rem 0;
  cursor: pointer;
}
.sidebar li:hover {
  opacity: 0.8;
}
</style>
