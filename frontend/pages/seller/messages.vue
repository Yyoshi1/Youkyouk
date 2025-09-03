<template>
  <SellerLayout>
    <template #default>
      <h1>Messages</h1>
      <ul>
        <li v-for="m in messages" :key="m.id">
          <strong>{{ m.sender_name }}:</strong> {{ m.content }}
        </li>
      </ul>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const messages = ref([])

const fetchMessages = async () => {
  const res = await axios.get('/api/seller/messages')
  messages.value = res.data
}

onMounted(fetchMessages)
</script>

<style scoped>
ul { list-style:none; padding:0; }
li { padding:0.5rem 0; border-bottom:1px solid #ddd; }
</style>
