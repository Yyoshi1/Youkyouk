<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/seller/dashboard"><i class="youkyouk-icon-dashboard"></i> Dashboard</router-link></li>
      <li><router-link to="/seller/products"><i class="youkyouk-icon-product"></i> Products</router-link></li>
      <li><router-link to="/seller/orders"><i class="youkyouk-icon-order"></i> Orders</router-link></li>
      <li><router-link to="/seller/customers"><i class="youkyouk-icon-customer"></i> Customers</router-link></li>
      <li><router-link to="/seller/messages"><i class="youkyouk-icon-message"></i> Messages</router-link></li>
      <li><router-link to="/seller/notifications"><i class="youkyouk-icon-notification"></i> Notifications</router-link></li>
      <li><router-link to="/seller/settings"><i class="youkyouk-icon-settings"></i> Settings</router-link></li>
      <li><router-link to="/seller/promotions"><i class="youkyouk-icon-promotion"></i> Promotions</router-link></li>
      <li><router-link to="/seller/reviews"><i class="youkyouk-icon-review"></i> Reviews</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="youkyouk-icon-toggle"></i></button>
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
.sidebar li { padding: 15px; display: flex; align-items: center; }
.sidebar li i { margin-right: 8px; }
/* Youkyouk icons assumed to be loaded globally */
</style>
