<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.role }})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'Member' }
      ]
    }
  }
}
</script>

<style scoped>
.users {
  padding: 1rem;
}
</style>
