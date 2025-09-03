<template>
  <div class="promotions-page">
    <Header :title="'Promotions'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <button @click="fetchPromotions">Refresh</button>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Discount</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promo in promotions" :key="promo.id">
          <td>{{ promo.id }}</td>
          <td>{{ promo.title }}</td>
          <td>{{ promo.discount }}</td>
          <td>{{ promo.active ? 'Yes' : 'No' }}</td>
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
const promotions = ref([])

const fetchPromotions = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/promotions`)
  promotions.value = res.data
}

onMounted(fetchPromotions)
</script>

<style scoped>
.promotions-page table { width: 100%; border-collapse: collapse; }
.promotions-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
