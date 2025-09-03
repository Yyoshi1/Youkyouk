<template>
  <div class="admin-orders">
    <Header :title="'Orders'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <div class="toolbar">
        <h2>Orders</h2>
        <div class="filters">
          <label>Status:</label>
          <select v-model="filter.status">
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button @click="fetchOrders"><i class="linear-icon-refresh"></i> Apply</button>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>#</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr>
        </thead>
        <tbody>
          <tr v-for="o in orders" :key="o.id">
            <td>{{ o.id }}</td>
            <td>{{ o.customer?.name || '-' }}</td>
            <td>{{ o.total }}</td>
            <td>{{ o.status }}</td>
            <td>{{ o.date }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, reactive, onMounted } from 'vue'
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

const filter = reactive({ status: '' })
const orders = ref([])

const fetchOrders = async () => {
  const { data } = await axios.get('/api/admin/orders', { params: { status: filter.status } })
  orders.value = data
}

onMounted(fetchOrders)
</script>

<style scoped>
main { padding: 20px; }
.toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.filters { display: flex; align-items: center; gap: 8px; }
.filters select { padding: 6px; border-radius: 6px; border: 1px solid #ccc; }
.filters button { padding: 8px 12px; border: none; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #e5e7eb; text-align: left; }
</style>
