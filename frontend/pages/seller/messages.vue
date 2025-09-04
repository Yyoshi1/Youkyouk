<template>
  <div class="youkyouk-messages">
    <Header :title="'Messages'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Messages</h2>
      <ul class="messages-list">
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.from.name }}:</strong> {{ msg.text }}
          <small>{{ msg.date }}</small>
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

const messages = ref([])

const fetchMessages = async () => {
  const res = await axios.get('/api/seller/messages')
  messages.value = res.data
}

onMounted(() => fetchMessages())
</script>

<style scoped>
.youkyouk-messages { display: flex; }
main { flex: 1; padding: 20px; }
.messages-list { list-style: none; padding: 0; }
.messages-list li { padding: 10px; border-bottom: 1px solid #ccc; }
</style>
