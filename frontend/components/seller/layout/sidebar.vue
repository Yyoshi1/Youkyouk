<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/seller/dashboard">Dashboard</router-link></li>
      <li><router-link to="/seller/products">Products</router-link></li>
      <li><router-link to="/seller/orders">Orders</router-link></li>
      <li><router-link to="/seller/messages">Messages</router-link></li>
      <li><router-link to="/seller/promotions">Promotions</router-link></li>
      <li><router-link to="/seller/notifications">Notifications</router-link></li>
      <li><router-link to="/seller/settings">Settings</router-link></li>
    </ul>
    <button class="toggle-btn" @click="$emit('toggle')">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean })
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: var(--color-primary);
  color: white;
  height: 100vh;
  transition: width 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; margin-top: 20px; }
.sidebar li { padding: 15px 20px; }
.sidebar li:hover { background-color: rgba(255,255,255,0.1); }
.toggle-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
}
.icon { width: 24px; height: 24px; }
</style>
