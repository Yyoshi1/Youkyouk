<template>
  <div class="youkyouk-addons">
    <h2>Plugins</h2>
    <ul>
      <li v-for="addon in addons" :key="addon.id">
        <span>{{ addon.name }}</span>
        <button @click="toggle(addon)">
          {{ addon.active ? 'Deactivate' : 'Activate' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const addons = ref([])

const fetchAddons = async () => {
  const res = await axios.get("/api/seller/addons")
  addons.value = res.data
}

const toggle = async (addon) => {
  const res = await axios.post(`/api/seller/addons/${addon.id}/toggle`)
  const index = addons.value.findIndex(a => a.id === addon.id)
  addons.value[index] = res.data
}

onMounted(() => fetchAddons())
</script>

<style scoped>
.youkyouk-addons { padding: 20px; }
.youkyouk-addons ul { list-style: none; padding: 0; }
.youkyouk-addons li { margin-bottom: 10px; display: flex; justify-content: space-between; }
.youkyouk-addons button { padding: 5px 10px; background: #2563eb; color: white; border: none; cursor: pointer; }
.youkyouk-addons button:hover { background: #1e40af; }
</style>
