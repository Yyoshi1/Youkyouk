<template>
  <div class="orders">
    <Header :title="'Orders'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="controls">
      <input type="text" v-model="search" placeholder="Search orders..." />
      <select v-model="filterStatus">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
    <table class="order-table">
      <thead>
        <tr>
          <th>Order #</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredOrders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer.name }}</td>
          <td>{{ order.total }} $</td>
          <td><span :class="['status', order.status]">{{ order.status }}</span></td>
          <td>
            <button @click="viewOrder(order)">View</button>
          </td>
        </tr>
      </tbody>
    </table>

    <OrderDetail v-if="showDetail" :order="currentOrder" @close="closeDetail"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'
import OrderDetail from './OrderDetail.vue'

const seller = ref({ name: 'Seller', avatar: '/avatar.png' })
const orders = ref([])
const search = ref('')
const filterStatus = ref('')
const showDetail = ref(false)
const currentOrder = ref(null)

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchOrders = async () => {
  try {
    const res = await axios.get('/api/seller/1/orders')
    orders.value = res.data
  } catch (err) { console.error(err) }
}

const filteredOrders = computed(() => 
  orders.value
    .filter(o => o.id.toString().includes(search.value) || o.customer.name.toLowerCase().includes(search.value.toLowerCase()))
    .filter(o => !filterStatus.value || o.status === filterStatus.value)
)

const viewOrder = (order) => { currentOrder.value = order; showDetail.value = true }
const closeDetail = () => { showDetail.value = false }

onMounted(fetchOrders)
</script>

<style scoped>
.orders { padding: 20px; margin-left: 250px; }
.controls { display: flex; justify-content: space-between; margin-bottom: 20px; gap: 10px; }
.controls input, .controls select { padding: 8px; border-radius: 6px; border: 1px solid #d1d5db; }
.order-table { width: 100
