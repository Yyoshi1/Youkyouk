<template>
  <Layout :admin="admin" :addons="addons">
    <h2>Reports</h2>
    <table>
      <thead>
        <tr><th>ID</th><th>Title</th><th>Date</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.id">
          <td>{{ report.id }}</td>
          <td>{{ report.title }}</td>
          <td>{{ report.date }}</td>
          <td>{{ report.status }}</td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const addons = ref([
  { id: 1, name: 'Dashboard', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Categories', enabled: true },
  { id: 4, name: 'Orders', enabled: true },
  { id: 5, name: 'Users', enabled: true },
  { id: 6, name: 'Vendors', enabled: true },
  { id: 7, name: 'Marketing', enabled: true },
  { id: 8, name: 'Reports', enabled: true },
  { id: 9, name: 'Settings', enabled: true },
])

const reports = ref([])

const fetchReports = async () => {
  const res = await axios.get('/api/admin/reports')
  reports.value = res.data
}

onMounted(() => fetchReports())
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
</style>
