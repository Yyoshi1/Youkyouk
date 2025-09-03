<template>
  <div class="seller-promotions">
    <Header :title="'Promotions'" :user="seller" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar"/>
    <main>
      <h2>Promotions</h2>
      <button @click="addPromotion"><i class="linear-icon-plus"></i> Add Promotion</button>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Discount</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="promo in promotions" :key="promo.id">
            <td>{{ promo.id }}</td>
            <td>{{ promo.name }}</td>
            <td>{{ promo.discount }}%</td>
            <td>{{ promo.status }}</td>
          </tr>
        </tbody>
      </table>
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

const promotions = ref([])

const fetchPromotions = async () => {
  const res = await axios.get(`/api/seller/promotions`)
  promotions.value = res.data
}

const addPromotion = () => { alert('Open add promotion modal') }

onMounted(() => fetchPromotions())
</script>

<style scoped>
main { flex: 1; padding: 20px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
button { margin-bottom: 10px; padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }
button i { margin-right: 5px; }
</style>
