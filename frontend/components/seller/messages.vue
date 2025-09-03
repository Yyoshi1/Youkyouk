<template>
  <Layout :seller="seller" :addons="addons">
    <h2>Messages</h2>
    <ul>
      <li v-for="msg in messages" :key="msg.id">
        <strong>{{ msg.from }}</strong>: {{ msg.text }}
      </li>
    </ul>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const seller = { name: 'Seller User', avatar: '/avatars/seller.png' }
const addons = ref([
  { id: 1, name: 'Orders', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Promotions', enabled: false },
  { id: 4, name: 'Messages', enabled: true },
  { id: 5, name: 'Settings', enabled: true },
])

const messages = ref([])

const fetchMessages = async () => {
  const res = await axios.get('/api/seller/messages')
  messages.value = res.data
}

onMounted(() => fetchMessages())
</script>

<style scoped>
ul { list-style: none; padding: 0; }
li { margin-bottom: 10px; }
</style>
