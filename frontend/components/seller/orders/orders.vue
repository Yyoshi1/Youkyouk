<template>
  <div class="orders-page">
    <Header :title="'Orders'" :user="seller" @toggle-sidebar="toggleSidebar" />

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
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer.name }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../layout/Header.vue'
import { useSellerStore } from '@/stores/seller'
import axios from 'axios'

const sellerStore = useSellerStore()
const seller = sellerStore.seller
const orders = ref([])
const filter = ref({ status: '' })

const fetchOrders = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/orders`, { params: filter.value })
  orders.value = res.data
}

onMounted(fetchOrders)
</script>

<style scoped>
.orders-page table { width: 100%; border-collapse: collapse; }
.orders-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
.filters { margin: 10px 0; }
</style>
