<template>
  <div class="layout">
    <YoukyoukSidebar />
    <div class="main-content">
      <YoukyoukHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import YoukyoukHeader from './Header.vue'
import YoukyoukSidebar from './Sidebar.vue'

export default {
  name: 'Layout',
  components: {
    YoukyoukHeader,
    YoukyoukSidebar
  }
}
</script>

<style scoped>
.layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>
