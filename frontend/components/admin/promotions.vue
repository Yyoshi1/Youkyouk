<template>
  <div class="admin-promotions">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Promotions</h1>
      <button @click="addPromotion">Add Promotion</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Discount</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="promo in promotions" :key="promo.id">
            <td>{{ promo.id }}</td>
            <td>{{ promo.title }}</td>
            <td>{{ promo.discount }}%</td>
            <td>{{ promo.status }}</td>
            <td>
              <button @click="editPromotion(promo)">Edit</button>
              <button @click="deletePromotion(promo)">Delete</button>
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
const promotions = ref([
  { id: 1, title: 'Summer Sale', discount: 20, status: 'active' },
  { id: 2, title: 'Winter Sale', discount: 15, status: 'inactive' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const addPromotion = () => console.log('Add Promotion')
const editPromotion = (p) => console.log('Edit', p)
const deletePromotion = (p) => console.log('Delete', p)
</script>

<style scoped>
main { padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { padding: 10px; border: 1px solid #ddd; }
button { margin-right: 5px; padding: 5px 10px; }
</style>
