<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Order #{{ order.id }}</h2>
      <p>Customer: {{ order.customer_name }}</p>
      <p>Total: {{ order.total }} $</p>
      <p>Status: {{ order.status }}</p>
      
      <h3>Products</h3>
      <ul>
        <li v-for="item in order.items" :key="item.id">
          {{ item.product_name }} - Qty: {{ item.quantity }} - Price: {{ item.price }} $
        </li>
      </ul>

      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ order:Object })
</script>

<style scoped>
.modal { position:fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background-color: var(--color-card-bg); padding:20px; border-radius: var(--border-radius); width:400px; box-shadow: var(--shadow-card); }
body.dark-mode .modal-content { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
button { padding:8px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; margin-top:10px; }
button:hover { opacity:0.9; }
</style>
