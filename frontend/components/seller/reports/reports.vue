<template>
  <div class="reports">
    <Header :title="'Reports'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
    <div class="filters">
      <label>From:</label>
      <input type="date" v-model="filter.from" />
      <label>To:</label>
      <input type="date" v-model="filter.to" />
      <button @click="fetchReports">Apply</button>
    </div>

    <table class="reports-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Orders</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.date">
          <td>{{ report.date }}</td>
          <td>{{ report.orders }}</td>
          <td>{{ report.revenue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const reports = ref([])
const filter = reactive({ from:'', to:'' })
const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchReports = async () => {
  try {
    const res = await axios.get('/api/seller/1/reports', { params: filter })
    reports.value = res.data
  } catch(err){ console.error(err) }
}

onMounted(fetchReports)
</script>

<style scoped>
.reports { padding:20px; margin-left:250px; }
.filters { display:flex; gap:10px; align-items:center; margin-bottom:20px; }
.filters input { padding:6px; border-radius:4px; border:1px solid #d1d5db; }
.filters button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; }
.filters button:hover { opacity:0.9; }
.reports-table { width:100%; border-collapse:collapse; background-color: var(--color-card-bg); box-shadow: var(--shadow-card); border-radius: var(--border-radius); }
.reports-table th, .reports-table td { padding:12px; text-align:left; border-bottom:1px solid #e5e7eb; }
.reports-table th { background-color:#f3f4f6; }
body.dark-mode .reports-table { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); color:white; }
</style>
