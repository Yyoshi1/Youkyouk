<template>
  <div class="admin-categories">
    <Header :title="'Categories'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <div class="toolbar">
        <h2>Categories</h2>
        <div>
          <button @click="createCategory"><i class="linear-icon-plus"></i> Add Category</button>
        </div>
      </div>

      <table>
        <thead>
          <tr><th>#</th><th>Name</th><th>Parent</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="c in categories" :key="c.id">
            <td>{{ c.id }}</td>
            <td>{{ c.name }}</td>
            <td>{{ c.parent_name || '-' }}</td>
            <td>{{ c.status }}</td>
            <td class="actions">
              <button @click="editCategory(c)"><i class="linear-icon-pencil"></i></button>
              <button @click="deleteCategory(c)"><i class="linear-icon-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import { ref, onMounted } from 'vue'
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

const categories = ref([])

const fetchCategories = async () => {
  const { data } = await axios.get('/api/admin/categories')
  categories.value = data
}

const createCategory = () => alert('Open create category modal')
const editCategory = (c) => alert(`Edit category #${c.id}`)
const deleteCategory = (c) => alert(`Delete category #${c.id}`)

onMounted(fetchCategories)
</script>

<style scoped>
main { padding: 20px; }
.toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.toolbar button { padding: 8px 12px; border: none; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #e5e7eb; text-align: left; }
.actions button { margin-right: 6px; background: #111827; color: #fff; border: none; padding: 6px 8px; border-radius: 6px; cursor: pointer; }
</style>
