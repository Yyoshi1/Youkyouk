<template>
  <div class="youkyouk-orders">
    <YoukyoukHeader :user="adminUser" @toggle-sidebar="toggleSidebar"/>
    <YoukyoukSidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
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
        <button @click="fetchOrders"><i class="youkyouk-icon-refresh"></i> Apply</button>
      </div>

      <table class="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
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
    </main>
  </div>
</template>

<script setup>
import YoukyoukHeader from '../components/layout/YoukyoukHeader.vue'
import YoukyoukSidebar from '../components/layout/YoukyoukSidebar.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const adminUser = { id: 1, name: 'Admin' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const filter = reactive({ status: '' })
const orders = ref([])

const fetchOrders = async () => {
  const res = await axios.get(`/api/youkyouk/admin/orders?status=${filter.status}`)
  orders.value = res.data
}

onMounted(() => fetchOrders())
</script>

<style scoped>
.youkyouk-orders { display: flex; }
main { flex: 1; padding: 20px; }
.filters { margin-bottom: 15px; }
.orders-table { width: 100%; border-collapse: collapse; }
.orders-table th, .orders-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
.youkyouk-icon-refresh::before { content: "\e902"; font-family: 'YoukyoukIcons'; margin-right: 5px; }
</style>
