<template>
  <div class="dashboard">
    <Header :title="'Dashboard'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="stats-grid">
      <div class="card">
        <h3>Total Products</h3>
        <p>{{ stats.products }}</p>
      </div>
      <div class="card">
        <h3>Total Orders</h3>
        <p>{{ stats.orders }}</p>
      </div>
      <div class="card">
        <h3>Unread Messages</h3>
        <p>{{ stats.messages }}</p>
      </div>
      <div class="card">
        <h3>Active Promotions</h3>
        <p>{{ stats.promotions }}</p>
      </div>
    </div>
    <div class="charts">
      <!-- Charts>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name: 'Seller', avatar: '/avatar.png' })
const stats = ref({ products: 0, orders: 0, messages: 0, promotions: 0 })

const toggleTheme = () => {
  document.body.classList.toggle('dark-mode')
}

const toggleSidebar = () => {
  // 
}

onMounted(async () => {
  const sellerId = 1 // 
  try {
    const [products
