<template>
  <Layout :seller="seller" :addons="addons">
    <h2>Orders</h2>
    <div class="filters">
      <label>Status:</label>
      <select v-model="filter.status">
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
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
          <td>${{ order.total }}</td>
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

const seller = { name: 'Seller User', avatar: '/avatars/seller.png' }
const addons = ref([
  { id: 1, name: 'Orders', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Promotions', enabled: false },
  { id: 4, name: 'Messages', enabled: true },
  { id: 5, name: 'Settings', enabled: true },
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
.filters { margin-bottom: 15px; display: flex; gap: 10px; align-items: center; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #ccc; text-align: left; }
.linear-icon-refresh::before { content: "\e92b"; font-family: 'LinearIcons'; margin-right: 5px; }
button { display: flex; align-items: center; gap: 5px; padding: 5px 10px; }
</style>
