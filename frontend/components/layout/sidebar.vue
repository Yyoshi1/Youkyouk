<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/admin/dashboard"><i class="youkyouk-icon-home"></i> Dashboard</router-link></li>
      <li><router-link to="/admin/products"><i class="youkyouk-icon-box"></i> Products</router-link></li>
      <li><router-link to="/admin/categories"><i class="youkyouk-icon-layers"></i> Categories</router-link></li>
      <li><router-link to="/admin/orders"><i class="youkyouk-icon-shopping-bag"></i> Orders</router-link></li>
      <li><router-link to="/admin/customers"><i class="youkyouk-icon-users"></i> Customers</router-link></li>
      <li><router-link to="/admin/reviews"><i class="youkyouk-icon-star"></i> Reviews</router-link></li>
      <li><router-link to="/admin/promotions"><i class="youkyouk-icon-tag"></i> Promotions</router-link></li>
      <li><router-link to="/admin/notifications"><i class="youkyouk-icon-bell"></i> Notifications</router-link></li>
      <li><router-link to="/admin/messages"><i class="youkyouk-icon-message"></i> Messages</router-link></li>
      <li><router-link to="/admin/settings"><i class="youkyouk-icon-settings"></i> Settings</router-link></li>
      <li><router-link to="/admin/addons"><i class="youkyouk-icon-puzzle"></i> Addons</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="youkyouk-icon-arrow-left"></i></button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean })
</script>

<style scoped>
.sidebar { width: 250px; background: #111827; color: white; transition: width 0.3s; height: 100vh; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 15px; display: flex; align-items: center; }
.sidebar li i { margin-right: 10px; font-size: 18px; }
.sidebar button { background: none; border: none; color: white; width: 100%; text-align: right; padding: 10px; }
</style>
