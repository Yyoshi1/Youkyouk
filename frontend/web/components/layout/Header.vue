<template>
  <header class="header">
    <div class="left-section">
      <!-- Logo: default Linear style, replaceable -->
      <a href="/" class="logo-wrapper">
        <img :src="logoIcon" alt="Logo Icon" class="logo-icon" />
        <span class="logo-text">{{ logoText }}</span>
      </a>

      <!-- Search -->
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search..." />
        <button @click="performSearch">
          <i class="icon-search"></i>
        </button>
      </div>
    </div>

    <div class="right-section">
      <!-- Notifications -->
      <div class="notifications" @click="toggleNotifications">
        <i class="icon-bell"></i>
        <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
      </div>

      <!-- Language Selector -->
      <div class="language-selector">
        <select v-model="currentLanguage" @change="changeLanguage">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ar">AR</option>
        </select>
      </div>

      <!-- Theme Switch -->
      <div class="theme-switch" @click="toggleTheme">
        <i :class="themeIcon"></i>
      </div>

      <!-- User Profile -->
      <div class="user-profile">
        <img :src="user.avatar" alt="User Avatar" class="avatar" />
        <span class="username">{{ user.name }}</span>
        <i class="icon-arrow-down"></i>

        <!-- Dropdown -->
        <ul class="dropdown">
          <li @click="goToProfile">Profile</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    logoIcon: {
      type: String,
      default: "/assets/images/linear-logo-icon.png" // Default Linear-style icon
    },
    logoText: {
      type: String,
      default: "Youkyouk" // Default text, can be customized
    }
  },
  data() {
    return {
      searchQuery: "",
      unreadCount: 0,
      currentLanguage: "fr",
      theme: "light",
      user: {
        name: "Administrator",
        avatar: "/assets/images/avatar.png"
      }
    };
  },
  computed: {
    themeIcon() {
      return this.theme === "light" ? "icon-sun" : "icon-moon";
    }
  },
  methods: {
    performSearch() {
      console.log("Search for:", this.searchQuery);
    },
    toggleNotifications() {
      console.log("Toggle notifications");
    },
    changeLanguage() {
      console.log("Language changed to", this.currentLanguage);
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", this.theme);
    },
    goToProfile() {
      console.log("Navigate to profile page");
    },
    logout() {
      console.log("Logging out...");
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 64px;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}

.left-section {
  display: flex;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-icon {
  height: 32px;
  margin-right: 8px;
}

.logo-text {
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color);
}

.search-bar {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.search-bar input {
  padding: 6px 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-bar button {
  padding: 6px 10px;
  border: 1px solid var(--border-color);
  border-left: none;
  background-color: var(--button-bg);
  color: var(--button-color);
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

.right-section {
  display: flex;
  align-items: center;
}

/* Notifications, language, theme, user profile styles remain unchanged */
</style>
