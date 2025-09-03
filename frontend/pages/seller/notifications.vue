<template>
  <SellerLayout>
    <template #default>
      <h1>Notifications</h1>
      <ul>
        <li v-for="n in notifications" :key="n.id">
          {{ n.message }} - {{ n.date }}
        </li>
      </ul>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const notifications = ref([])

const fetchNotifications = async () => {
  const res = await axios.get('/api/seller/notifications')
  notifications.value = res.data
}

onMounted(fetchNotifications)
</script>

<style scoped>
ul { list-style:none; padding:0; }
li { padding:0.5rem 0; border-bottom:1px solid #ddd; }
</style>
