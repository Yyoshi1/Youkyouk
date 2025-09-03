<template>
  <div class="plugins-page">
    <Header :title="'Plugins'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plugin in plugins" :key="plugin.id">
          <td>{{ plugin.id }}</td>
          <td>{{ plugin.name }}</td>
          <td>{{ plugin.active ? 'Yes' : 'No' }}</td>
          <td><button @click="toggle(plugin)">Toggle</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../layout/Header.vue'
import { useSellerStore } from '@/stores/seller'
import axios from 'axios'

const sellerStore = useSellerStore()
const seller = sellerStore.seller
const plugins = ref([])

const fetchPlugins = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/plugins`)
  plugins.value = res.data
}

const toggle = async (plugin) => {
  const res = await axios.patch(`/api/seller/plugins/${plugin.id}/toggle`, { active: !plugin.active })
  plugin.active = res.data.active
}

onMounted(fetchPlugins)
</script>

<style scoped>
.plugins-page table { width: 100%; border-collapse: collapse; }
.plugins-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
