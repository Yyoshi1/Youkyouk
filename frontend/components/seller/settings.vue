<template>
  <Layout :seller="seller" :addons="addons">
    <h2>Settings</h2>
    <form @submit.prevent="saveSettings">
      <label>Shop Name:</label>
      <input v-model="settings.shopName" type="text"/>
      <label>Email:</label>
      <input v-model="settings.email" type="email"/>
      <button type="submit">Save</button>
    </form>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { reactive } from 'vue'

const seller = { name: 'Seller User', avatar: '/avatars/seller.png' }
const addons = ref([
  { id: 1, name: 'Orders', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Promotions', enabled: false },
  { id: 4, name: 'Messages', enabled: true },
  { id: 5, name: 'Settings', enabled: true },
])

const settings = reactive({ shopName: 'My Shop', email: 'seller@example.com' })
const saveSettings = () => console.log('Settings saved', settings)
</script>

<style scoped>
form { display: flex; flex-direction: column; gap: 10px; max-width: 400px; }
input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
button { padding: 8px 12px; background: #1f2937; color: white; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #111827; }
</style>
