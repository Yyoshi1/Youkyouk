<template>
  <div class="youkyouk-seller-dashboard">
    <Header :title="'Youkyouk Promotions'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Promotions</h2>
      <button @click="openAddPromotion"><i class="linear-icon-plus"></i> Add Promotion</button>

      <table class="promotions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Discount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="promo in promotions" :key="promo.id">
            <td>{{ promo.id }}</td>
            <td>{{ promo.title }}</td>
            <td>{{ promo.discount }}</td>
            <td>{{ promo.status }}</td>
            <td>
              <button @click="editPromotion(promo.id)"><i class="linear-icon-pencil"></i></button>
              <button @click="deletePromotion(promo.id)"><i class="linear-icon-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from '../../components/layout/Header.vue'
import Sidebar from '../../components/layout/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Youkyouk Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const promotions = ref([])

const fetchPromotions = async () => {
  const res = await axios.get(`/api/seller/1/promotions`)
  promotions.value = res.data
}

const openAddPromotion = () => { /* logic */ }
const editPromotion = (id) => { /* logic */ }
const deletePromotion = (id) => { /* logic */ }

onMounted(() => fetchPromotions())
</script>

<style scoped>
.promotions-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
.promotions-table th, .promotions-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
button { cursor: pointer; }
.linear-icon-plus::before { content: "\e900"; font-family: 'LinearIcons'; margin-right: 5px; }
.linear-icon-pencil::before { content: "\e901"; font-family: 'LinearIcons'; margin-right: 5px; }
.linear-icon-trash::before { content: "\e902"; font-family: 'LinearIcons'; margin-right: 5px; }
</style>
