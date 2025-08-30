<template>
  <div class="user-list">
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return { users: [] }
  },
  mounted() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => (this.users = data))
  },
}
</script>

<style scoped>
.user-list {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
