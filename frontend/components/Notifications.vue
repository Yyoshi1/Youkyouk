<template>
  <div class="notifications-component">
    <button @click="toggleNotifications">
      🔔 <span v-if="unreadCount > 0">{{ unreadCount }}</span>
    </button>
    <div v-if="showNotifications" class="dropdown">
      <ul>
        <li v-for="note in notifications" :key="note.id">{{ note.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsComponent',
  data() {
    return {
      notifications: [
        { id: 1, message: 'Welcome to Youkyouk!' },
        { id: 2, message: 'Your first task is assigned.' }
      ],
      unreadCount: 2,
      showNotifications: false
    }
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  min-width: 180px;
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
</style>
