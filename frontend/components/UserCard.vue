<template>
  <div class="user-card">
    <img :src="user.avatar" alt="Avatar" class="avatar"/>
    <h4>{{ user.name }}</h4>
    <p>Role: {{ user.role }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  }
}
</script>

<style scoped>
.user-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}

body.dark .user-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>
