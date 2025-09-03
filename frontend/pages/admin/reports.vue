<template>
  <AdminLayout>
    <template #default>
      <h1>Reports</h1>

      <div>
        <label>Filter by Date</label>
        <input type="date" v-model="from"/>
        <input type="date" v-model="to"/>
        <button @click="fetchReports">Filter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in reports" :key="r.id">
            <td>{{ r.id }}</td>
            <td>{{ r.customer.name }}</td>
            <td>{{ r.total }}</td>
            <td>{{ r.status }}</td>
            <td>{{ new Date(r.created_at).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { ref } from 'vue'
import axios from 'axios'

const reports = ref([])
const from = ref('')
const to = ref('')

const fetchReports = async () => {
  const res = await axios.get('/api/reports', { params:{ from:from.value, to:to.value } })
  reports.value = res.data
}
</script>

<style scoped>
table { width:100%; border-collapse: collapse; }
th, td { border:1px solid #ccc; padding:0.5rem; }
</style>
