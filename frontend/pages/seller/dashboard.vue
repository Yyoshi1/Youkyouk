<template>
  <div class="youkyouk-dashboard">
    <Header :title="'Dashboard'" :user="sellerUser" @toggle-sidebar="toggleSidebar"/>
    <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar"/>
    <main>
      <h2>Welcome, {{ sellerUser.name }}</h2>

      <!-- Stats Cards -->
      <div class="stats-cards">
        <div class="card">
          <i class="youkyouk-icon-cart"></i>
          <span>Total Orders</span>
          <strong>{{ stats.totalOrders }}</strong>
        </div>
        <div class="card">
          <i class="youkyouk-icon-box"></i>
          <span>Total Products</span>
          <strong>{{ stats.totalProducts }}</strong>
        </div>
        <div class="card">
          <i class="youkyouk-icon-percent"></i>
          <span>Active Promotions</span>
          <strong>{{ stats.activePromotions }}</strong>
        </div>
        <div class="card">
          <i class="youkyouk-icon-message"></i>
          <span>Unread Messages</span>
          <strong>{{ stats.unreadMessages }}</strong>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="recent-orders">
        <h3>Recent Orders</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in recentOrders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.customer.name }}</td>
              <td>{{ order.total }}</td>
              <td>{{ order.status }}</td>
              <td>{{ order.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Recent Messages -->
      <div class="recent-messages">
        <h3>Recent Messages</h3>
        <ul>
          <li v-for="msg in recentMessages" :key="msg.id">
            <strong>{{ msg.from.name }}:</strong> {{ msg.text }}
          </li>
        </ul>
      </div>

    </main>
  </div>
</template>

<script setup>
import Header from '../../components/seller/Header.vue'
import Sidebar from '../../components/seller/Sidebar.vue'
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

<style scoped>
.youkyouk-dashboard { display: flex; }
main { flex: 1; padding: 20px; }

.stats-cards { display: flex; gap: 15px; margin-bottom: 20px; }
.card { background: #fff; padding: 15px; border-radius: 8px; flex: 1; display: flex; flex-direction: column; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.card i { font-size: 24px; margin-bottom: 5px; }

/* Tables */
table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
table th, table td { border: 1px solid #ccc; padding: 8px; text-align: left; }

.recent-messages ul { list-style: none; padding: 0; }
.recent-messages li { padding: 8px; border-bottom: 1px solid #eee; }

/* Youkyouk Icons */
.youkyouk-icon-cart::before { content: "\e900"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-box::before { content: "\e901"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-percent::before { content: "\e902"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-message::before { content: "\e903"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-plus::before { content: "\e904"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-edit::before { content: "\e905"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-trash::before { content: "\e906"; font-family: 'YoukyoukIcons'; }
.youkyouk-icon-save::before { content: "\e907"; font-family: 'YoukyoukIcons'; }
</style>
