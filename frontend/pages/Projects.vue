<template>
  <div class="projects-page">
    <h1>Projects</h1>
    <div class="projects-list">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'ProjectsPage',
  components: { ProjectCard },
  data() {
    return {
      projects: [
        { id: 1, name: 'Project One', description: 'Demo project 1' },
        { id: 2, name: 'Project Two', description: 'Demo project 2' }
      ]
    }
  }
}
</script>

<style scoped>
.projects-page {
  padding: 2rem;
}
.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
