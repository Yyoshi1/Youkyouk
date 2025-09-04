<template>
  <div class="youkyouk-customers">
    <Header :title="'Customers'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Customers</h2>
      <input v-model="filter.name" placeholder="Search customer..." @input="fetchCustomers"/>
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
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const filter = reactive({ name: '' })
const customers = ref([])

const fetchCustomers = async () => {
  const res = await axios.get(`/api/seller/customers?name=${filter.name}`)
  customers.value = res.data
}

onMounted(() => fetchCustomers())
</script>

<style scoped>
.youkyouk-customers { display: flex; }
main { flex: 1; padding: 20px; }
.customers-table { width: 100%; border-collapse: collapse; }
.customers-table th, .customers-table td { border: 1px solid #ccc; padding: 8px; text-align: left; }
</style>
