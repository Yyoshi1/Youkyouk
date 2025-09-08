<template>
  <header class="header">
    <img src="../assets/logo.png" alt="Youkyouk Logo" class="logo" />
    <button @click="$emit('toggle-dark')">Toggle Dark</button>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
.logo { height: 40px; }
</style>
