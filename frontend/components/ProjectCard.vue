<template>
  <div class="project-card" :class="{ dark: isDark }">
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <span>{{ $t('teams') }}: {{ project.teamName }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
    isDark: Boolean
  }
}
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
}
.project-card.dark {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
