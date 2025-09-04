<template>
  <div class="youkyouk-seller-products">
    <Header :title="'Products'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Products</h2>
      <table class="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.status }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/layout/Header.vue'
import Sidebar from '../../components/layout/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Youkyouk Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get(`/api/seller/1/products`)
  products.value = res.data
}

onMounted(() => fetchProducts())
</script>

<style scoped>
.youkyouk-seller-products { display: flex; }
main { flex: 1; padding: 20px; }
.products-table { width: 100%; border-collapse: collapse; }
.products-table th, .products-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
