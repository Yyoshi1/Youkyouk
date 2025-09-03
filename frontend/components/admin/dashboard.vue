<template>
  <div class="admin-dashboard">
    <Header :title="'Dashboard'" :user="adminUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Welcome, {{ adminUser.name }}</h2>
      <div class="cards">
        <div class="card" v-for="card in stats" :key="card.id">
          <i :class="card.icon"></i>
          <div>
            <h3>{{ card.value }}</h3>
            <p>{{ card.label }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref } from 'vue'

const adminUser = { id: 1, name: 'Admin Name', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

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

const stats = [
  { id: 1, label: 'Total Orders', value: 1200, icon: 'linear-icon-basket' },
  { id: 2, label: 'Total Sales', value: '$45,000', icon: 'linear-icon-dollar' },
  { id: 3, label: 'Total Customers', value: 320, icon: 'linear-icon-people' },
  { id: 4, label: 'Total Vendors', value: 25, icon: 'linear-icon-store' },
]
</script>

<style scoped>
main { flex: 1; padding: 20px; }
.cards { display: flex; gap: 15px; flex-wrap: wrap; }
.card { flex: 1 1 200px; padding: 15px; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; gap: 10px; }
.card i { font-size: 24px; color: #2563eb; }
</style>
