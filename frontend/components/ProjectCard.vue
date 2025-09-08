<template>
  <div class="project-card">
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <span>Team: {{ project.teamName }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: { project: Object }
}
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  width: 250px;
  transition: all 0.2s ease-in-out;
}

body.dark .project-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
