<template>
  <div class="settings-page">
    <Header :title="'Settings'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <form @submit.prevent="updateSettings">
      <label>Store Name:</label>
      <input v-model="settings.storeName" type="text" />

      <label>Email:</label>
      <input v-model="settings.email" type="email" />

      <label>Phone:</label>
      <input v-model="settings.phone" type="text" />

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../layout/Header.vue'
import { useSellerStore } from '@/stores/seller'
import axios from 'axios'

const sellerStore = useSellerStore()
const seller = sellerStore.seller
const settings = ref({ storeName: '', email: '', phone: '' })

const fetchSettings = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/settings`)
  settings.value = res.data
}

const updateSettings = async () => {
  await axios.patch(`/api/seller/settings/${settings.value.id}`, settings.value)
  alert('Settings updated!')
}

onMounted(fetchSettings)
</script>

<style scoped>
.settings-page form { display: flex; flex-direction: column; width: 300px; }
.settings-page label { margin-top: 10px; }
.settings-page input { padding: 5px; }
.settings-page button { margin-top: 15px; padding: 8px; }
</style>
