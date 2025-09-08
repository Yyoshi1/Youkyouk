<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <div class="task-list">
      <div class="task-card" v-for="task in tasks" :key="task.id">
        <h4>{{ task.title }}</h4>
        <p>Status: {{ task.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data() {
    return {
      tasks: [
        { id: 1, title: 'Setup Backend', status: 'Pending' },
        { id: 2, title: 'Design UI', status: 'In Progress' }
      ]
    }
  }
}
</script>

<style scoped>
.tasks {
  padding: 1rem;
}
.task-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
