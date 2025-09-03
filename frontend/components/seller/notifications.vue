<template>
  <div class="seller-notifications">
    <Header :title="'Notifications'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Notifications</h2>
      <ul>
        <li v-for="note in notifications" :key="note.id">
          <i class="linear-icon-bell"></i> {{ note.message }} - <small>{{ note.date }}</small>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const seller = { id: 1, name: 'Seller Name', avatar: '/avatars/seller.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const addons = ref([
  { id: 1, name: 'Dashboard', route: '/seller/dashboard', enabled: true, icon: 'linear-icon-speedometer' },
  { id: 2, name: 'Products', route: '/seller/products', enabled: true, icon: 'linear-icon-box' },
  { id: 3, name: 'Orders', route: '/seller/orders', enabled: true, icon: 'linear-icon-basket' },
  { id: 4, name: 'Promotions', route: '/seller/promotions', enabled: true, icon: 'linear-icon-tag' },
  { id: 5, name: 'Notifications', route: '/seller/notifications', enabled: true, icon: 'linear-icon-bell' },
  { id: 6, name: 'Messages', route: '/seller/messages', enabled: true, icon: 'linear-icon-envelope' },
  { id: 7, name: 'Settings', route: '/seller/settings', enabled: true, icon: 'linear-icon-cog' },
])

const notifications = ref([])

const fetchNotifications = async () => {
  const res = await axios.get(`/api/seller/notifications`)
  notifications.value = res.data
}

onMounted(() => fetchNotifications())
</script>

<style scoped>
main { flex: 1; padding: 20px; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 10px; border-bottom: 1px solid #ccc; display: flex; align-items: center; }
li i { margin-right: 8px; }
</style>
