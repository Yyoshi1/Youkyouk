<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li><router-link to="/dashboard"><i class="linear-icon-home"></i> Dashboard</router-link></li>
      <li><router-link to="/products"><i class="linear-icon-box"></i> Products</router-link></li>
      <li><router-link to="/orders"><i class="linear-icon-shopping-cart"></i> Orders</router-link></li>
      <li><router-link to="/customers"><i class="linear-icon-users"></i> Customers</router-link></li>
      <li><router-link to="/reviews"><i class="linear-icon-star"></i> Reviews</router-link></li>
      <li><router-link to="/settings"><i class="linear-icon-cog"></i> Settings</router-link></li>
    </ul>
    <button @click="$emit('toggle')"><i class="linear-icon-arrow-left"></i></button>
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
.sidebar li i { margin-right: 10px; }

/* Linear Icons */
.linear-icon-home::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-box::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-shopping-cart::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-users::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-star::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-cog::before { content: "\e900"; font-family: 'LinearIcons'; }
.linear-icon-arrow-left::before { content: "\e900"; font-family: 'LinearIcons'; }
</style>
