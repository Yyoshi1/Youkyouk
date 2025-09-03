<template>
  <div class="admin-reviews">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Reviews</h1>
      <table>
        <thead>
          <tr><th>ID</th><th>Product</th><th>Customer</th><th>Rating</th><th>Comment</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="review in reviews" :key="review.id">
            <td>{{ review.id }}</td>
            <td>{{ review.product }}</td>
            <td>{{ review.customer }}</td>
            <td>{{ review.rating }}</td>
            <td>{{ review.comment }}</td>
            <td>
              <button @click="editReview(review)">Edit</button>
              <button @click="deleteReview(review)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import Footer from '../layout/Footer.vue'
import { ref } from 'vue'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const reviews = ref([
  { id: 1, product: 'Product A', customer: 'John Doe', rating: 5, comment: 'Excellent!' },
  { id: 2, product: 'Product B', customer: 'Jane Smith', rating: 4, comment: 'Good product' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const editReview = (r) => console.log('Edit', r)
const deleteReview = (r) => console.log('Delete', r)
</script>

<style scoped>
main { padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { padding: 10px; border: 1px solid #ddd; }
button { margin-right: 5px; padding: 5px 10px; }
</style>
