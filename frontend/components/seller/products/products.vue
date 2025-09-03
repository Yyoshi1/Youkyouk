<template>
  <div class="products">
    <Header :title="'Products'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="controls">
      <button @click="showAddProduct = true">Add Product</button>
    </div>
    <table class="product-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.active ? 'Active' : 'Inactive' }}</td>
          <td>
            <button @click="editProduct(product)">Edit</button>
            <button @click="toggleStatus(product)">{{ product.active ? 'Disable' : 'Enable' }}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal v-if="showAddProduct || editingProduct" 
                  :product="editingProduct" 
                  @close="closeModal" 
                  @saved="fetchProducts"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'
import ProductModal from './ProductModal.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const products = ref([])
const showAddProduct = ref(false)
const editingProduct = ref(null)
const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchProducts = async () => {
  try {
    const res = await axios.get('/api/seller/1/products')
    products.value = res.data
  } catch(err){ console.error(err) }
}

const editProduct = (product) => { editingProduct.value = {...product}; showAddProduct.value = true }
const toggleStatus = async (product) => {
  product.active = !product.active
  await axios.put(`/api/products/${product.id}`, { active: product.active })
}

const closeModal = () => { showAddProduct.value = false; editingProduct.value = null }

onMounted(fetchProducts)
</script>

<style scoped>
.products { padding:20px; margin-left:250px; }
.controls { margin-bottom:10px; }
button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; margin-right:6px; }
button:hover { opacity:0.9; }
.product-table { width:100%; border-collapse:collapse; background-color: var(--color-card-bg); box-shadow: var(--shadow-card); border-radius: var(--border-radius); }
body.dark-mode .product-table { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
th, td { padding:12px; text-align:left; border-bottom:1px solid #e5e7eb; }
th { background-color:#f3f4f6; }
</style>
