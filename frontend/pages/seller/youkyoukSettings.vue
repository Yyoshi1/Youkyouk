<template>
  <div class="youkyouk-seller-settings">
    <Header :title="'Settings'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Settings</h2>
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label>Store Name</label>
          <input v-model="settings.storeName" type="text"/>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="settings.email" type="email"/>
        </div>
        <div class="form-group">
          <label>Status</label>
          <select v-model="settings.status">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit"><i class="youkyouk-icon-save"></i> Save</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/layout/Header.vue'
import Sidebar from '../../components/layout/Sidebar.vue'
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Youkyouk Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const settings = reactive({ storeName: '', email: '', status: 'active' })

const fetchSettings = async () => {
  const res = await axios.get(`/api/seller/1/settings`)
  Object.assign(settings, res.data)
}

const saveSettings = async () => {
  await axios.put(`/api/seller/1/settings`, settings)
  alert('Settings saved!')
}

onMounted(() => fetchSettings())
</script>

<style scoped>
.youkyouk-seller-settings { display: flex; }
main { flex: 1; padding: 20px; }
.form-group { margin-bottom: 15px; }
input, select { width: 100%; padding: 8px; margin-top: 5px; }
button { cursor: pointer; padding: 8px 15px; }

/* Youkyouk Icons */
.youkyouk-icon-save::before { content: "\e904"; font-family: 'YoukyoukIcons'; margin-right: 5px; }
</style>
