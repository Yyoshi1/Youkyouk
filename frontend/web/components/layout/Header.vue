<template>
  <header class="header">
    <div class="left-section">
      <!-- Logo (Linear style, replaceable by user) -->
      <a href="/" class="logo-wrapper">
        <img :src="logoIcon" alt="Logo Icon" class="logo-icon" />
        <span class="logo-text">{{ logoText }}</span>
      </a>

      <!-- Search -->
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search..." />
        <button @click="performSearch">
          <img src="/assets/icons/search.svg" alt="Search Icon" />
        </button>
      </div>
    </div>

    <div class="right-section">
      <!-- Notifications -->
      <div class="notifications" @click="toggleNotifications">
        <img src="/assets/icons/bell.svg" alt="Notifications" />
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
        <img :src="themeIcon" alt="Theme Icon" />
      </div>

      <!-- User Profile -->
      <div class="user-profile">
        <img :src="user.avatar" alt="User Avatar" class="avatar" />
        <span class="username">{{ user.name }}</span>
        <img src="/assets/icons/arrow-down.svg" alt="Dropdown" />

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
      default: "/assets/images/linear-logo-icon.png" // Linear-style icon
    },
    logoText: {
      type: String,
      default: "Youkyouk"
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
      return this.theme === "light"
        ? "/assets/icons/sun.svg"
        : "/assets/icons/moon.svg";
    }
  },
  methods: {
    performSearch() {
      console.log("Search:", this.searchQuery);
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
@import url('/assets/fonts/inter.css');

:root[data-theme="light"] {
  --header-bg: #ffffff;
  --text-color: #1f1f1f;
  --button-bg: #f0f0f0;
  --button-color: #1f1f1f;
  --border-color: #e0e0e0;
  --dropdown-bg: #ffffff;
  --dropdown-hover: #f5f5f5;
}

:root[data-theme="dark"] {
  --header-bg: #1f1f1f;
  --text-color: #ffffff;
  --button-bg: #2c2c2c;
  --button-color: #ffffff;
  --border-color: #3a3a3a;
  --dropdown-bg: #2c2c2c;
  --dropdown-hover: #3a3a3a;
}

.header {
  font-family: 'Inter', sans-serif;
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

.notifications {
  position: relative;
  margin-right: 16px;
  cursor: pointer;
}

.notifications .badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.language-selector select {
  margin-right: 16px;
  padding: 4px;
}

.theme-switch {
  margin-right: 16px;
  cursor: pointer;
}

.user-profile {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-profile .avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.user-profile .dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--dropdown-bg);
  border: 1px solid var(--border-color);
  list-style: none;
  padding: 8px 0;
  display: none;
  min-width: 120px;
  z-index: 100;
}

.user-profile:hover .dropdown {
  display: block;
}

.user-profile .dropdown li {
  padding: 6px 16px;
  cursor: pointer;
}

.user-profile .dropdown li:hover {
  background-color: var(--dropdown-hover);
}
</style>
