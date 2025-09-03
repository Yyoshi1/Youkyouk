<template>
  <Layout :admin="admin" :addons="addons">
    <h2>Dashboard</h2>
    <div class="stats">
      <div class="card">
        <h3>Orders</h3>
        <p>{{ stats.orders }}</p>
      </div>
      <div class="card">
        <h3>Products</h3>
        <p>{{ stats.products }}</p>
      </div>
      <div class="card">
        <h3>Users</h3>
        <p>{{ stats.users }}</p>
      </div>
      <div class="card">
        <h3>Vendors</h3>
        <p>{{ stats.vendors }}</p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { reactive, onMounted } from 'vue'
import axios from 'axios'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const addons = reactive([
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

const stats = reactive({ orders: 0, products: 0, users: 0, vendors: 0 })

const fetchStats = async () => {
  const res = await axios.get('/api/admin/stats')
  Object.assign(stats, res.data)
}

onMounted(() => fetchStats())
</script>

<style scoped>
.stats { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; }
.card { flex: 1; padding: 20px; background: #f9fafb; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; }
</style>
