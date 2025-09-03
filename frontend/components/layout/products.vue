<template>
  <AdminLayout>
    <template #default>
      <h1>Products</h1>
      <button @click="showAdd = true">Add Product</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add/Edit Modal -->
      <div v-if="showAdd" class="modal">
        <div class="modal-content">
          <h2>{{ editing ? 'Edit' : 'Add' }} Product</h2>
          <input v-model="form.name" placeholder="Name"/>
          <input v-model="form.price" type="number" placeholder="Price"/>
          <input v-model="form.stock" type="number" placeholder="Stock"/>
          <button @click="saveProduct">Save</button>
          <button @click="showAdd = false">Cancel</button>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const showAdd = ref(false)
const editing = ref(false)
const form = ref({ id: null, name: '', price: 0, stock: 0 })

const fetchProducts = async () => {
  const res = await axios.get('/api/products')
  products.value = res.data
}

const saveProduct = async () => {
  if(editing.value){
    await axios.put(`/api/products/${form.value.id}`, form.value)
  } else {
    await axios.post('/api/products', form.value)
  }
  showAdd.value = false
  form.value = { id: null, name: '', price: 0, stock: 0 }
  editing.value = false
  fetchProducts()
}

const editProduct = (p) => {
  form.value = { ...p }
  editing.value = true
  showAdd.value = true
}

const deleteProduct = async (id) => {
  await axios.delete(`/api/products/${id}`)
  fetchProducts()
}

onMounted(() => fetchProducts())
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
.modal {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
}
.modal-content {
  background:white;
  padding:1rem;
  border-radius:0.5rem;
}
</style>
