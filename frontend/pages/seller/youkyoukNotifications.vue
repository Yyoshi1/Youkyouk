<template>
  <div class="youkyouk-seller-notifications">
    <Header :title="'Notifications'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Notifications</h2>
      <ul class="notification-list">
        <li v-for="note in notifications" :key="note.id">
          <i class="youkyouk-icon-bell"></i> {{ note.message }}
          <span class="date">{{ note.date }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/layout/Header.vue'
import Sidebar from '../../components/layout/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Youkyouk Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const notifications = ref([])

const fetchNotifications = async () => {
  const res = await axios.get(`/api/seller/1/notifications`)
  notifications.value = res.data
}

onMounted(() => fetchNotifications())
</script>

<style scoped>
.youkyouk-seller-notifications { display: flex; }
main { flex: 1; padding: 20px; }
.notification-list { list-style: none; padding: 0; }
.notification-list li { padding: 10px; border-bottom: 1px solid #ccc; display: flex; align-items: center; }
.notification-list i { margin-right: 10px; }
.date { color: #888; font-size: 0.8em; margin-left: auto; }

/* Youkyouk Icons */
.youkyouk-icon-bell::before { content: "\e903"; font-family: 'YoukyoukIcons'; }
</style>
