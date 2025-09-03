<template>
  <div class="seller-products">
    <Header :title="'Products'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Products</h2>
      <button @click="addProduct"><i class="linear-icon-plus"></i> Add Product</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Price</th><th>Stock</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.status }}</td>
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

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get(`/api/seller/products`)
  products.value = res.data
}

const addProduct = () => {
  alert('Open add product modal')
}

onMounted(() => fetchProducts())
</script>

<style scoped>
main { flex: 1; padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
button { margin-bottom: 10px; padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }
button i { margin-right: 5px; }
</style>
