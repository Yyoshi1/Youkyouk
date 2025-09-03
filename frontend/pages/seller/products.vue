<template>
  <SellerLayout>
    <template #default>
      <h1>Products</h1>
      <button @click="addProduct">Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.name }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.stock }}</td>
            <td>
              <button @click="editProduct(p)">Edit</button>
              <button @click="deleteProduct(p.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get('/api/seller/products')
  products.value = res.data
}

const addProduct = () => { /* Open the Add Product window */ }
const editProduct = (p) => { /* Open the product modification window */ }
const deleteProduct = async (id) => {
  await axios.delete(`/api/seller/products/${id}`)
  fetchProducts()
}

onMounted(fetchProducts)
</script>

<style scoped>
table { width:100%; border-collapse: collapse; margin-top:1rem; }
th, td { border:1px solid #ddd; padding:0.5rem; text-align:left; }
button { margin-right:0.5rem; }
</style>
