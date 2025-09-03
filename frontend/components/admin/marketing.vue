<template>
  <div class="admin-marketing">
    <Header :title="'Marketing'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <div class="toolbar">
        <h2>Marketing</h2>
        <div>
          <button @click="createCampaign"><i class="linear-icon-plus"></i> New Campaign</button>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>#</th><th>Title</th><th>Type</th><th>Status</th><th>Start</th><th>End</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="c in campaigns" :key="c.id">
            <td>{{ c.id }}</td>
            <td>{{ c.title }}</td>
            <td>{{ c.type }}</td>
            <td>{{ c.status }}</td>
            <td>{{ c.start_date }}</td>
            <td>{{ c.end_date }}</td>
            <td class="actions">
              <button @click="editCampaign(c)"><i class="linear-icon-pencil"></i></button>
              <button @click="deleteCampaign(c)"><i class="linear-icon-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const adminUser = { id: 1, name: 'Admin', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => (sidebarCollapsed.value = !sidebarCollapsed.value)
const addons = ref([
  { id: 1, name: 'Dashboard', route: '/admin/dashboard', enabled: true, icon: 'linear-icon-speedometer' },
  { id: 2, name: 'Products', route: '/admin/products', enabled: true, icon: 'linear-icon-box' },
  { id: 3, name: 'Categories', route: '/admin/categories', enabled: true, icon: 'linear-icon-tag' },
  { id: 4, name: 'Orders', route: '/admin/orders', enabled: true, icon: 'linear-icon-basket' },
  { id: 5, name: 'Users', route: '/admin/users', enabled: true, icon: 'linear-icon-people' },
  { id: 6, name: 'Vendors', route: '/admin/vendors', enabled: true, icon: 'linear-icon-store' },
  { id: 7, name: 'Marketing', route: '/admin/marketing', enabled: true, icon: 'linear-icon-megaphone' },
  { id: 8, name: 'Settings', route: '/admin/settings', enabled: true, icon: 'linear-icon-cog' },
  { id: 9, name: 'Reports', route: '/admin/reports', enabled: true, icon: 'linear-icon-doc-text' },
])

const campaigns = ref([])

const fetchCampaigns = async () => {
  const { data } = await axios.get('/api/admin/marketing')
  campaigns.value = data
}

const createCampaign = () => alert('Open create campaign modal')
const editCampaign = (c) => alert(`Edit campaign #${c.id}`)
const deleteCampaign = (c) => alert(`Delete campaign #${c.id}`)

onMounted(fetchCampaigns)
</script>

<style scoped>
main { padding: 20px; }
.toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.toolbar button { padding: 8px 12px; border: none; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #e5e7eb; text-align: left; }
.actions button { margin-right: 6px; background: #111827; color: #fff; border: none; padding: 6px 8px; border-radius: 6px; cursor: pointer; }
</style>
