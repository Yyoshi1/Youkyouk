<template>
  <aside :class="['youkyouk-sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/youkyouk/seller/dashboard"><i class="yk-icon-dashboard"></i> Dashboard</router-link></li>
      <li><router-link to="/youkyouk/seller/products"><i class="yk-icon-box"></i> Products</router-link></li>
      <li><router-link to="/youkyouk/seller/categories"><i class="yk-icon-folder"></i> Categories</router-link></li>
      <li><router-link to="/youkyouk/seller/orders"><i class="yk-icon-bag"></i> Orders</router-link></li>
      <li><router-link to="/youkyouk/seller/customers"><i class="yk-icon-user"></i> Customers</router-link></li>
      <li><router-link to="/youkyouk/seller/reviews"><i class="yk-icon-star"></i> Reviews</router-link></li>
      <li><router-link to="/youkyouk/seller/promotions"><i class="yk-icon-gift"></i> Promotions</router-link></li>
      <li><router-link to="/youkyouk/seller/notifications"><i class="yk-icon-bell"></i> Notifications</router-link></li>
      <li><router-link to="/youkyouk/seller/settings"><i class="yk-icon-settings"></i> Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="yk-icon-menu"></i></button>
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
.youkyouk-sidebar li i { margin-right: 10px; font-family: 'YoukyoukIcons'; }
.youkyouk-sidebar button { width: 100%; padding: 10px; background: none; border: none; color: white; cursor: pointer; }
</style>
