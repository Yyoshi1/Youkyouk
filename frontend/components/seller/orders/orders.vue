<template>
  <div class="orders">
    <Header :title="'Orders'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
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

    <table class="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer.name }}</td>
          <td>{{ order.items.length }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button @click="viewOrder(order)">View</button>
            <button @click="updateStatus(order)">Update Status</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const orders = ref([])
const filter = reactive({ status:'' })

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchOrders = async () => {
  try {
    const res = await axios.get('/api/seller/1/orders', { params: filter })
    orders.value = res.data
  } catch(err){ console.error(err) }
}

const viewOrder = (order) => { alert(JSON.stringify(order,null,2)) }
const updateStatus = async (order) => {
  const status = prompt('Enter new status', order.status)
  if(status){ 
    order.status = status
    await axios.put(`/api/orders/${order.id}`, { status }) 
  }
}

onMounted(fetchOrders)
</script>

<style scoped>
.orders { padding:20px; margin-left:250px; }
.filters { display:flex; gap:10px; align-items:center; margin-bottom:20px; }
.filters select { padding:6px; border-radius:4px; border:1px solid #d1d5db; }
.filters button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; }
.filters button:hover { opacity:0.9; }
.orders-table { width:100%; border-collapse:collapse; background-color: var(--color-card-bg); box-shadow: var(--shadow-card); border-radius: var(--border-radius); }
.orders-table th, .orders-table td { padding:12px; text-align:left; border-bottom:1px solid #e5e7eb; }
.orders-table th { background-color:#f3f4f6; }
body.dark-mode .orders-table { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); color:white; }
button { margin-right:6px; padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; }
button:hover { opacity:0.9; }
</style>
