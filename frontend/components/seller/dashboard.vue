<template>
  <div class="dashboard">
    <Header :title="'Seller Dashboard'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Welcome, {{ sellerUser.name }}</h2>
      <!-- Widgets -->
    </main>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import { ref } from 'vue'

const sellerUser = { id: 1, name: 'Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
</script>

<style scoped>
.dashboard { display: flex; }
main { flex: 1; padding: 20px; }
</style>
