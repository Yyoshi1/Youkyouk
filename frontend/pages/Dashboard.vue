<template>
  <div class="dashboard p-6">
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <div class="grid grid-cols-3 gap-4">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        { id: 1, name: 'Project Alpha', description: 'Description Alpha', teamName: 'Team A' },
        { id: 2, name: 'Project Beta', description: 'Description Beta', teamName: 'Team B' }
      ]
    }
  }
}
</script>
