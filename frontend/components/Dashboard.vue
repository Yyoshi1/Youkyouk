<template>
  <div class="dashboard p-4 space-y-6">
    <h2 class="text-xl font-bold">Dashboard</h2>
    <section class="projects grid grid-cols-3 gap-4">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </section>
    <section class="tasks grid grid-cols-3 gap-4">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </section>
  </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import TaskCard from './TaskCard.vue'
import { ref } from 'vue'

const projects = ref([
  { id: 1, name: 'Project Alpha', description: 'Description for Alpha', teamName: 'Team A' },
  { id: 2, name: 'Project Beta', description: 'Description for Beta', teamName: 'Team B' }
])

const tasks = ref([
  { id: 1, title: 'Task One', description: 'Do something', projectName: 'Project Alpha' },
  { id: 2, title: 'Task Two', description: 'Do something else', projectName: 'Project Beta' }
])
</script>

<style scoped>
.dashboard {
  transition: all 0.2s ease-in-out;
}
</style>
