<template>
  <Layout :seller="seller" :addons="addons">
    <h2>Promotions</h2>
    <button @click="addPromotion"><i class="linear-icon-plus"></i> Add Promotion</button>
    <ul>
      <li v-for="promo in promotions" :key="promo.id">
        <strong>{{ promo.name }}</strong> - {{ promo.discount }}%
        <button @click="editPromotion(promo)"><i class="linear-icon-pencil"></i></button>
        <button @click="deletePromotion(promo)"><i class="linear-icon-trash"></i></button>
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

const promotions = ref([])

const fetchPromotions = async () => {
  const res = await axios.get('/api/seller/promotions')
  promotions.value = res.data
}

const addPromotion = () => console.log('Add promotion')
const editPromotion = (p) => console.log('Edit', p)
const deletePromotion = (p) => console.log('Delete', p)

onMounted(() => fetchPromotions())
</script>

<style scoped>
ul { list-style: none; padding: 0; }
li { margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
button { margin-left: 5px; }
</style>
