<template>
  <div class="reports">
    <Header :title="'Reports'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>

    <div class="filters">
      <label>From:</label><input type="date" v-model="filter.from"/>
      <label>To:</label><input type="date" v-model="filter.to"/>
      <button @click="fetchReports">Apply</button>
    </div>

    <div class="charts">
      <canvas id="salesChart"></canvas>
      <canvas id="couponsChart"></canvas>
    </div>

    <button @click="exportCSV">Export CSV</button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Header from '../layout/Header.vue'
import axios from 'axios'
import Chart from 'chart.js/auto'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const filter = reactive({ from:'', to:'' })
let salesChart = null
let couponsChart = null

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchReports = async () => {
  try {
    const res = await axios.get('/api/seller/1/reports', { params: filter })
    renderCharts(res.data)
  } catch(err){ console.error(err) }
}

const renderCharts = (data) => {
  if(salesChart) salesChart.destroy()
  if(couponsChart) couponsChart.destroy()
  
  const ctx1 = document.getElementById('salesChart').getContext('2d')
  salesChart = new Chart(ctx1, {
    type:'bar',
    data: { labels:data.sales.labels, datasets:[{ label:'Sales', data:data.sales.values, backgroundColor:'#3b82f6' }] }
  })

  const ctx2 = document.getElementById('couponsChart').getContext('2d')
  couponsChart = new Chart(ctx2, {
    type:'pie',
    data: { labels:data.coupons.labels, datasets:[{ label:'Coupons Usage', data:data.coupons.values, backgroundColor:['#3b82f6','#f97316','#f43f5e','#10b981'] }] }
  })
}

const exportCSV = () => {
  window.open(`/api/seller/1/reports/export?from=${filter.from}&to=${filter.to}`,'_blank')
}

onMounted(fetchReports)
</script>

<style scoped>
.reports { padding:20px; margin-left:250px; }
.filters { display:flex; gap:10px; align-items:center; margin-bottom:20px; }
.filters input { padding:6px; border-radius:4px; border:1px solid #d1d5db; }
.filters button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; }
.filters button:hover { opacity:0.9; }
.charts { display:flex; gap:20px; flex-wrap:wrap; }
canvas { background-color: var(--color-card-bg); border-radius:8px; padding:10px; flex:1 1 45%; }
body.dark-mode canvas { background-color: var(--color-card-bg-dark); }
</style>
