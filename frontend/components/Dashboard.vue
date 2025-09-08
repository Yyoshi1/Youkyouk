<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="cards">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import TaskCard from '../components/TaskCard.vue'

export default {
  name: 'Dashboard',
  components: { ProjectCard, TaskCard },
  data() {
    return {
      projects: [
        { id: 1, name: 'Project Alpha', description: 'Sample project', teamName: 'Team A' },
        { id: 2, name: 'Project Beta', description: 'Sample project', teamName: 'Team B' }
      ],
      tasks: [
        { id: 1, title: 'Task 1', description: 'Do something' },
        { id: 2, title: 'Task 2', description: 'Do something else' }
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
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
