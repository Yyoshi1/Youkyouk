<template>
  <div :class="{ dark: isDark }">
    <Header @toggleTheme="toggleTheme"/>
    <div class="flex">
      <Sidebar/>
      <main class="flex-1">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Header, Sidebar },
  data() {
    return { isDark: false }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
    }
  }
}
</script>
