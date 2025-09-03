<template>
  <div class="seller-messages">
    <Header :title="'Messages'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Messages</h2>
      <ul>
        <li v-for="msg in messages" :key="msg.id">
          <i class="linear-icon-envelope"></i> <strong>{{ msg.from }}</strong>: {{ msg.content }} <small>{{ msg.date }}</small>
        </li>
      </ul>
      <textarea v-model="newMessage" placeholder="Type a message"></textarea>
      <button @click="sendMessage"><i class="linear-icon-send"></i> Send</button>
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

const messages = ref([])
const newMessage = ref('')

const fetchMessages = async () => {
  const res = await axios.get(`/api/seller/messages`)
  messages.value = res.data
}

const sendMessage = async () => {
  if(!newMessage.value) return
  await axios.post(`/api/seller/messages`, { content: newMessage.value })
  newMessage.value = ''
  fetchMessages()
}

onMounted(() => fetchMessages())
</script>

<style scoped>
main { flex: 1; padding: 20px; display: flex; flex-direction: column; }
ul { list-style: none; padding: 0; margin: 0 0 10px 0; flex: 1; overflow-y: auto; }
li { padding: 10px; border-bottom: 1px solid #ccc; display: flex; align-items: center; }
li i { margin-right: 8px; }
textarea { width: 100%; padding: 10px; margin-bottom: 5px; border-radius: 4px; border: 1px solid #ccc; resize: none; }
button { padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }
button i { margin-right: 5px; }
</style>
