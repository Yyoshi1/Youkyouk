<template>
  <div class="dashboard">
    <Header :isDark="isDark" @toggle-dark="toggleDark"/>
    <div class="main-content">
      <Sidebar :isDark="isDark"/>
      <div class="content">
        <h2>{{ $t('projects') }}</h2>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" :isDark="isDark"/>
        <h2>{{ $t('tasks') }}</h2>
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" :isDark="isDark"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import ProjectCard from './ProjectCard.vue'
import TaskCard from './TaskCard.vue'

export default {
  components: { Sidebar, Header, ProjectCard, TaskCard },
  data() {
    return {
      isDark: false,
      projects: [
        { id: 1, name: 'Project Alpha', description: 'Description Alpha', teamName: 'Team A' },
        { id: 2, name: 'Project Beta', description: 'Description Beta', teamName: 'Team B' }
      ],
      tasks: [
        { id: 1, title: 'Task 1', description: 'Task 1 description' },
        { id: 2, title: 'Task 2', description: 'Task 2 description' }
      ]
    }
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
}
.content {
  flex: 1;
  padding: 2rem;
}
</style>
