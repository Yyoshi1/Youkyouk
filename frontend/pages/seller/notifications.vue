<template>
  <div class="youkyouk-notifications">
    <Header :title="'Notifications'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Notifications</h2>
      <ul class="notifications-list">
        <li v-for="note in notifications" :key="note.id">
          <span>{{ note.message }}</span>
          <small>{{ note.date }}</small>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const notifications = ref([])

const fetchNotifications = async () => {
  const res = await axios.get('/api/seller/notifications')
  notifications.value = res.data
}

onMounted(() => fetchNotifications())
</script>

<style scoped>
.youkyouk-notifications { display: flex; }
main { flex: 1; padding: 20px; }
.notifications-list { list-style: none; padding: 0; }
.notifications-list li { padding: 10px; border-bottom: 1px solid #ccc; }
</style>
