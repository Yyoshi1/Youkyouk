<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li v-for="addon in addons" v-if="addon.enabled" :key="addon.id">
        <router-link :to="'/seller/' + addon.name.toLowerCase()">{{ addon.name }}</router-link>
      </li>
    </ul>
    <button @click="$emit('toggle')">
      <svg><!-- Youkyouk icon for toggle --></svg>
    </button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  collapsed: Boolean,
  addons: Array
})
</script>

<style scoped>
.sidebar { width: 250px; background: #1f2937; color: white; transition: width 0.3s; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; margin-top: 20px; }
.sidebar li { padding: 15px; }
.sidebar li a { color: white; text-decoration: none; display: flex; align-items: center; }
.sidebar button { margin-top: 20px; background: none; border: none; color: white; cursor: pointer; }
</style>
