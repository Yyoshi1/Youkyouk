<template>
  <div class="settings">
    <Header :title="'Settings'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>

    <section class="account-settings">
      <h2>Account</h2>
      <form @submit.prevent="updateAccount">
        <label>Name:</label>
        <input v-model="form.name" required/>
        <label>Email:</label>
        <input v-model="form.email" type="email" required/>
        <button type="submit">Update Account</button>
      </form>
    </section>

    <section class="store-settings">
      <h2>Store</h2>
      <form @submit.prevent="updateStore">
        <label>Store Name:</label>
        <input v-model="form.store_name" required/>
        <label>Description:</label>
        <textarea v-model="form.store_description"></textarea>
        <label>Policy:</label>
        <textarea v-model="form.store_policy"></textarea>
        <button type="submit">Update Store</button>
      </form>
    </section>

    <section class="addons-settings">
      <h2>Add-ons</h2>
      <ul>
        <li v-for="addon in addons" :key="addon.id">
          <input type="checkbox" v-model="addon.enabled" @change="toggleAddon(addon)"/>
          {{ addon.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import Header from '../layout/Header.vue'

const seller = ref({ name:'Seller', avatar:'/avatar.png' })
const form = reactive({ name:'', email:'', store_name:'', store_description:'', store_policy:'' })
const addons = ref([])

const toggleTheme = () => document.body.classList.toggle('dark-mode')
const toggleSidebar = () => {}

const fetchSettings = async () => {
  try {
    const res = await axios.get('/api/seller/1/settings')
    Object.assign(form, res.data)
  } catch(err){ console.error(err) }
}

const fetchAddons = async () => {
  try {
    const res = await axios.get('/api/seller/1/addons')
    addons.value = res.data
  } catch(err){ console.error(err) }
}

const updateAccount = async () => {
  await axios.put('/api/seller/1/account', { name: form.name, email: form.email })
  alert('Account updated!')
}

const updateStore = async () => {
  await axios.put('/api/seller/1/store', { store_name: form.store_name, store_description: form.store_description, store_policy: form.store_policy })
  alert('Store settings updated!')
}

const toggleAddon = async (addon) => {
  await axios.put(`/api/seller/1/addons/${addon.id}`, { enabled: addon.enabled })
}

onMounted(() => { fetchSettings(); fetchAddons() })
</script>

<style scoped>
.settings { padding:20px; margin-left:250px; display:flex; flex-direction:column; gap:20px; }
form { display:flex; flex-direction:column; gap:10px; }
input, textarea { padding:6px; border-radius:4px; border:1px solid #d1d5db; }
button { padding:6px 12px; border:none; border-radius:6px; background-color:#3b82f6; color:white; cursor:pointer; }
button:hover { opacity:0.9; }
ul { list-style:none; padding:0; }
li { display:flex; align-items:center; gap:10px; margin-bottom:6px; }
body.dark-mode input, body.dark-mode textarea { background-color:#374151; color:white; border-color:#4b5563; }
body.dark-mode button { background-color:#2563eb; }
</style>
