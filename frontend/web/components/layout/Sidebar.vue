<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><a href="#"><img src="/assets/icons/home.svg" /> Dashboard</a></li>
        <li><a href="#"><img src="/assets/icons/projects.svg" /> Projects</a></li>
        <li><a href="#"><img src="/assets/icons/tasks.svg" /> Tasks</a></li>
        <li><a href="#"><img src="/assets/icons/users.svg" /> Users</a></li>
        <li><a href="#"><img src="/assets/icons/settings.svg" /> Settings</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  background-color: var(--header-bg);
  border-right: 1px solid var(--border-color);
  height: 100vh;
  padding: 16px 0;
  font-family: 'Inter', sans-serif;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 8px 0;
}

.sidebar a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-color);
  padding: 8px 16px;
}

.sidebar a img {
  height: 20px;
  margin-right: 12px;
}

.sidebar a:hover {
  background-color: var(--dropdown-hover);
  border-radius: 4px;
}
</style>
