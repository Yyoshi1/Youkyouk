<template>
  <div class="customers">
    <Header :title="'Customers'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Customers</h2>
      <table class="customers-table">
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
            <td>{{ customer.orders_count }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const customers = ref([])

const fetchCustomers = async () => {
  const res = await axios.get('/api/seller/customers')
  customers.value = res.data
}

onMounted(() => fetchCustomers())
</script>

<style scoped>
.customers { display: flex; }
main { flex: 1; padding: 20px; }
.customers-table { width: 100%; border-collapse: collapse; }
.customers-table th, .customers-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
