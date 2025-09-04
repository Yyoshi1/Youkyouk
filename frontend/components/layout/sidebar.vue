<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/seller/dashboard"><i class="linear-icon-dashboard"></i> Dashboard</router-link></li>
      <li><router-link to="/seller/products"><i class="linear-icon-box"></i> Products</router-link></li>
      <li><router-link to="/seller/orders"><i class="linear-icon-basket"></i> Orders</router-link></li>
      <li><router-link to="/seller/promotions"><i class="linear-icon-tag"></i> Promotions</router-link></li>
      <li><router-link to="/seller/notifications"><i class="linear-icon-bell"></i> Notifications</router-link></li>
      <li><router-link to="/seller/messages"><i class="linear-icon-envelope"></i> Messages</router-link></li>
      <li><router-link to="/seller/settings"><i class="linear-icon-cog"></i> Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="linear-icon-menu"></i></button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean })
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #1f2937;
  color: white;
  transition: width 0.3s;
}
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { padding: 15px; display: flex; align-items: center; }
.sidebar li i { margin-right: 10px; }
button { width: 100%; background: none; border: none; color: white; padding: 10px; cursor: pointer; }
</style>
