<template>
  <div class="addon-gtm">
    <h2>Google Tag Manager Settings</h2>
    <input v-model="settings.containerId" placeholder="GTM Container ID"/>
    <button @click="saveSettings">Save</button>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue"
import axios from "axios"

const settings = reactive({ containerId: "" })

const fetchSettings = async () => {
  const res = await axios.get("/api/addons/gtm")
  if(res.data[0]) Object.assign(settings, res.data[0])
}

const saveSettings = async () => {
  await axios.post("/api/addons/gtm/update", settings)
  alert("Settings saved!")
}

onMounted(() => fetchSettings())
</script>

<style scoped>
.addon-gtm { padding: 20px; border: 1px solid #ccc; border-radius: 6px; }
.addon-gtm input { padding: 8px; width: 200px; margin-right: 10px; }
</style>
