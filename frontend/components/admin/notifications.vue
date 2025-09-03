<template>
  <div class="admin-notifications">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Notifications</h1>
      <ul>
        <li v-for="note in notifications" :key="note.id">{{ note.message }} - {{ note.date }}</li>
      </ul>
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
const notifications = ref([
  { id: 1, message: 'New order received', date: '2025-09-03' },
  { id: 2, message: 'Product stock low', date: '2025-09-02' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
</script>

<style scoped>
main { padding: 20px; }
ul { list-style: none; padding: 0; }
li { padding: 10px; border-bottom: 1px solid #ddd; }
</style>
