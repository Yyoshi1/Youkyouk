<template>
  <AdminLayout>
    <template #default>
      <h1>Coupons</h1>
      <button @click="showAdd = true">Add Coupon</button>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Discount</th>
            <th>Type</th>
            <th>Products</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in coupons" :key="c.id">
            <td>{{ c.code }}</td>
            <td>{{ c.discount }}</td>
            <td>{{ c.type }}</td>
            <td>
              <ul>
                <li v-for="p in c.products" :key="p.id">{{ p.name }}</li>
              </ul>
            </td>
            <td>{{ c.active ? 'Active' : 'Inactive' }}</td>
            <td>
              <button @click="editCoupon(c)">Edit</button>
              <button @click="deleteCoupon(c.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="showAdd" class="modal">
        <div class="modal-content">
          <h2>{{ editing ? 'Edit' : 'Add' }} Coupon</h2>
          <input v-model="form.code" placeholder="Code"/>
          <input v-model="form.discount" type="number" placeholder="Discount"/>
          <select v-model="form.type">
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed</option>
          </select>
          <select v-model="form.products" multiple>
            <option v-for="p in products" :value="p.id">{{ p.name }}</option>
          </select>
          <label>
            Active
            <input type="checkbox" v-model="form.active"/>
          </label>
          <button @click="saveCoupon">Save</button>
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

const coupons = ref([])
const products = ref([])
const showAdd = ref(false)
const editing = ref(false)
const form = ref({ id: null, code: '', discount: 0, type: 'percentage', products: [], active: true })

const fetchCoupons = async () => {
  const res = await axios.get('/api/coupons')
  coupons.value = res.data
}

const fetchProducts = async () => {
  const res = await axios.get('/api/products')
  products.value = res.data
}

const saveCoupon = async () => {
  if(editing.value){
    await axios.put(`/api/coupons/${form.value.id}`, form.value)
  } else {
    await axios.post('/api/coupons', form.value)
  }
  showAdd.value = false
  editing.value = false
  form.value = { id: null, code: '', discount: 0, type: 'percentage', products: [], active: true }
  fetchCoupons()
}

const editCoupon = (c) => {
  form.value = { ...c, products: c.products.map(p => p.id) }
  editing.value = true
  showAdd.value = true
}

const deleteCoupon = async (id) => {
  await axios.delete(`/api/coupons/${id}`)
  fetchCoupons()
}

onMounted(() => { fetchCoupons(); fetchProducts() })
</script>

<style scoped>
table { width:100%; border-collapse: collapse; }
th, td { border:1px solid #ccc; padding:0.5rem; }
.modal { position:fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background:white; padding:1rem; border-radius:0.5rem; }
</style>
