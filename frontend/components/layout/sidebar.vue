<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
      <li><router-link to="/admin/products">Products</router-link></li>
      <li><router-link to="/admin/orders">Orders</router-link></li>
      <li><router-link to="/admin/users">Users</router-link></li>
      <li><router-link to="/admin/settings">Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')">Toggle</button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  collapsed: Boolean
})
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #1f2937;
  color: white;
  transition: width 0.3s;
}
.sidebar.collapsed {
  width: 60px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  padding: 15px;
}
</style>
