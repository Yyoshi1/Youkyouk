<template>
  <div class="settings">
    <Header :title="'Settings'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="tabs">
      <button :class="{active: activeTab==='profile'}" @click="activeTab='profile'">Profile</button>
      <button :class="{active: activeTab==='store'}" @click="activeTab='store'">Store</button>
      <button :class="{active: activeTab==='addons'}" @click="activeTab='addons'">Add-ons</button>
    </div>

    <div v-if="activeTab==='profile'" class="tab-content">
      <label>Name</label>
      <input v-model="settings.profile.name" type="text"/>
      <label>Email</label>
      <input v-model="settings.profile.email" type="email"/>
      <button @click="saveProfile">Save</button>
    </div>

    <div v-if="activeTab==='store'" class="tab-content">
      <label>Store Name</label>
      <input v-model="settings.store.name" type="text"/>
      <label>Logo URL</label>
      <input v-model="settings.store.logo" type="text"/>
      <label>Privacy Policy</label>
      <textarea v-model="settings.store.privacy"></textarea>
      <button @click="saveStore">Save</button>
    </div>

    <div v-if="activeTab==='addons'" class="tab-content">
      <div v-for="addon in settings.addons" :key="addon.id" class="addon-item">
        <span>{{ addon.name }}</span>
        <input type="checkbox" v-model="addon.active" @change="toggleAddon(addon)"/> Active
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name: 'Seller', avatar: '/avatar.png' })
const activeTab = ref('profile')

const settings = reactive({
  profile: { name:'', email:'' },
  store: { name:'', logo:'', privacy:'' },
  addons: []
})

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchSettings = async () => {
  try {
    const res = await axios.get('/api/seller/1/settings')
    Object.assign(settings, res.data)
  } catch (err) { console.error(err) }
}

const saveProfile = async () => { await axios.put('/api/seller/1/settings/profile', settings.profile) }
const saveStore = async () => { await axios.put('/api/seller/1/settings/store', settings.store) }
const toggleAddon = async (addon) => { await axios.put(`/api/seller/1/settings/addons/${addon.id}`, { active: addon.active }) }

onMounted(fetchSettings)
</script>

<style scoped>
.settings { padding:20px; margin-left:250px; }
.tabs { display:flex; gap:10px; margin-bottom:20px; }
.tabs button { padding:8px 12px; border:none; border-radius:6px; cursor:pointer; background-color:#e5e7eb; }
.tabs button.active { background-color:#3b82f6; color:white; }
.tab-content { display:flex; flex-direction:column; gap:12px; }
.tab-content input, .tab-content textarea { padding:8px; border-radius:4px; border:1px solid #d1d5db; width:300px; }
button { padding:8px 12px; border
