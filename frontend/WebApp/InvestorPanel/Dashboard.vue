<template>
  <div class="investor-dashboard">
    <Header :title="'Investor Dashboard'" />
    <Sidebar :links="sidebarLinks" />
    <MainContent>
      <InvestorOverview />
    </MainContent>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'
import InvestorOverview from './InvestorOverview.vue'

export default {
  name: 'InvestorDashboard',
  components: { Header, Sidebar, MainContent, InvestorOverview },
  data() {
    return {
      sidebarLinks: [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Reports', path: '/reports' },
        { name: 'Transactions', path: '/transactions' },
      ],
    }
  },
}
</script>

<style scoped>
.investor-dashboard {
  display: flex;
  min-height: 100vh;
}
</style>
