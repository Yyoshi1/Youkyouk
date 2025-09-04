<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Addons</h2>
    <div v-if="loading">...</div>
    <div v-else class="space-y-4">
      <div v-for="addon in addons" :key="addon.id"
           class="p-4 border rounded-lg flex justify-between items-center">
        <div>
          <h3 class="font-semibold">{{ addon.name }}</h3>
          <p class="text-sm text-gray-500">{{ addon.description }}</p>
        </div>
        <button
          @click="toggle(addon.id)"
          class="px-4 py-2 rounded-lg"
          :class="addon.enabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'"
        >
          {{ addon.enabled ? "" : "" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const addons = ref([])
const loading = ref(true)

async function fetchAddons() {
  loading.value = true
  const res = await axios.get("/api/seller/addons")
  addons.value = res.data
  loading.value = false
}

async function toggle(id) {
  await axios.post(`/api/seller/addons/${id}/toggle`)
  await fetchAddons()
}

onMounted(fetchAddons)
</script>
