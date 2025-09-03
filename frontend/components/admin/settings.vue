<template>
  <div class="admin-settings">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Settings</h1>
      <form @submit.prevent="saveSettings">
        <label>Site Name:</label>
        <input v-model="settings.siteName"/>
        <label>Admin Email:</label>
        <input v-model="settings.email"/>
        <button type="submit">Save</button>
      </form>
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
const settings = ref({ siteName: 'Youkyouk', email: 'admin@youkyouk.com' })

const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value
const toggleTheme = () => console.log('Toggle theme')
const saveSettings = () => console.log('Settings saved', settings.value)
</script>

<style scoped>
main { padding: 20px; display: flex; flex-direction: column; gap:
