<template>
  <div class="youkyouk-reviews">
    <Header :title="'Reviews'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Product Reviews</h2>
      <table class="reviews-table">
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
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const reviews = ref([])

const fetchReviews = async () => {
  const res = await axios.get('/api/seller/reviews')
  reviews.value = res.data
}

onMounted(() => fetchReviews())
</script>

<style scoped>
.youkyouk-reviews { display: flex; }
main { flex: 1; padding: 20px; }
.reviews-table { width: 100%; border-collapse: collapse; }
.reviews-table th, .reviews-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
