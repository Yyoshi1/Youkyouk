<template>
  <div class="seller-dashboard">
    <Header :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from '../layout/Footer.vue'
import { ref } from 'vue'

const seller = { name: 'Seller User', avatar: '/avatars/seller.png' }
const sidebarCollapsed = ref(false)
const addons = ref([
  { id: 1, name: 'Products', enabled: true },
  { id: 2, name: 'Orders', enabled: true },
  { id: 3, name: 'Promotions', enabled: false },
  { id: 4, name: 'Messages', enabled: true },
  { id: 5, name: 'Settings', enabled: true },
])

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
</script>

<style scoped>
main { padding: 20px; margin-left: 250px; transition: margin-left 0.3s; }
.seller-dashboard .collapsed main { margin-left: 60px; }
</style>
