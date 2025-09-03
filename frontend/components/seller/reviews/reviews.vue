<template>
  <div class="reviews-page">
    <Header :title="'Reviews'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Rating</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="review in reviews" :key="review.id">
          <td>{{ review.id }}</td>
          <td>{{ review.product.name }}</td>
          <td>{{ review.customer.name }}</td>
          <td>{{ review.rating }}</td>
          <td>{{ review.comment }}</td>
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
const reviews = ref([])

const fetchReviews = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/reviews`)
  reviews.value = res.data
}

onMounted(fetchReviews)
</script>

<style scoped>
.reviews-page table { width: 100%; border-collapse: collapse; }
.reviews-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
