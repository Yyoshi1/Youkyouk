<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li v-if="isActive('dashboard')"><router-link to="/seller/dashboard">Dashboard</router-link></li>
      <li v-if="isActive('products')"><router-link to="/seller/products">Products</router-link></li>
      <li v-if="isActive('orders')"><router-link to="/seller/orders">Orders</router-link></li>
      <li v-if="isActive('customers')"><router-link to="/seller/customers">Customers</router-link></li>
      <li v-if="isActive('reviews')"><router-link to="/seller/reviews">Reviews</router-link></li>
      <li v-if="isActive('promotions')"><router-link to="/seller/promotions">Promotions</router-link></li>
      <li v-if="isActive('plugins')"><router-link to="/seller/plugins">Plugins</router-link></li>
      <li v-if="isActive('settings')"><router-link to="/seller/settings">Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')">Toggle</button>
  </aside>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useSellerStore } from '@/stores/seller'

const props = defineProps({ collapsed: Boolean })
const sellerStore = useSellerStore()

const isActive = (section) => {
  // 
  return sellerStore.activePlugins.includes(section)
}
</script>

<style scoped>
.sidebar { width: 250px; background: #1f2937; color: white; transition: width 0.3s; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { padding: 15px; }
</style>
