<template>
  <aside :class="['sidebar', { collapsed }]">
    <ul>
      <li v-for="item in menu" :key="item.route">
        <router-link :to="item.route">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
    <button @click="$emit('toggle')">Toggle</button>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ menu:Array, collapsed:Boolean })
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #1f2937;
  color: white;
  transition: width 0.3s;
}
.sidebar.collapsed { width: 60px; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar li { padding: 15px; }
</style>
