<template>
  <div class="dashboard-page">
    <h1>Dashboard</h1>
    <div class="stats-cards">
      <div class="card">Total Projects: 2</div>
      <div class="card">Total Tasks: 2</div>
      <div class="card">Team Members: 2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage'
}
</script>

<style scoped>
.dashboard-page {
  padding: 2rem;
}
.stats-cards {
  display: flex;
  gap: 1rem;
}
.card {
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
}
body.dark .card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
