<template>
  <AdminLayout>
    <template #default>
      <h1>Users</h1>
      <button @click="showAdd = true">Add User</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add/Edit Modal -->
      <div v-if="showAdd" class="modal">
        <div class="modal-content">
          <h2>{{ editing ? 'Edit' : 'Add' }} User</h2>
          <input v-model="form.name" placeholder="Name"/>
          <input v-model="form.email" placeholder="Email"/>
          <input v-model="form.password" type="password" placeholder="Password" v-if="!editing"/>
          <select v-model="form.role">
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>
          <button @click="saveUser">Save</button>
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

const users = ref([])
const showAdd = ref(false)
const editing = ref(false)
const form = ref({ id: null, name: '', email: '', password: '', role: 'customer' })

const fetchUsers = async () => {
  const res = await axios.get('/api/users')
  users.value = res.data
}

const saveUser = async () => {
  if(editing.value){
    await axios.put(`/api/users/${form.value.id}`, form.value)
  } else {
    await axios.post('/api/users', form.value)
  }
  showAdd.value = false
  editing.value = false
  form.value = { id: null, name: '', email: '', password: '', role: 'customer' }
  fetchUsers()
}

const editUser = (u) => {
  form.value = { ...u }
  editing.value = true
  showAdd.value = true
}

const deleteUser = async (id) => {
  await axios.delete(`/api/users/${id}`)
  fetchUsers()
}

onMounted(fetchUsers)
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 0.5rem; }
.modal { position: fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background:white; padding:1rem; border-radius:0.5rem; }
</style>
