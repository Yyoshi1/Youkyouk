<template>
  <div class="admin-products">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Products</h1>
      <button @click="addProduct">Add Product</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Price</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(product)">Delete</button>
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
const products = ref([
  { id: 1, name: 'Product A', price: 100, status: 'active' },
  { id: 2, name: 'Product B', price: 200, status: 'inactive' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const addProduct = () => console.log('Add Product')
const editProduct = (p) => console.log('Edit', p)
const deleteProduct = (p) => console.log('Delete', p)
</script>

<style scoped>
main { padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
button { margin-right: 5px; padding: 5px 10px; }
</style>
