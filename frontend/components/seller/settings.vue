<template>
  <div class="seller-settings">
    <Header :title="'Settings'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Settings</h2>
      <form @submit.prevent="saveSettings">
        <label>Name:</label>
        <input v-model="settings.name" type="text"/>
        
        <label>Email:</label>
        <input v-model="settings.email" type="email"/>
        
        <label>Phone:</label>
        <input v-model="settings.phone" type="text"/>
        
        <label>Status:</label>
        <select v-model="settings.status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        
        <button type="submit"><i class="linear-icon-save"></i> Save</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const seller = { id: 1, name: 'Seller Name', avatar: '/avatars/seller.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const addons = ref([
  { id: 1, name: 'Dashboard', route: '/seller/dashboard', enabled: true, icon: 'linear-icon-speedometer' },
  { id: 2, name: 'Products', route: '/seller/products', enabled: true, icon: 'linear-icon-box' },
  { id: 3, name: 'Orders', route: '/seller/orders', enabled: true, icon: 'linear-icon-basket' },
  { id: 4, name: 'Promotions', route: '/seller/promotions', enabled: true, icon: 'linear-icon-tag' },
  { id: 5, name: 'Notifications', route: '/seller/notifications', enabled: true, icon: 'linear-icon-bell' },
  { id: 6, name: 'Messages', route: '/seller/messages', enabled: true, icon: 'linear-icon-envelope' },
  { id: 7, name: 'Settings', route: '/seller/settings', enabled: true, icon: 'linear-icon-cog' },
])

const settings = reactive({ name: '', email: '', phone: '', status: 'active' })

const fetchSettings = async () => {
  const res = await axios.get(`/api/seller/settings`)
  Object.assign(settings, res.data)
}

const saveSettings = async () => {
  await axios.put(`/api/seller/settings`, settings)
  alert('Settings saved')
}

onMounted(() => fetchSettings())
</script>

<style scoped>
main { flex: 1; padding: 20px; max-width: 500px; }
form { display: flex; flex-direction: column; }
label { margin-top: 10px; font-weight: bold; }
input, select { padding: 8px; margin-top: 5px; border-radius: 4px; border: 1px solid #ccc; }
button { margin-top: 15px; padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }
button i { margin-right: 5px; }
</style>
