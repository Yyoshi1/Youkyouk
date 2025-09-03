<template>
  <Layout :admin="admin" :addons="addons">
    <h2>Settings</h2>
    <form @submit.prevent="saveSettings">
      <div v-for="(value, key) in settings" :key="key" class="form-group">
        <label :for="key">{{ key }}</label>
        <input :id="key" v-model="settings[key]" type="text"/>
      </div>
      <button type="submit"><i class="linear-icon-check"></i> Save</button>
    </form>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { reactive, onMounted } from 'vue'
import axios from 'axios'

const admin = { name: 'Admin User', avatar: '/avatars/admin.png' }
const addons = ref([
  { id: 1, name: 'Dashboard', enabled: true },
  { id: 2, name: 'Products', enabled: true },
  { id: 3, name: 'Categories', enabled: true },
  { id: 4, name: 'Orders', enabled: true },
  { id: 5, name: 'Users', enabled: true },
  { id: 6, name: 'Vendors', enabled: true },
  { id: 7, name: 'Marketing', enabled: true },
  { id: 8, name: 'Reports', enabled: true },
  { id: 9, name: 'Settings', enabled: true },
])

const settings = reactive({ siteName: '', defaultCurrency: '', supportEmail: '' })

const fetchSettings = async () => {
  const res = await axios.get('/api/admin/settings')
  Object.assign(settings, res.data)
}

const saveSettings = async () => {
  await axios.post('/api/admin/settings', settings)
  alert('Settings saved!')
}

onMounted(() => fetchSettings())
</script>

<style scoped>
.form-group { margin-bottom: 10px; }
label { display: block; margin-bottom: 5px; }
input { width: 100%; padding: 8px; box-sizing: border-box; }
button { margin-top: 10px; }
.linear-icon-check::before { content: "\e903"; font-family: 'LinearIcons'; margin-right: 5px; }
</style>
