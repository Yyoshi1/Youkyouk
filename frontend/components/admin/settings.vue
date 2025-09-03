<template>
  <div class="admin-settings">
    <Header :title="'Settings'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <h2>Settings</h2>
      <form @submit.prevent="save">
        <div class="row">
          <label>Site Name</label>
          <input v-model="form.site_name" type="text" />
        </div>
        <div class="row">
          <label>Default Currency</label>
          <input v-model="form.currency" type="text" />
        </div>
        <div class="row">
          <label>Support Email</label>
          <input v-model="form.support_email" type="email" />
        </div>
        <button type="submit"><i class="linear-icon-check"></i> Save</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const adminUser = { id: 1, name: 'Admin', avatar: '/avatars/admin.png' }
const sidebarCollapsed = ref(false)
const toggleSidebar = () => (sidebarCollapsed.value = !sidebarCollapsed.value)
const addons = ref([
  { id: 1, name: 'Dashboard', route: '/admin/dashboard', enabled: true, icon: 'linear-icon-speedometer' },
  { id: 2, name: 'Products', route: '/admin/products', enabled: true, icon: 'linear-icon-box' },
  { id: 3, name: 'Categories', route: '/admin/categories', enabled: true, icon: 'linear-icon-tag' },
  { id: 4, name: 'Orders', route: '/admin/orders', enabled: true, icon: 'linear-icon-basket' },
  { id: 5, name: 'Users', route: '/admin/users', enabled: true, icon: 'linear-icon-people' },
  { id: 6, name: 'Vendors', route: '/admin/vendors', enabled: true, icon: 'linear-icon-store' },
  { id: 7, name: 'Marketing', route: '/admin/marketing', enabled: true, icon: 'linear-icon-megaphone' },
  { id: 8, name: 'Settings', route: '/admin/settings', enabled: true, icon: 'linear-icon-cog' },
  { id: 9, name: 'Reports', route: '/admin/reports', enabled: true, icon: 'linear-icon-doc-text' },
])

const form = reactive({ site_name: '', currency: '', support_email: '' })

const fetchSettings = async () => {
  const { data } = await axios.get('/api/admin/settings')
  Object.assign(form, data)
}

const save = async () => {
  await axios.post('/api/admin/settings', form)
  alert('Settings saved')
}

onMounted(fetchSettings)
</script>

<style scoped>
main { padding: 20px; max-width: 600px; }
.row { display: flex; flex-direction: column; margin-bottom: 12px; }
label { font-weight: 600; margin-bottom: 6px; }
input { padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; }
button { margin-top: 10px; padding: 10px 14px; background: #2563eb; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
</style>
