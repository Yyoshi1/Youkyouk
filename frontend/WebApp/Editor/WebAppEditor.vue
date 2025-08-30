<template>
  <div class="webapp-editor">
    <h2>WebApp Editor</h2>
    <textarea v-model="templateContent" rows="20" cols="80"></textarea>
    <button @click="saveTemplate">Save</button>
  </div>
</template>

<script>
export default {
  name: 'WebAppEditor',
  data() {
    return { templateContent: '' }
  },
  mounted() {
    fetch('/api/templates/current')
      .then(res => res.json())
      .then(data => (this.templateContent = data.content))
  },
  methods: {
    saveTemplate() {
      fetch('/api/templates/current', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: this.templateContent }),
      })
      alert('Template saved and synced!')
    },
  },
}
</script>

<style scoped>
.webapp-editor {
  padding: 20px;
}
textarea {
  width: 100%;
  font-family: monospace;
  margin-bottom: 10px;
}
button {
  padding: 8px 15px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
