<template>
  <div class="notifications">
    <Header :title="'Notifications'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
    <ul class="notification-list">
      <li v-for="note in notifications" :key="note.id" :class="{ unread: !note.read }">
        <span>{{ note.message }}</span>
        <small>{{ note.created_at }}</small>
        <button @click="markAsRead(note)">Mark as read</button>
        <button @click="deleteNotification(note)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const notifications = ref([])
const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchNotifications = async () => {
  try {
    const res = await axios.get('/api/seller/1/notifications')
    notifications.value = res.data
  } catch(err){ console.error(err) }
}

const markAsRead = async (note) => {
  note.read = true
  await axios.put(`/api/notifications/${note.id}`, { read: true })
}

const deleteNotification = async (note) => {
  await axios.delete(`/api/notifications/${note.id}`)
  notifications.value = notifications.value.filter(n => n.id !== note.id)
}

onMounted(fetchNotifications)
</script>

<style scoped>
.notifications { padding:20px; margin-left:250px; }
.notification-list { list-style:none; padding:0; }
.notification-list li { padding:10px; border-bottom:1px solid #e5e7eb; display:flex; justify-content:space-between; align-items:center; }
.notification-list li.unread { background:#fef3c7; }
button { margin-left:6px; padding:4px 8px; border:none; border-radius:4px; background:#3b82f6; color:white; cursor:pointer; }
button:hover { opacity:0.9; }
body.dark-mode .notification-list li { background:#374151; color:white; }
</style>
