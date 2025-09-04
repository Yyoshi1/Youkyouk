<template>
  <div class="youkyouk-seller-dashboard">
    <Header :title="'Youkyouk Products'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Products</h2>
      <button @click="openAddProduct"><i class="youkyouk-icon-plus"></i> Add Product</button>

      <table class="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button @click="editProduct(product.id)"><i class="youkyouk-icon-pencil"></i></button>
              <button @click="deleteProduct(product.id)"><i class="youkyouk-icon-trash"></i></button>
            </td>
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

const openAddProduct = () => { /* logic */ }
const editProduct = (id) => { /* logic */ }
const deleteProduct = (id) => { /* logic */ }

onMounted(() => fetchProducts())
</script>

<style scoped>
.youkyouk-seller-dashboard { display: flex; }
main { flex: 1; padding: 20px; }
.products-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
.products-table th, .products-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
button { cursor: pointer; }

.youkyouk-icon-plus::before { content: "\e900"; font-family: 'YoukyoukIcons'; margin-right: 5px; }
.youkyouk-icon-pencil::before { content: "\e901"; font-family: 'YoukyoukIcons'; margin-right: 5px; }
.youkyouk-icon-trash::before { content: "\e902"; font-family: 'YoukyoukIcons'; margin-right: 5px; }
</style>
