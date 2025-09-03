<template>
  <div class="admin-categories">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Categories</h1>
      <button @click="addCategory">Add Category</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Parent</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="cat in categories" :key="cat.id">
            <td>{{ cat.id }}</td>
            <td>{{ cat.name }}</td>
            <td>{{ cat.parent || '-' }}</td>
            <td>
              <button @click="editCategory(cat)">Edit</button>
              <button @click="deleteCategory(cat)">Delete</button>
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
const categories = ref([
  { id: 1, name: 'Electronics', parent: null },
  { id: 2, name: 'Laptops', parent: 'Electronics' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const addCategory = () => console.log('Add Category')
const editCategory = (c) => console.log('Edit', c)
const deleteCategory = (c) => console.log('Delete', c)
</script>

<style scoped>
main { padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
button { margin-right: 5px; padding: 5px 10px; }
</style>
