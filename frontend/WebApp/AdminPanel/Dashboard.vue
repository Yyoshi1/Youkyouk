<template>
  <div class="dashboard">
    <Header :title="'Admin Dashboard'" />
    <Sidebar :links="sidebarLinks" />
    <MainContent>
      <AdminOverview />
    </MainContent>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'
import AdminOverview from './AdminOverview.vue'

export default {
  name: 'AdminDashboard',
  components: { Header, Sidebar, MainContent, AdminOverview },
  data() {
    return {
      sidebarLinks: [
        { name: 'Trips', path: '/trips' },
        { name: 'Users', path: '/users' },
        { name: 'Investors', path: '/investors' },
        { name: 'Updates', path: '/updates' },
        { name: 'Logs', path: '/logs' },
      ],
    }
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
}
</style>
