<template>
  <div class="products">
    <Header :title="'Products'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="controls">
      <input type="text" v-model="search" placeholder="Search products..." />
      <button @click="openForm()">+ Add Product</button>
    </div>
    <table class="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }} $</td>
          <td>{{ product.stock }}</td>
          <td>
            <span :class="['status', product.status]">{{ product.status }}</span>
          </td>
          <td>
            <button @click="editProduct(product)">Edit</button>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ProductForm v-if="showForm" :product="currentProduct" @close="closeForm" @saved="fetchProducts"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'
import ProductForm from './ProductForm.vue'

const seller = ref({ name: 'Seller', avatar: '/avatar.png' })
const products = ref([])
const search = ref('')
const showForm = ref(false)
const currentProduct = ref(null)

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchProducts = async () => {
  try {
    const res = await axios.get('/api/seller/1/products')
    products.value = res.data
  } catch (err) { console.error(err) }
}

const filteredProducts = computed(() =>
  products.value.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
)

const openForm = () => { currentProduct.value = null; showForm.value = true }
const editProduct = (product) => { currentProduct.value = product; showForm.value = true }
const closeForm = () => { showForm.value = false }
const deleteProduct = async (id) => {
  await axios.delete(`/api/seller/1/products/${id}`)
  fetchProducts()
}

onMounted(fetchProducts)
</script>

<style scoped>
.products { padding: 20px; margin-left: 250px; }
.controls { display: flex; justify-content: space-between; margin-bottom: 20px; gap: 10px; }
.controls input { padding: 8px; border-radius: 6px; border: 1px solid #d1d5db; width: 200px; }
.controls button { padding: 8px 12px; background-color: var(--color-primary); color: white; border: none; border-radius: 6px; cursor: pointer; }
.controls button:hover { background-color: var(--color-primary-hover); }
.product-table { width: 100%; border-collapse: collapse; background-color: var(--color-card-bg); box-shadow: var(--shadow-card); border-radius: var(--border-radius); overflow: hidden; }
body.dark-mode .product-table { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
.product-table th, .product-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
.product-table th { background-color: #f3f4f6; }
.status { padding: 4px 8px; border-radius: 4px; color: white; font-size: 12px; text-transform: capitalize; }
.status.active { background-color: #22c55e; }
.status.inactive { background-color: #ef4444; }
</style>
