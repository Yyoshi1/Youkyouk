<template>
  <div class="products">
    <Header :title="'Products'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Products</h2>
      <button @click="addProduct"><i class="linear-icon-plus"></i> Add Product</button>
      <table class="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
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
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get('/api/seller/products')
  products.value = res.data
}

const addProduct = () => { alert('Add Product modal placeholder') }

onMounted(() => fetchProducts())
</script>

<style scoped>
.products { display: flex; }
main { flex: 1; padding: 20px; }
.products-table { width: 100%; border-collapse: collapse; }
.products-table th, .products-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }

/* Linear Icons */
.linear-icon-plus::before { content: "\e900"; font-family: 'LinearIcons'; margin-right: 5px; }
</style>
