<template>
  <div :class="{ dark: isDarkMode }">
    <Header @toggle-dark="toggleDarkMode"/>
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Header, Sidebar },
  data() {
    return { isDarkMode: false }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    }
  }
}
</script>

<style src="./style.css"></style>
