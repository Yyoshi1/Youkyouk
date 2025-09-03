<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Order #{{ order.id }}</h2>
      <p><strong>Customer:</strong> {{ order.customer.name }}</p>
      <p><strong>Total:</strong> {{ order.total }} $</p>
      <p><strong>Status:</strong> <span :class="['status', order.status]">{{ order.status }}</span></p>
      <h3>Items</h3>
      <ul>
        <li v-for="item in order.items" :key="item.id">{{ item.product_name }} x{{ item.quantity }} - {{ item.price }} $</li>
      </ul>
      <div class="actions">
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ order: Object })
</script>

<style scoped>
.modal { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background-color: var(--color-card-bg); padding: 20px; border-radius: var(--border-radius); width: 400px; box-shadow: var(--shadow-card); }
body.dark-mode .modal-content { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
.status.pending { background-color: #fbbf24; padding:4px 8px; border-radius:4px; color:white; }
.status.completed { background-color: #22c55e; padding:4px 8px; border-radius:4px; color:white; }
.status.cancelled { background-color: #ef4444; padding:4px 8px; border-radius:4px; color:white; }
.actions { display:flex; justify-content:flex-end; margin-top:20px; }
.actions button { padding:8px 12px; border:none; border-radius:6px; cursor:pointer; background-color:#6b7280; color:white; }
.actions button:hover { background-color:#4b5563; }
</style>
