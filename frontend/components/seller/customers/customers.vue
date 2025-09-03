<template>
  <div class="customers-page">
    <Header :title="'Customers'" :user="seller" @toggle-sidebar="toggleSidebar" />

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.orders.length }}</td>
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
const customers = ref([])

const fetchCustomers = async () => {
  const res = await axios.get(`/api/seller/${seller.id}/customers`)
  customers.value = res.data
}

onMounted(fetchCustomers)
</script>

<style scoped>
.customers-page table { width: 100%; border-collapse: collapse; }
.customers-page th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
