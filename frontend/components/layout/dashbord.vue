<template>
  <AdminLayout>
    <template #default>
      <div class="dashboard">
        <h1>Dashboard</h1>
        <div class="stats">
          <div class="card">Users: {{ usersCount }}</div>
          <div class="card">Products: {{ productsCount }}</div>
          <div class="card">Orders: {{ ordersCount }}</div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const usersCount = ref(0)
const productsCount = ref(0)
const ordersCount = ref(0)

onMounted(async () => {
  const users = await axios.get('/api/users')
  usersCount.value = users.data.length
  const products = await axios.get('/api/products')
  productsCount.value = products.data.length
  const orders = await axios.get('/api/orders')
  ordersCount.value = orders.data.length
})
</script>

<style scoped>
.dashboard {
  padding: 1rem;
}
.stats {
  display: flex;
  gap: 1rem;
}
.card {
  flex: 1;
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}
.dark .card {
  background: #1f2937;
  color: white;
}
</style>
