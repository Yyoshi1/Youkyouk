<template>
  <div class="youkyouk-products">
    <Header :title="'Products'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Products</h2>
      <div class="filters">
        <input v-model="filter.name" placeholder="Search product..." />
        <button @click="fetchProducts"><i class="youkyouk-icon-search"></i> Search</button>
        <button @click="createProduct"><i class="youkyouk-icon-plus"></i> Add Product</button>
      </div>
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
              <button @click="editProduct(product)"><i class="youkyouk-icon-edit"></i></button>
              <button @click="deleteProduct(product.id)"><i class="youkyouk-icon-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const filter = reactive({ name: '' })
const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get(`/api/seller/products?name=${filter.name}`)
  products.value = res.data
}

const createProduct = () => { /* */ }
const editProduct = (product) => { /* */ }
const deleteProduct = (id) => { /* */ }

onMounted(() => fetchProducts())
</script>

<style scoped>
.youkyouk-products { display: flex; }
main { flex: 1; padding: 20px; }
.filters { margin-bottom: 15px; display: flex; gap: 10px; align-items: center; }
.products-table { width: 100%; border-collapse: collapse; }
.products-table th, .products-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
.youkyouk-icon-plus::before { content: "\e900"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-edit::before { content: "\e901"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-trash::before { content: "\e902"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-search::before { content: "\e903"; font-family: 'YoukyoukIcons'; }
</style>
