<template>
  <div class="settings">
    <Header :title="'Settings'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
    <h2>Store Settings</h2>
    <div class="field">
      <label>Store Name:</label>
      <input v-model="settings.name" />
    </div>
    <div class="field">
      <label>Email:</label>
      <input v-model="settings.email" />
    </div>

    <h3>Activated Plugins</h3>
    <ul>
      <li v-for="plugin in plugins" :key="plugin.id">
        <input type="checkbox" v-model="plugin.active" @change="togglePlugin(plugin)"/>
        {{ plugin.name }}
      </li>
    </ul>

    <button @click="saveSettings">Save</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const settings = ref({ name:'My Store', email:'store@example.com' })
const plugins = ref([])
const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchSettings = async () => {
  try {
    const res = await axios.get('/api/seller/1/settings')
    settings.value = res.data.settings
    plugins.value = res.data.plugins
  } catch(err){ console.error(err) }
}

const togglePlugin = async (plugin) => {
  plugin.active = !plugin.active
  await axios.put(`/api/plugins/${plugin.id}`, { active: plugin.active })
}

const saveSettings = async () => {
  await axios.put(`/api/seller/1/settings`, settings.value)
  alert('Settings saved!')
}

onMounted(fetchSettings)
</script>

<style scoped>
.settings { padding:20px; margin-left:250px; }
.field { margin-bottom:10px; }
input { padding:6px; border-radius:4px; border:1px solid #d1d5db; width:300px; }
button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; margin-top:10px; }
button:hover { opacity:0.9; }
body.dark-mode input { background:#374151; color:white; border:1px solid #6b7280; }
</style>
