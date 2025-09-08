<template>
  <header class="header">
    <div class="logo">Youkyouk</div>
    <nav class="nav">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/reports">Reports</a></li>
      </ul>
    </nav>
    <div class="user-actions">
      <button @click="toggleTheme">{{ themeLabel }}</button>
      <img class="user-avatar" :src="user.avatar" alt="User Avatar"/>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatar: '/assets/avatar.png',
        name: 'John Doe'
      },
      darkMode: false
    }
  },
  computed: {
    themeLabel() {
      return this.darkMode ? 'Light Mode' : 'Dark Mode'
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      document.body.classList.toggle('dark', this.darkMode)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}
body.dark .header {
  background-color: #1f2937;
  border-color: #4b5563;
  color: #f3f4f6;
}
.nav ul {
  display: flex;
  gap: 1rem;
}
.nav ul li a {
  text-decoration: none;
  color: inherit;
}
.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
button {
  cursor: pointer;
}
</style>
