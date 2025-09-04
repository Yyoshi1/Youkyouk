<template>
  <div class="youkyouk-promotions">
    <Header :title="'Promotions'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Promotions</h2>
      <button @click="createPromotion"><i class="youkyouk-icon-plus"></i> Add Promotion</button>
      <table class="promotions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="promo in promotions" :key="promo.id">
            <td>{{ promo.id }}</td>
            <td>{{ promo.title }}</td>
            <td>{{ promo.discount }}%</td>
            <td>{{ promo.start_date }}</td>
            <td>{{ promo.end_date }}</td>
            <td>
              <button @click="editPromotion(promo)"><i class="youkyouk-icon-edit"></i></button>
              <button @click="deletePromotion(promo.id)"><i class="youkyouk-icon-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const promotions = ref([])

const fetchPromotions = async () => {
  const res = await axios.get('/api/seller/promotions')
  promotions.value = res.data
}

const createPromotion = () => { /* */ }
const editPromotion = (promo) => { /* */ }
const deletePromotion = (id) => { /* */ }

onMounted(() => fetchPromotions())
</script>

<style scoped>
.youkyouk-promotions { display: flex; }
main { flex: 1; padding: 20px; }
.promotions-table { width: 100%; border-collapse: collapse; }
.promotions-table th, .promotions-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
