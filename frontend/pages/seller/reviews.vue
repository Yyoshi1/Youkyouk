<template>
  <SellerLayout>
    <template #default>
      <h1>Reviews</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in reviews" :key="r.id">
            <td>{{ r.product_name }}</td>
            <td>{{ r.customer_name }}</td>
            <td>{{ r.rating }}</td>
            <td>{{ r.comment }}</td>
            <td>
              <button @click="approveReview(r.id)">Approve</button>
              <button @click="rejectReview(r.id)">Reject</button>
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

const reviews = ref([])

const fetchReviews = async () => {
  const res = await axios.get('/api/seller/reviews')
  reviews.value = res.data
}

const approveReview = async (id) => {
  await axios.post(`/api/seller/reviews/${id}/approve`)
  fetchReviews()
}

const rejectReview = async (id) => {
  await axios.post(`/api/seller/reviews/${id}/reject`)
  fetchReviews()
}

onMounted(fetchReviews)
</script>

<style scoped>
table { width:100%; border-collapse: collapse; margin-top:1rem; }
th, td { border:1px solid #ddd; padding:0.5rem; text-align:left; }
button { margin-right:0.5rem; }
</style>
