<template>
  <SellerLayout>
    <template #default>
      <h1>Statistics</h1>
      <div class="charts">
        <div>Sales Chart</div>
        <div>Top Products Chart</div>
        <div>Revenue Chart</div>
      </div>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
</script>

<style scoped>
.charts { display:flex; gap:1rem; margin-top:1rem; }
.charts > div { flex:1; background:#fff; padding:1rem; border-radius:0.5rem; text-align:center; }
</style>
