<template>
  <div class="users-page">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - Role: {{ user.role }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [
        { id: 1, name: 'Alice', role: 'Admin' },
        { id: 2, name: 'Bob', role: 'Member' },
        { id: 3, name: 'Charlie', role: 'Guest' }
      ]
    }
  }
}
</script>

<style scoped>
.users-page {
  padding: 1rem;
}

body.dark .users-page {
  background-color: #1f2937;
  color: #f3f4f6;
}
</style>
