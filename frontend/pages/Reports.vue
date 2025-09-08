<template>
  <div class="reports-page">
    <h1>Reports</h1>
    <div class="charts">
      <div class="chart" v-for="chart in charts" :key="chart.id">
        <h4>{{ chart.title }}</h4>
        <p>Chart placeholder</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
  data() {
    return {
      charts: [
        { id: 1, title: 'Project Progress' },
        { id: 2, title: 'Team Performance' },
        { id: 3, title: 'Tasks Overview' }
      ]
    }
  }
}
</script>

<style scoped>
.reports-page {
  padding: 1rem;
}

.charts {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.chart {
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

body.dark .chart {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
