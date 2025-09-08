<template>
  <div class="teams-page">
    <h1>Teams</h1>
    <ul>
      <li v-for="team in teams" :key="team.id">
        {{ team.name }} - Members: {{ team.members.length }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Teams',
  data() {
    return {
      teams: [
        { id: 1, name: 'Team Alpha', members: ['Alice', 'Bob'] },
        { id: 2, name: 'Team Beta', members: ['Charlie', 'David'] }
      ]
    }
  }
}
</script>

<style scoped>
.teams-page {
  padding: 1rem;
}

body.dark .teams-page {
  background-color: #1f2937;
  color: #f3f4f6;
}
</style>
