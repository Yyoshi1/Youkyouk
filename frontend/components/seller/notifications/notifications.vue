<template>
  <div class="notifications-page">
    <Header :title="'Notifications'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <ul>
      <li v-for="note in notifications" :key="note.id" :class="{ unread: !note.read }">
        <span>{{ note.message }}</span>
        <button @click="markRead(note.id)">Mark as read</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { io } from 'socket.io-client'
import Header from '../layout/Header.vue'
import { useSellerStore } from '@/stores/seller'
import axios from 'axios'

const sellerStore = useSellerStore()
const seller = sellerStore.seller
const notifications = ref([])

const socket = io('http://localhost:3000')

onMounted(() => {
  // 
  socket.emit('joinSellerRoom', seller.id)

  // 
  socket.on('newNotification', (notification) => {
    notifications.value.unshift(notification)
  })

  // 
  fetchNotifications()
})

const fetchNotifications = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/notifications`)
  notifications.value = res.data
}

const markRead = async (id) => {
  await axios.patch(`/api/seller/notifications/${id}/read`)
  const index = notifications.value.findIndex(n => n.id === id)
  if(index !== -1) notifications.value[index].read = true
}
</script>

<style scoped>
.notifications-page ul { list-style: none; padding: 0; }
.notifications-page li { padding: 10px; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; }
.notifications-page li.unread { background: #f0f9ff; }
</style>
