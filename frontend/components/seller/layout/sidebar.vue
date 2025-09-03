<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/seller/dashboard">Dashboard</router-link></li>
      <li><router-link to="/seller/products">Products</router-link></li>
      <li><router-link to="/seller/orders">Orders</router-link></li>
      <li><router-link to="/seller/notifications">Notifications</router-link></li>
      <li><router-link to="/seller/reports">Reports</router-link></li>
      <li><router-link to="/seller/settings">Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')">Toggle</button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean })
</script>

<style scoped>
.sidebar { width: 250px; background: #1f2937; color: white; transition: width 0.3s; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { padding: 15px; }
</style>
