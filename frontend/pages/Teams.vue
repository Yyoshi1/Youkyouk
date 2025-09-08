<template>
  <div class="teams p-6">
    <h2 class="text-2xl font-bold mb-4">Teams</h2>
    <ul class="space-y-3">
      <li v-for="team in teams" :key="team.id" class="border p-3 rounded shadow hover:shadow-md transition">
        <h4 class="font-medium">{{ team.name }}</h4>
        <span class="text-sm text-gray-500 dark:text-gray-400">Members: {{ team.members }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        { id: 1, name: 'Team A', members: 5 },
        { id: 2, name: 'Team B', members: 3 }
      ]
    }
  }
}
</script>
