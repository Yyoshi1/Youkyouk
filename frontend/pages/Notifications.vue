<template>
  <div class="notifications-page">
    <h1>Notifications</h1>
    <ul>
      <li v-for="note in notifications" :key="note.id">{{ note.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotificationsPage',
  data() {
    return {
      notifications: [
        { id: 1, message: 'Welcome to Youkyouk!' },
        { id: 2, message: 'Your first task is assigned.' }
      ]
    }
  }
}
</script>

<style scoped>
.notifications-page {
  padding: 1rem;
}
</style>
