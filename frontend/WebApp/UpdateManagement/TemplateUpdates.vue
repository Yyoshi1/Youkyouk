<template>
  <div class="template-updates">
    <h2>Template Updates</h2>
    <ul>
      <li v-for="template in templates" :key="template.id">
        {{ template.name }} - v{{ template.version }}
        <button @click="activate(template)">Activate</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TemplateUpdates',
  data() {
    return { templates: [] }
  },
  mounted() {
    fetch('/api/templates')
      .then(res => res.json())
      .then(data => (this.templates = data))
  },
  methods: {
    activate(template) {
      fetch(`/api/templates/${template.id}/activate`, { method: 'POST' })
      alert('Template activated')
    },
  },
}
</script>

<style scoped>
.template-updates {
  padding: 20px;
}
button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #10B981;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
