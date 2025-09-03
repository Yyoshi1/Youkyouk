<template>
  <SellerLayout>
    <template #default>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="o in orders" :key="o.id">
            <td>{{ o.id }}</td>
            <td>{{ o.customer.name }}</td>
            <td>{{ o.status }}</td>
            <td>{{ o.total }}</td>
            <td>
              <button @click="viewOrder(o)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const orders = ref([])

const fetchOrders = async () => {
  const res = await axios.get('/api/seller/orders')
  orders.value = res.data
}

const viewOrder = (o) => { /*  Open the order details window */ }

onMounted(fetchOrders)
</script>

<style scoped>
table { width:100%; border-collapse: collapse; margin-top:1rem; }
th, td { border:1px solid #ddd; padding:0.5rem; text-align:left; }
button { margin-right:0.5rem; }
</style>
