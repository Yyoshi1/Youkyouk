<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li v-for="addon in addons" :key="addon.id" v-if="addon.enabled">
        <router-link :to="addon.route">
          <i :class="addon.icon"></i> {{ addon.name }}
        </router-link>
      </li>
    </ul>
    <button @click="$emit('toggle')"><i class="linear-icon-menu"></i> Toggle</button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ collapsed: Boolean, addons: Array })
</script>

<style scoped>
.sidebar { width: 250px; background: #1f2937; color: white; transition: width 0.3s; }
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { padding: 15px; }
.sidebar li i { margin-right: 8px; }
button { width: 100%; padding: 10px; background: #111827; border: none; color: white; cursor: pointer; }
</style>
