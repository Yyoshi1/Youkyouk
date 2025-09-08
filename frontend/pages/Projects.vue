<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="project-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
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
.projects {
  padding: 1rem;
}
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
