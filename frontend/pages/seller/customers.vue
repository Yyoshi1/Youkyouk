<template>
  <SellerLayout>
    <template #default>
      <h1>Customers</h1>
      <ul>
        <li v-for="c in customers" :key="c.id">{{ c.name }} - {{ c.email }}</li>
      </ul>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const customers = ref([])

const fetchCustomers = async () => {
  const res = await axios.get('/api/seller/customers')
  customers.value = res.data
}

onMounted(fetchCustomers)
</script>

<style scoped>
ul { list-style:none; padding:0; }
li { padding:0.5rem 0; border-bottom:1px solid #ddd; }
</style>
