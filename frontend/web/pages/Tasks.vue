<template>
  <div class="page">
    <h2>Tasks</h2>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - <strong>{{ task.status }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      tasks: [
        { id: 1, title: "Design homepage", status: "In Progress" },
        { id: 2, title: "Develop API", status: "Pending" }
      ]
    };
  }
};
</script>

<style scoped>
.page {
  padding: 24px;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-list li {
  background-color: var(--dropdown-bg);
  padding: 12px;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
