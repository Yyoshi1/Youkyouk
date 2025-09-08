<template>
  <div class="team-card">
    <h3>{{ team.name }}</h3>
    <p>Projects: {{ team.projects.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    team: Object
  }
}
</script>

<style scoped>
.team-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}

body.dark .team-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
