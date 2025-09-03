<template>
  <div class="seller-dashboard">
    <Header :title="'Dashboard'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Welcome, {{ seller.name }}</h2>
      <div class="stats">
        <div class="card">Products: {{ stats.products }}</div>
        <div class="card">Orders: {{ stats.orders }}</div>
        <div class="card">Sales: {{ stats.sales }}</div>
        <div class="card">Customers: {{ stats.customers }}</div>
      </div>
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

const stats = reactive({ products: 0, orders: 0, sales: 0, customers: 0 })

const fetchStats = async () => {
  const res = await axios.get(`/api/seller/stats`)
  Object.assign(stats, res.data)
}

onMounted(() => fetchStats())
</script>

<style scoped>
main { flex: 1; padding: 20px; }
.stats { display: flex; gap: 15px; flex-wrap: wrap; }
.card { background: #1f2937; color: white; padding: 20px; flex: 1; min-width: 150px; border-radius: 8px; text-align: center; }
</style>
