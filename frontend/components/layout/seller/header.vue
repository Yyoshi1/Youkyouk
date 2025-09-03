<template>
  <header class="header">
    <div class="left">
      <input type="text" placeholder="Search products..." v-model="search" />
    </div>
    <div class="right">
      <button @click="toggleDark">🌙</button>
      <img :src="user.avatar || '/default-avatar.png'" class="avatar" />
      <span>{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({ user:Object })
const search = ref('')

const toggleDark = () => {
  document.body.classList.toggle('dark-mode')
}
</script>

<style scoped>
.header { display:flex; justify-content:space-between; align-items:center; padding:1rem; background:#f5f5f5; }
.header .left input { padding:0.5rem; width:200px; }
.header .right { display:flex; align-items:center; gap:0.5rem; }
.avatar { width:32px; height:32px; border-radius:50%; }
</style>
