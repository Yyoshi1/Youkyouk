<template>
  <SellerLayout>
    <template #default>
      <h1>Dashboard</h1>
      <div class="stats-grid">
        <div class="card">Orders: {{ stats.orders }}</div>
        <div class="card">Revenue: ${{ stats.revenue }}</div>
        <div class="card">Products: {{ stats.products }}</div>
      </div>
      <div class="charts">
        <!-- Charts placeholders -->
        <div>Sales Chart</div>
        <div>Top Products Chart</div>
      </div>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const stats = ref({ orders:0, revenue:0, products:0 })

const fetchStats = async () => {
  const res = await axios.get('/api/seller/statistics')
  stats.value = res.data
}

onMounted(fetchStats)
</script>

<style scoped>
.stats-grid { display:flex; gap:1rem; margin-bottom:1rem; }
.card { flex:1; background:#fff; padding:1rem; border-radius:0.5rem; box-shadow:0 2px 4px rgba(0,0,0,0.1); }
.charts { display:flex; gap:1rem; }
.charts > div { flex:1; background:#fff; padding:1rem; border-radius:0.5rem; text-align:center; }
</style>
