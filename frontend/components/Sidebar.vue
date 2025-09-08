<template>
  <aside class="sidebar">
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/tasks">Tasks</a></li>
      <li><a href="/teams">Teams</a></li>
      <li><a href="/reports">Reports</a></li>
      <li><a href="/settings">Settings</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f3f4f6;
  padding: 1rem;
}
body.dark .sidebar {
  background-color: #111827;
  color: #f3f4f6;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar ul li {
  margin-bottom: 1rem;
}
.sidebar ul li a {
  text-decoration: none;
  color: inherit;
}
</style>
