<template>
  <AdminLayout>
    <template #default>
      <h1>Banners</h1>
      <button @click="showAdd = true">Add Banner</button>

      <ul>
        <li v-for="b in banners" :key="b.id">
          <img :src="b.image" width="100"/>
          <p>{{ b.title }}</p>
          <button @click="editBanner(b)">Edit</button>
          <button @click="deleteBanner(b.id)">Delete</button>
        </li>
      </ul>

      <div v-if="showAdd" class="modal">
        <div class="modal-content">
          <h2>{{ editing ? 'Edit' : 'Add' }} Banner</h2>
          <input v-model="form.title" placeholder="Title"/>
          <input v-model="form.image" placeholder="Image URL"/>
          <input v-model="form.link" placeholder="Link"/>
          <label>
            Active
            <input type="checkbox" v-model="form.active"/>
          </label>
          <button @click="saveBanner">Save</button>
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

const banners = ref([])
const showAdd = ref(false)
const editing = ref(false)
const form = ref({ id:null, title:'', image:'', link:'', active:true })

const fetchBanners = async () => {
  const res = await axios.get('/api/banners')
  banners.value = res.data
}

const saveBanner = async () => {
  if(editing.value){
    await axios.put(`/api/banners/${form.value.id}`, form.value)
  } else {
    await axios.post('/api/banners', form.value)
  }
  showAdd.value = false
  editing.value = false
  form.value = { id:null, title:'', image:'', link:'', active:true }
  fetchBanners()
}

const editBanner = (b) => {
  form.value = { ...b }
  editing.value = true
  showAdd.value = true
}

const deleteBanner = async (id) => {
  await axios.delete(`/api/banners/${id}`)
  fetchBanners()
}

onMounted(fetchBanners)
</script>

<style scoped>
ul { list-style:none; padding-left:0; }
li { margin:0.5rem 0; }
img { display:block; margin-bottom:0.3rem; }
.modal { position:fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; }
.modal-content { background:white; padding:1rem; border-radius:0.5rem; }
</style>
