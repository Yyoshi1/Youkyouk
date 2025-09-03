<template>
  <div class="admin-addons">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Addons</h1>
      <ul>
        <li v-for="addon in addons" :key="addon.id">
          <strong>{{ addon.name }}</strong> - {{ addon.description }}
          <label>
            <input type="checkbox" v-model="addon.enabled"/>
            Enabled
          </label>
        </li>
      </ul>
      <button @click="saveAddons">Save</button>
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
const addons = ref([
  { id: 1, name: 'SEO Tools', description: 'Improve site SEO', enabled: true },
  { id: 2, name: 'Discount Manager', description: 'Manage discounts', enabled: false },
  { id: 3, name: 'Chat Support', description: 'Live chat with customers', enabled: true },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const saveAddons = () => console.log('Addons saved', addons.value)
</script>

<style scoped>
main { padding: 20px; }
ul { list-style: none; padding: 0; }
li { padding: 10px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center; }
button { margin-top: 15px; padding: 10px 15px; background: #1f2937; color: white; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #111827; }
</style>
