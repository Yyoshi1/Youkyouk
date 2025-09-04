<template>
  <div class="client-dashboard">
    <h1>Client Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
    <!-- Client-specific widgets -->
  </div>
</template>

<script>
export default {
  name: "ClientDashboard",
  data() {
    return {
      user: {
        name: "Client"
      }
    };
  }
};
</script>

<style scoped>
.client-dashboard {
  padding: 24px;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}
</style>
