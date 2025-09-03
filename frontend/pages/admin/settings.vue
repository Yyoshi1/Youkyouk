<template>
  <AdminLayout>
    <template #default>
      <h1>Store Settings</h1>

      <div>
        <label>Store Name</label>
        <input v-model="settings.store_name" placeholder="Store Name"/>
      </div>
      <div>
        <label>Default Currency</label>
        <select v-model="settings.currency">
          <option v-for="c in currencies" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
      <div>
        <label>Default Language</label>
        <select v-model="settings.language">
          <option v-for="l in languages" :key="l" :value="l">{{ l }}</option>
        </select>
      </div>
      <div>
        <label>Enable Maintenance Mode</label>
        <input type="checkbox" v-model="settings.maintenance"/>
      </div>
      <button @click="saveSettings">Save Settings</button>
    </template>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const settings = ref({ store_name:'', currency:'USD', language:'en', maintenance:false })
const currencies
