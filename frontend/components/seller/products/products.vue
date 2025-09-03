<template>
  <div class="products-page">
    <Header :title="'Products'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <button @click="fetchProducts">Refresh</button>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../layout/Header.vue'
import { useSellerStore } from '@/stores/seller'
import axios from 'axios'

const sellerStore = useSellerStore()
const seller = sellerStore.seller
const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/products`)
  products.value = res.data
}

onMounted(fetchProducts)
</script>

<style scoped>
.products-page table { width: 100%; border-collapse: collapse; }
.products-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
