<template>
  <div class="youkyouk-dashboard">
    <Header :title="'Dashboard'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <!-- -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
import Footer from '../../components/seller/Footer.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const sellerUser = { id: 1, name: 'Seller', avatar: '/avatar.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => sidebarCollapsed.value = !sidebarCollapsed.value

const stats = reactive({
  totalOrders: 0,
  totalProducts: 0,
  activePromotions: 0,
  unreadMessages: 0
})

const recentOrders = ref([])
const recentMessages = ref([])

const fetchDashboardData = async () => {
  const [statsRes, ordersRes, messagesRes] = await Promise.all([
    axios.get('/api/seller/dashboard/stats'),
    axios.get('/api/seller/orders?recent=true'),
    axios.get('/api/seller/messages?recent=true')
  ])
  Object.assign(stats, statsRes.data)
  recentOrders.value = ordersRes.data
  recentMessages.value = messagesRes.data
}

onMounted(() => fetchDashboardData())
</script>
