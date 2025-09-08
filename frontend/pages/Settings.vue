<template>
  <div class="settings-page">
    <h1>Settings</h1>
    <div>
      <label>
        Theme:
        <select v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Language:
        <select v-model="language">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      theme: 'light',
      language: 'en'
    }
  },
  watch: {
    theme(newVal) {
      document.body.className = newVal === 'dark' ? 'dark' : '';
    }
  }
}
</script>

<style scoped>
.settings-page {
  padding: 2rem;
}
</style>
