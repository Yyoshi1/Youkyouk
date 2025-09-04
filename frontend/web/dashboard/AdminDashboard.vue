<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
    <!-- Widgets and stats can be added here -->
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      user: {
        name: "Administrator"
      }
    };
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 24px;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}
</style>
