<template>
  <aside :class="['youkyouk-sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/seller/dashboard"><i class="youkyouk-icon-dashboard"></i> Dashboard</router-link></li>
      <li><router-link to="/seller/products"><i class="youkyouk-icon-box"></i> Products</router-link></li>
      <li><router-link to="/seller/orders"><i class="youkyouk-icon-shopping-cart"></i> Orders</router-link></li>
      <li><router-link to="/seller/customers"><i class="youkyouk-icon-users"></i> Customers</router-link></li>
      <li><router-link to="/seller/reviews"><i class="youkyouk-icon-star"></i> Reviews</router-link></li>
      <li><router-link to="/seller/promotions"><i class="youkyouk-icon-tag"></i> Promotions</router-link></li>
      <li><router-link to="/seller/notifications"><i class="youkyouk-icon-bell"></i> Notifications</router-link></li>
      <li><router-link to="/seller/messages"><i class="youkyouk-icon-message"></i> Messages</router-link></li>
      <li><router-link to="/seller/settings"><i class="youkyouk-icon-settings"></i> Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="youkyouk-icon-menu"></i></button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean })
</script>

<style scoped>
.youkyouk-sidebar {
  width: 250px;
  background: #1f2937;
  color: white;
  transition: width 0.3s;
}
.youkyouk-sidebar.collapsed { width: 60px; }
.youkyouk-sidebar ul { list-style: none; padding: 0; margin: 0; }
.youkyouk-sidebar li { padding: 15px; display: flex; align-items: center; }
.youkyouk-sidebar li i { margin-right: 10px; }
button { background: none; border: none; color: white; cursor: pointer; width: 100%; padding: 15px; text-align: left; }
</style>
