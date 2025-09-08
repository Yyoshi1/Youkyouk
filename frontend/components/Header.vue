<template>
  <header class="header">
    <div class="header-left">
      <img src="/assets/logo.png" alt="Youkyouk Logo" class="logo" />
      <input type="text" placeholder="Search..." class="search-input" />
    </div>
    <div class="header-right">
      <!-- Language selector -->
      <div class="language-selector">
        <button @click="toggleLanguageMenu">{{ currentLanguage.toUpperCase() }} ⬇️</button>
        <div v-if="showLanguageMenu" class="dropdown">
          <ul>
            <li v-for="lang in languages" :key="lang" @click="setLanguage(lang)">
              {{ lang.toUpperCase() }}
            </li>
          </ul>
        </div>
      </div>

      <button class="theme-toggle" @click="toggleTheme">
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
      </button>

      <div class="notifications">
        <button @click="toggleNotifications">
          🔔
          <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
        </button>
        <div v-if="showNotifications" class="dropdown">
          <ul>
            <li v-for="note in notifications" :key="note.id">{{ note.message }}</li>
          </ul>
        </div>
      </div>

      <div class="user-menu">
        <button @click="toggleUserMenu">
          <img :src="user.avatar" alt="User Avatar" class="avatar" />
          {{ user.name }}
        </button>
        <div v-if="showUserMenu" class="dropdown">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li @click="logout">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import i18n from '../languages/i18n.js'

export default {
  name: 'YoukyoukHeader',
  data() {
    return {
      user: {
        name: 'John Doe',
        avatar: '/assets/avatar.png'
      },
      notifications: [
        { id: 1, message: 'Welcome to Youkyouk!' },
        { id: 2, message: 'Your first task is assigned.' }
      ],
      unreadCount: 2,
      showNotifications: false,
      showUserMenu: false,
      isDark: false,
      languages: Object.keys(i18n.global.messages),
      currentLanguage: 'en',
      showLanguageMenu: false
    }
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      document.body.classList.toggle('dark', this.isDark);
    },
    logout() {
      alert('Logging out...');
    },
    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu;
    },
    setLanguage(lang) {
      this.currentLanguage = lang;
      i18n.global.locale = lang;
      this.showLanguageMenu = false;
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

body.dark .header {
  background-color: #1f2937;
  border-color: #4b5563;
  color: #f3f4f6;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 1rem;
}

.search-input {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1rem;
}

.avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.dropdown {
  position: absolute;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  min-width: 160px;
  z-index: 100;
}

body.dark .dropdown {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f3f4f6;
}

body.dark .dropdown li:hover {
  background-color: #4b5563;
}

/* Language selector */
.language-selector {
  position: relative;
}
</style>
