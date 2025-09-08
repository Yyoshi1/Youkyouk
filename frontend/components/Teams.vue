<template>
  <div class="teams p-4 space-y-6">
    <h2 class="text-xl font-bold">Teams</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="team in teams" :key="team.id" class="team-card p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
        <h3 class="font-semibold">{{ team.name }}</h3>
        <p class="text-gray-600 dark:text-gray-300">Members: {{ team.members.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teams = ref([
  { id: 1, name: 'Team A', members: ['Alice', 'Bob'] },
  { id: 2, name: 'Team B', members: ['Charlie', 'Dave'] },
  { id: 3, name: 'Team C', members: ['Eve', 'Frank'] }
])
</script>

<style scoped>
.team-card {
  transition: all 0.2s ease-in-out;
}
</style>
