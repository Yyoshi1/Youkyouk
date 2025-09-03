<template>
  <div class="admin-layout">
    <Sidebar :collapsed="collapsed" @toggle="toggleSidebar"/>
    <div class="main-content">
      <Header @toggleTheme="toggleTheme" :user="user"/>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

const collapsed = ref(false)
const user = ref({ name: 'Admin User', role: 'admin' })

function toggleSidebar() {
  collapsed.value = !collapsed.value
}

function toggleTheme() {
  document.body.classList.toggle('dark')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
