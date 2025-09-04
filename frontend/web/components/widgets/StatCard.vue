<template>
  <div class="stat-card">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    title: String,
    value: [String, Number]
  }
};
</script>

<style scoped>
.stat-card {
  background-color: var(--dropdown-bg);
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
}
</style>
