<template>
  <aside class="youkyouk-sidebar">
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([])

onMounted(async () => {
  const res = await axios.get('/api/customer/categories')
  categories.value = res.data
})
</script>

<style scoped>
.youkyouk-sidebar { width:250px; background:#f8f8f8; padding:10px; }
.youkyouk-sidebar ul { list-style:none; padding:0; }
.youkyouk-sidebar li { padding:8px 0; cursor:pointer; }
</style>
