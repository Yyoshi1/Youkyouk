<template>
  <div class="admin-products">
    <Header :title="'Products'" :user="adminUser" @toggle-sidebar="toggleSidebar" />
    <Sidebar :collapsed="sidebarCollapsed" :addons="addons" @toggle="toggleSidebar" />
    <main>
      <div class="toolbar">
        <h2>Products</h2>
        <div>
          <input v-model="query" placeholder="Search products..." />
          <button @click="fetchProducts"><i class="linear-icon-refresh"></i> Refresh</button>
          <button @click="createProduct"><i class="linear-icon-plus"></i> Add Product</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Vendor</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.vendor?.name || '-' }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.stock }}</td>
            <td>{{ p.status }}</td>
            <td class="actions">
              <button @click="editProduct(p)"><i class="linear-icon-pencil"></i></button>
              <button @click="toggleStatus(p)"><i class="linear-icon-power"></i></button>
              <button @click="deleteProduct(p)"><i class="linear-icon-trash"></i></button>
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

const products = ref([])
const query = ref('')

const fetchProducts = async () => {
  const { data } = await axios.get('/api/admin/products', { params: { q: query.value } })
  products.value = data
}

const createProduct = () => alert('Open create product modal')
const editProduct = (p) => alert(`Edit product #${p.id}`)
const toggleStatus = async (p) => alert(`Toggle status for #${p.id}`)
const deleteProduct = async (p) => alert(`Delete #${p.id}`)

onMounted(fetchProducts)
</script>

<style scoped>
main { padding: 20px; }
.toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 10px; }
.toolbar input { padding: 8px; border: 1px solid #ccc; border-radius: 6px; }
.toolbar button { margin-left: 6px; padding: 8px 12px; border: none; border-radius: 6px; background: #2563eb; color: #fff; cursor: pointer; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 10px; border: 1px solid #e5e7eb; text-align: left; }
.actions button { margin-right: 6px; background: #111827; color: #fff; border: none; padding: 6px 8px; border-radius: 6px; cursor: pointer; }
</style>
