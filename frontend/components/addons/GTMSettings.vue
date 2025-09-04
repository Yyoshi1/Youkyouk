<template>
  <div class="addon-gtm">
    <h2>Google Tag Manager</h2>
    <input v-model="settings.containerId" placeholder="GTM Container ID"/>
    <button @click="save">Save</button>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue"
import axios from "axios"
const settings = reactive({ containerId: "" })
const fetch = async()=>{ const res=await axios.get("/api/addons/gtm"); Object.assign(settings,res.data[0]||{}) }
const save=async()=>{ await axios.post("/api/addons/gtm/update",settings); alert("Saved!") }
onMounted(()=>fetch())
</script>
<style scoped>
.addon-gtm{padding:20px;border:1px solid #ccc;border-radius:6px}
.addon-gtm input{padding:8px;width:200px;margin-right:10px}
</style>
