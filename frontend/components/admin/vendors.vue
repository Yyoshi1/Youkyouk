<template>
  <Layout :admin="admin" :addons="addons">
    <h2>Vendors</h2>
    <button @click="addVendor"><i class="linear-icon-plus"></i> Add Vendor</button>
    <table>
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
      </thead>
      <tbody>
        <tr v-for="vendor in vendors" :key="vendor.id">
          <td>{{ vendor.id }}</td>
          <td>{{ vendor.name }}</td>
          <td>{{ vendor.email }}</td>
          <td>{{ vendor.status }}</td>
          <td>
            <button @click="editVendor(vendor)"><i class="linear-icon-pencil"></i></button>
            <button @click="deleteVendor(vendor)"><i class="linear-icon-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import { ref, onMounted } from 'vue'
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

const vendors = ref([])

const fetchVendors = async () => {
  const res = await axios.get('/api/admin/vendors')
  vendors.value = res.data
}

const addVendor = () => console.log('Add vendor')
const editVendor = (v) => console.log('Edit', v)
const deleteVendor = (v) => console.log('Delete', v)

onMounted(() => fetchVendors())
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
button { margin-right: 5px; }
.linear-icon-plus::before { content: "\e900"; font-family: 'LinearIcons'; margin-right: 5px; }
.linear-icon-pencil::before { content: "\e901"; font-family: 'LinearIcons'; }
.linear-icon-trash::before { content: "\e902"; font-family: 'LinearIcons'; }
</style>
