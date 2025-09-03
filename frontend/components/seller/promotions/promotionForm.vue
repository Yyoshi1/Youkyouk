<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ promotion ? 'Edit Promotion' : 'Add Promotion' }}</h2>
      <form @submit.prevent="save">
        <label>Title</label>
        <input type="text" v-model="form.title" required />

        <label>Type</label>
        <select v-model="form.type">
          <option value="banner">Banner</option>
          <option value="coupon">Coupon</option>
          <option value="discount">Discount</option>
        </select>

        <label>Discount %</label>
        <input type="number" v-model="form.discount" min="0" max="100" required />

        <label>Status</label>
        <select v-model="form.active">
          <option :value="true">Active</option>
          <option :value="false">Inactive</option>
        </select>

        <div class="actions">
          <button type="submit">Save</button>
          <button type="button" @click="$emit('close')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import axios from 'axios'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({ promotion: Object })
const emit = defineEmits(['close', 'saved'])

const form = reactive({
  title: '',
  type: 'banner',
  discount: 0,
  active: true
})

watch(() => props.promotion, (newVal) => {
  if (newVal) Object.assign(form, newVal)
})

const save = async () => {
  try {
    if (props.promotion) {
      await axios.put(`/api/seller/1/promotions/${props.promotion.id}`, form)
    } else {
      await axios.post('/api/seller/1/promotions', form)
    }
    emit('saved')
    emit('close')
  } catch (err) { console.error(err) }
}
</script>

<style scoped>
.modal { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background-color: var(--color-card-bg); padding:20px; border-radius: var(--border-radius); width:400px; box-shadow: var(--shadow-card); }
body.dark-mode .modal-content { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
label { display:block; margin-top:10px; margin-bottom:4px; font-weight:bold; }
input, select { width:100%; padding:8px; border-radius:4px; border:1px solid #d1d5db; }
.actions { display:flex; justify-content:flex-end; gap:10px; margin-top:20px; }
.actions button { padding:8px 12px; border:none; border-radius:6px; cursor:pointer; }
.actions button[type="submit"] { background-color: var(--color-primary); color:white; }
.actions button[type="submit"]:hover { background-color: var(--color-primary-hover); }
.actions button[type="button"] { background-color:#6b7280; color:white; }
.actions button[type="button"]:hover { background-color:#4b5563; }
</style>
