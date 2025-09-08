<template>
  <div class="settings p-4 space-y-6">
    <h2 class="text-xl font-bold">Settings</h2>
    <div class="theme-switcher flex items-center space-x-2">
      <label for="theme">Dark Mode:</label>
      <input type="checkbox" id="theme" v-model="darkMode" @change="toggleTheme">
    </div>
    <div class="language-selector flex items-center space-x-2">
      <label for="language">Language:</label>
      <select id="language" v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const darkMode = ref(false)
const selectedLanguage = ref('en')
const languages = ref([
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'ar', name: 'Arabic' },
  { code: 'es', name: 'Spanish' }
])

const toggleTheme = () => {
  document.body.classList.toggle('dark', darkMode.value)
}

const changeLanguage = () => {
  console.log('Selected language:', selectedLanguage.value)
}
</script>

<style scoped>
.settings label {
  font-weight: 500;
}
</style>
