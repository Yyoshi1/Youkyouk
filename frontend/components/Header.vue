<template>
  <header class="header">
    <div class="logo">Youkyouk</div>
    <div class="header-actions">
      <button @click="toggleTheme">Toggle Theme</button>
      <select v-model="currentLanguage" @change="changeLanguage">
        <option v-for="lang in languages" :key="lang.code" :value="lang.code">
          {{ lang.label }}
        </option>
      </select>
      <div class="user-info">
        <span>{{ user.name }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import i18n from '../languages/i18n.js'

export default {
  name: 'Header',
  data() {
    return {
      user: { name: 'John Doe' },
      currentLanguage: 'en',
      languages: [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'French' },
        { code: 'ar', label: 'Arabic' },
        // add more languages here
      ]
    }
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle('dark')
    },
    changeLanguage() {
      i18n.global.locale = this.currentLanguage
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

body.dark .header {
  background-color: #1f2937;
  border-color: #4b5563;
  color: #f3f4f6;
}

.header-actions select,
.header-actions button {
  margin-left: 0.5rem;
}
</style>
