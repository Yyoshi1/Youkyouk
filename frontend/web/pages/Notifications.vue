<template>
  <div class="page">
    <h2>Notifications</h2>
    <ul class="notification-list">
      <li v-for="notif in notifications" :key="notif.id">
        {{ notif.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      notifications: [
        { id: 1, message: "New user registered" },
        { id: 2, message: "Project Alpha updated" }
      ]
    };
  }
};
</script>

<style scoped>
.page {
  padding: 24px;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}

.notification-list {
  list-style: none;
  padding: 0;
}

.notification-list li {
  background-color: var(--dropdown-bg);
  padding: 12px;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
