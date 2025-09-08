<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to Youkyouk! Here is an overview of your projects and tasks.</p>
    <div class="cards">
      <div class="card">
        <h3>Total Projects</h3>
        <p>{{ projects.length }}</p>
      </div>
      <div class="card">
        <h3>Total Tasks</h3>
        <p>{{ tasks.length }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        { id: 1, name: 'Project One' },
        { id: 2, name: 'Project Two' }
      ],
      tasks: [
        { id: 1, title: 'Setup Backend' },
        { id: 2, title: 'Design UI' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 1rem;
}
.cards {
  display: flex;
  gap: 1rem;
}
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  width: 200px;
}
body.dark .card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
