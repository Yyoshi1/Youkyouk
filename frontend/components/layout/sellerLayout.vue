<template>
  <div class="seller-dashboard">
    <Sidebar :menu="menu" />
    <div class="main-content">
      <Header :user="user" />
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { ref } from 'vue'

const user = ref({ name: 'Seller Name', avatar: '' })
const menu = ref([
  { name:'Dashboard', icon:'home', route:'/seller/dashboard' },
  { name:'Products', icon:'box', route:'/seller/products' },
  { name:'Orders', icon:'shopping-cart', route:'/seller/orders' },
  { name:'Customers', icon:'users', route:'/seller/customers' },
  { name:'Promotions', icon:'tag', route:'/seller/promotions' },
  { name:'Reviews', icon:'star', route:'/seller/reviews' },
  { name:'Statistics', icon:'bar-chart', route:'/seller/statistics' },
  { name:'Notifications', icon:'bell', route:'/seller/notifications' },
  { name:'Settings', icon:'settings', route:'/seller/settings' },
  { name:'Messages', icon:'message-circle', route:'/seller/messages' }
])
</script>

<style scoped>
.seller-dashboard { display:flex; height:100vh; }
.main-content { flex:1; display:flex; flex-direction:column; }
.content { flex:1; padding:1rem; overflow:auto; }
</style>
