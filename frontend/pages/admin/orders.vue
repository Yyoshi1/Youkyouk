<template>
  <AdminLayout>
    <template #default>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Products</th>
            <th>Total</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.user.name }}</td>
            <td>
              <ul>
                <li v-for="item in order.items" :key="item.id">{{ item.product.name }} x {{ item.quantity }}</li>
              </ul>
            </td>
            <td>{{ order.total }}</td>
            <td>{{ order.status }}</td>
            <td>{{ new Date(order.created_at).toLocaleString() }}</td>
            <td>
              <button @click="viewOrder(order)">View</button>
              <button @click="updateStatus(order)">Update Status</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal View Order -->
      <div v-if="showView" class="modal">
        <div class="modal-content">
          <h2>Order #{{ currentOrder.id }}</h2>
          <p>Customer: {{ currentOrder.user.name }}</p>
          <ul>
            <li v-for="item in currentOrder.items" :key="item.id">
              {{ item.product.name }} x {{ item.quantity }} = {{ item.price }}
            </li>
          </ul>
          <p>Total: {{ currentOrder.total }}</p>
          <button @click="showView = false">Close</button>
        </div>
      </div>

      <!-- Modal Update Status -->
      <div v-if="showUpdate" class="modal">
        <div class="modal-content">
          <h2>Update Order Status</h2>
          <select v-model="status">
            <option>Pending</option>
            <option>Processing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <button @click="saveStatus">Save</button>
          <button @click="showUpdate = false">Cancel</button>
        </div>
      </div>

    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const orders = ref([])
const showView = ref(false)
const showUpdate = ref(false)
const currentOrder = ref({})
const status = ref('Pending')

const fetchOrders = async () => {
  const res = await axios.get('/api/orders')
  orders.value = res.data
}

const viewOrder = (order) => {
  currentOrder.value = order
  showView.value = true
}

const updateStatus = (order) => {
  currentOrder.value = order
  status.value = order.status
  showUpdate.value = true
}

const saveStatus = async () => {
  await axios.put(`/api/orders/${currentOrder.value.id}`, { status: status.value })
  showUpdate.value = false
  fetchOrders()
}

onMounted(fetchOrders)
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 0.5rem; }
.modal {
  position: fixed; top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.5); display:flex;
  justify-content:center; align-items:center;
}
.modal-content { background:white; padding:1rem; border-radius:0.5rem; }
</style>
