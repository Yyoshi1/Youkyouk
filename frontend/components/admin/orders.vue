<template>
  <Layout :admin="admin" :addons="addons">
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
        <tr>
          <th>ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th>
        </tr>
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
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const addons = ref([
  { id: 1, name: 'Dashboard', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Categories', enabled: true },
  { id: 4, name: 'Orders', enabled: true },
  { id: 5, name: 'Users', enabled: true },
  { id: 6, name: 'Vendors', enabled: true },
  { id: 7, name: 'Marketing', enabled: true },
  { id: 8, name: 'Reports', enabled: true },
  { id: 9, name: 'Settings', enabled: true },
])

const filter = reactive({ status: '' })
const orders = ref([])

const fetchOrders = async () => {
  const res = await axios.get(`/api/admin/orders?status=${filter.status}`)
  orders.value = res.data
}

onMounted(() => fetchOrders())
</script>

<style scoped>
.filters { margin-bottom: 15px; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 10px; }
.linear-icon-refresh::before { content: "\e92b"; font-family: 'LinearIcons'; margin-right: 5px; }
button { margin-left: 5px; }
</style>
