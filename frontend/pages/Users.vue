<template>
  <div class="users-page">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.role }}) - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Member' }
      ]
    }
  }
}
</script>

<style scoped>
.users-page {
  padding: 2rem;
}
</style>
