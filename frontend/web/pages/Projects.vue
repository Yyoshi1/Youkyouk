<template>
  <div class="page">
    <h2>Projects</h2>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 1, name: "Project Alpha" },
        { id: 2, name: "Project Beta" }
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

.project-list {
  list-style: none;
  padding: 0;
}

.project-list li {
  background-color: var(--dropdown-bg);
  padding: 12px;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
