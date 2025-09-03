<template>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ product.price }} $</td>
    <td>{{ product.stock }}</td>
    <td><span :class="['status', product.status]">{{ product.status }}</span></td>
    <td>
      <button @click="$emit('edit', product)">Edit</button>
      <button @click="$emit('delete', product.id)">Delete</button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ product: Object })
const emit = defineEmits(['edit', 'delete'])
</script>

<style scoped>
.status.active { background-color: #22c55e; padding: 4px 8px; border-radius: 4px; color:white; text-transform:capitalize; }
.status.inactive { background-color: #ef4444; padding: 4px 8px; border-radius: 4px; color:white; text-transform:capitalize; }
button { padding:4px 8px; margin-right:4px; border:none; border-radius:4px; cursor:pointer; }
button:hover { opacity:0.8; }
</style>
