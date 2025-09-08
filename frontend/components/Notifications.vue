<template>
  <div class="notifications">
    <h3>Notifications</h3>
    <ul>
      <li v-for="note in notifications" :key="note.id">
        {{ note.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  data() {
    return {
      notifications: [
        { id: 1, message: 'New task assigned' },
        { id: 2, message: 'Project updated' }
      ]
    }
  }
}
</script>

<style scoped>
.notifications {
  padding: 1rem;
  background-color: #f9fafb;
  border: 1px solid #ddd;
  border-radius: 6px;
}

body.dark .notifications {
  background-color: #1f2937;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
