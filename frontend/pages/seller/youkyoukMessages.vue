<template>
  <div class="youkyouk-seller-messages">
    <Header :title="'Messages'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Messages</h2>
      <ul class="message-list">
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.sender }}</strong>: {{ msg.content }}
          <span class="date">{{ msg.date }}</span>
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

const messages = ref([])

const fetchMessages = async () => {
  const res = await axios.get(`/api/seller/1/messages`)
  messages.value = res.data
}

onMounted(() => fetchMessages())
</script>

<style scoped>
.youkyouk-seller-messages { display: flex; }
main { flex: 1; padding: 20px; }
.message-list { list-style: none; padding: 0; }
.message-list li { padding: 10px; border-bottom: 1px solid #ccc; }
.date { color: #888; font-size: 0.8em; margin-left: 5px; }
</style>
