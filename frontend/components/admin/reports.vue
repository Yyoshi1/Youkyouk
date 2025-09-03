<template>
  <div class="admin-reports">
    <Header :title="'Reports'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <h2>Reports</h2>
      <table>
        <thead>
          <tr><th>#</th><th>Title</th><th>Date</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="r in reports" :key="r.id">
            <td>{{ r.id }}</td>
            <td>{{ r.title }}</td>
            <td>{{ r.date }}</td>
            <td>{{ r.status }}</td>
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

const reports = ref([])

const fetchReports = async () => {
  const { data } = await axios.get('/api/admin/reports')
  reports.value = data
}

onMounted(fetchReports)
</script>

<style scoped>
main { padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #e5e7eb; padding: 10px; text-align: left; }
</style>
