<template>
  <div class="addon-livesearch">
    <h2>Live Search</h2>
    <input v-model="settings.enabled" type="checkbox"/> Enabled
    <button @click="save">Save</button>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue"
import axios from "axios"
const settings = reactive({ enabled: false })
const fetch = async()=>{ const res=await axios.get("/api/addons/livesearch"); Object.assign(settings,res.data[0]||{}) }
const save=async()=>{ await axios.post("/api/addons/livesearch/update",settings); alert("Saved!") }
onMounted(()=>fetch())
</script>
<style scoped>
.addon-livesearch{padding:20px;border:1px solid #ccc;border-radius:6px}
</style>
