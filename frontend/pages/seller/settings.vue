<template>
  <SellerLayout>
    <template #default>
      <h1>Settings</h1>
      <form @submit.prevent="saveSettings">
        <div>
          <label>Name:</label>
          <input v-model="settings.name" />
        </div>
        <div>
          <label>Email:</label>
          <input v-model="settings.email" />
        </div>
        <div>
          <label>Store Name:</label>
          <input v-model="settings.store_name" />
        </div>
        <button type="submit">Save</button>
      </form>
    </template>
  </SellerLayout>
</template>

<script setup>
import SellerLayout from '../../components/layout/seller/SellerLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const settings = ref({ name:'', email:'', store_name:'' })

const fetchSettings = async () => {
  const res = await axios.get('/api/seller/settings')
  settings.value = res.data
}

const saveSettings = async () => {
  await axios.put('/api/seller/settings', settings.value)
  alert('Settings saved!')
}

onMounted(fetchSettings)
</script>

<style scoped>
form div { margin-bottom:1rem; }
label { display:block; margin-bottom:0.25rem; }
input { padding:0.5rem; width:100%; }
button { padding:0.5rem 1rem; }
</style>
