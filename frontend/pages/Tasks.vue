<template>
  <div class="tasks-page">
    <h1>Tasks</h1>
    <div class="tasks-list">
      <div class="task-card" v-for="task in tasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <span>Status: {{ task.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksPage',
  data() {
    return {
      tasks: [
        { id: 1, title: 'Setup Backend', description: 'Initialize server and database', status: 'Pending' },
        { id: 2, title: 'Design UI', description: 'Create frontend layout', status: 'In Progress' }
      ]
    }
  }
}
</script>

<style scoped>
.tasks-page {
  padding: 2rem;
}
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
