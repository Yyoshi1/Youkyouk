<template>
  <div class="youkyouk-settings">
    <Header :title="'Settings'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Settings</h2>
      <form @submit.prevent="saveSettings">
        <label>Store Name:</label>
        <input v-model="settings.store_name" />
        <label>Email:</label>
        <input v-model="settings.email" type="email" />
        <label>Phone:</label>
        <input v-model="settings.phone" />
        <button type="submit"><i class="youkyouk-icon-save"></i> Save</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const settings = reactive({ store_name: '', email: '', phone: '' })

const fetchSettings = async () => {
  const res = await axios.get('/api/seller/settings')
  Object.assign(settings, res.data)
}

const saveSettings = async () => {
  await axios.put('/api/seller/settings', settings)
  alert('Settings saved')
}

onMounted(() => fetchSettings())
</script>

<style scoped>
.youkyouk-settings { display: flex; }
main { flex: 1; padding: 20px; }
form { display: flex; flex-direction: column; gap: 10px; width: 300px; }
</style>
