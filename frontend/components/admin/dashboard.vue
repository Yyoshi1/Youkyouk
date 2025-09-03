<template>
  <div class="admin-dashboard">
    <Header :user="admin" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed"/>
    <main>
      <h1>Dashboard</h1>
      <div class="stats-cards">
        <div class="card">Products: {{ stats.products }}</div>
        <div class="card">Orders: {{ stats.orders }}</div>
        <div class="card">Customers: {{ stats.customers }}</div>
        <div class="card">Revenue: ${{ stats.revenue }}</div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'
import Footer from '../layout/Footer.vue'
import { ref } from 'vue'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const stats = { products:
