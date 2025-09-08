<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/teams">Teams</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  background-color: #f9fafb;
  border-right: 1px solid #ddd;
  height: 100vh;
  padding: 1rem;
}

body.dark .sidebar {
  background-color: #1f2937;
  border-color: #4b5563;
  color: #f3f4f6;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 1rem 0;
}

.sidebar a {
  text-decoration: none;
  color: inherit;
}
</style>
