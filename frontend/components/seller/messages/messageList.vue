<template>
  <div class="messages">
    <Header :title="'Messages'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="message-container">
      <div class="message-list">
        <ul>
          <li v-for="msg in messages" :key="msg.id" @click="openChat(msg)" :class="{ unread: !msg.is_read }">
            <span class="sender">{{ msg.sender_name }}</span>
            <span class="snippet">{{ msg.content.substring(0, 30) }}...</span>
            <span v-if="!msg.is_read" class="badge">New</span>
          </li>
        </ul>
      </div>
      <ChatWindow v-if="activeChat" :chat="activeChat" @close="closeChat"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'
import ChatWindow from './ChatWindow.vue'

const seller = ref({ name: 'Seller', avatar: '/avatar.png' })
const messages = ref([])
const activeChat = ref(null)

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchMessages = async () => {
  try {
    const res = await axios.get('/api/seller/1/messages')
    messages.value = res.data
  } catch (err) { console.error(err) }
}

const openChat = (msg) => { activeChat.value = msg; markAsRead(msg.id) }
const closeChat = () => { activeChat.value = null }

const markAsRead = async (id) => {
  await axios.put(`/api/messages/${id}/read`)
  const msg = messages.value.find(m => m.id === id)
  if (msg) msg.is_read = true
}

onMounted(fetchMessages)
</script>
