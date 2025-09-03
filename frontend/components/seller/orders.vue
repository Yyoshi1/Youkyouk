<template>
  <div class="seller-orders">
    <Header :title="'Orders'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Orders</h2>
      <div class="filters">
        <label>Status:</label>
        <select v-model="filter.status">
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button @click="fetchOrders"><i class="linear-icon-refresh"></i> Apply</button>
      </div>
      <table>
        <thead>
          <tr><th>ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer.name }}</td>
            <td>{{ order.total }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.date }}</td>
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

const filter = reactive({ status: '' })
const orders = ref([])

const fetchOrders = async () => {
  const res = await axios.get(`/api/seller/orders?status=${filter.status}`)
  orders.value = res.data
}

onMounted(() => fetchOrders())
</script>

<style scoped>
main { flex: 1; padding: 20px; }
.filters { margin-bottom: 15px; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
button { padding: 6px 10px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }
button i { margin-right: 5px; }
.linear-icon-refresh::before { content: "\e92b"; font-family: 'LinearIcons'; margin-right: 5px; }
</style>
