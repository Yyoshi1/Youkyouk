<template>
  <header class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <img src="/logo.png" alt="Youkyouk Logo" class="h-8 w-8">
      <h1 class="text-lg font-semibold text-gray-900 dark:text-white">Youkyouk</h1>
    </div>
    <div class="flex items-center space-x-4">
      <button @click="toggleTheme" class="text-gray-500 dark:text-gray-300">
        <span v-if="isDark">🌞</span>
        <span v-else>🌙</span>
      </button>
      <select v-model="currentLocale" @change="changeLocale" class="rounded border-gray-300 dark:bg-gray-700 dark:text-white p-1">
        <option v-for="lang in availableLocales" :key="lang.code" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
      <img src="/avatar.png" alt="User" class="h-8 w-8 rounded-full">
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
}

// i18n
const { locale } = useI18n()
const currentLocale = ref(locale.value)
const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'sv', name: 'Svenska' },
  { code: 'no', name: 'Norsk' },
  { code: 'da', name: 'Dansk' },
  { code: 'fi', name: 'Suomi' },
  { code: 'pl', name: 'Polski' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu' }
]

const changeLocale = () => {
  locale.value = currentLocale.value
}
</script>

<style scoped>
header {
  transition: all 0.2s ease-in-out;
}
</style>
