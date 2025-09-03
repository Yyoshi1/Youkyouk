<template>
  <div class="admin-orders">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Orders</h1>
      <div class="filters">
        <label>Status:</label>
        <select v-model="filter.status">
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button @click="fetchOrders">Apply</button>
      </div>
      <table>
        <thead>
          <tr><th>ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>${{ order.total }}</td>
            <td>{{ order.status }}</td>
            <td>
              <button @click="viewOrder(order)">View</button>
              <button @click="updateStatus(order)">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import Footer from '../layout/Footer.vue'
import { ref } from 'vue'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const filter = ref({ status: '' })
const orders = ref([
  { id: 1, customer: 'John Doe', total: 250, status: 'pending' },
  { id: 2, customer: 'Jane Smith', total: 450, status: 'shipped' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const fetchOrders = () => console.log('Fetch orders', filter.value)
const viewOrder = (o) => console.log('View order', o)
const updateStatus = (o) => console.log('Update status', o)
</script>

<style scoped>
main { padding: 20px; }
.filters { margin-bottom: 15px; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #ddd; }
button { margin-right: 5px; padding: 5px 10px; }
</style>
