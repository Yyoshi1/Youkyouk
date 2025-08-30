<template>
  <div class="logs-viewer">
    <h2>System Logs</h2>
    <pre>{{ logs }}</pre>
  </div>
</template>

<script>
export default {
  name: 'LogsViewer',
  data() {
    return { logs: '' }
  },
  mounted() {
    fetch('/api/logs')
      .then(res => res.text())
      .then(data => (this.logs = data))
  },
}
</script>

<style scoped>
.logs-viewer {
  padding: 20px;
  background: #f9f9f9;
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
