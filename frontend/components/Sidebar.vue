<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Tasks</li>
        <li>Teams</li>
        <li>Users</li>
        <li>Notifications</li>
        <li>Settings</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default { name: 'Sidebar' }
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #f3f4f6;
  height: 100vh;
  padding: 1rem;
}
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { margin-bottom: 1rem; cursor: pointer; }
</style>
