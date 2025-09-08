<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/tasks">Tasks</router-link>
        </li>
        <li>
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
        <li>
          <router-link to="/notifications">Notifications</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'YoukyoukSidebar'
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  min-height: 100vh;
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
  margin: 0.5rem 0;
}

.sidebar a {
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.sidebar a:hover {
  background-color: #f3f4f6;
}

body.dark .sidebar a:hover {
  background-color: #4b5563;
}
</style>
