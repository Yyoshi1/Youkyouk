<template>
  <div>
    <component v-for="addon in addons" 
               :is="addon.component" 
               v-if="addon.enabled" 
               :key="addon.id" 
               :config="addon.config"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const addons = ref([])

onMounted(async () => {
  const res = await axios.get('/api/youkyouk/page-layout')
  addons.value = res.data
})
</script>
