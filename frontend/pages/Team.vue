<template>
  <div class="teams">
    <h1>Teams</h1>
    <ul>
      <li v-for="team in teams" :key="team.id">{{ team.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Teams',
  data() {
    return {
      teams: [
        { id: 1, name: 'Team Alpha' },
        { id: 2, name: 'Team Beta' }
      ]
    }
  }
}
</script>

<style scoped>
.teams {
  padding: 1rem;
}
</style>
