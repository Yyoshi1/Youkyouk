<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li v-for="item in addons" :key="item.id" v-if="item.enabled">
        <router-link :to="item.route">
          <i :class="item.icon"></i> {{ item.name }}
        </router-link>
      </li>
    </ul>
    <button @click="$emit('toggle')"><i class="linear-icon-menu"></i></button>
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
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 15px; }
.sidebar li i { margin-right: 8px; }
button { width: 100%; padding: 10px; background: #111827; color: white; border: none; cursor: pointer; }
</style>
