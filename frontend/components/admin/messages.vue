<template>
  <div class="admin-messages">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Messages</h1>
      <ul>
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.from }}:</strong> {{ msg.content }} <em>{{ msg.date }}</em>
        </li>
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
const messages = ref([
  { id: 1, from: 'John Doe', content: 'Inquiry about Product A', date: '2025-09-03' },
  { id: 2, from: 'Jane Smith', content: 'Need support', date: '2025-09-02' },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
</script>

<style scoped>
main { padding: 20px; }
ul { list-style: none; padding: 0; }
li { padding: 10px; border-bottom: 1px solid #ddd; }
</style>
